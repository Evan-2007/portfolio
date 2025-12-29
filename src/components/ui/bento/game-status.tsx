import Image from "next/image";
import { SpotlightBox } from "@/components/ui/spotlight-box";
import { useState, useEffect } from "react";

type DiscordActivity = {
  name: string;
  type: number;
  details: string | null;
  state: string | null;
  largeText: string | null;
  smallText: string | null;
  largeUrl: string | null;
  smallUrl: string | null;
};

type ActivityData = {
  online: boolean;
  status: "online" | "idle" | "dnd" | "offline";
  activities: DiscordActivity[];
  currentGame: string | null;
  lastPlayedDuration: number;
  lastPlayedGame: DiscordActivity | null;
};

const statusConfig = {
  online: {
    color: "bg-emerald-500",
    glow: "shadow-[0_0_12px_rgba(16,185,129,0.6)]",
    label: "Online",
  },
  idle: {
    color: "bg-amber-400",
    glow: "shadow-[0_0_12px_rgba(251,191,36,0.6)]",
    label: "Idle",
  },
  dnd: {
    color: "bg-rose-500",
    glow: "shadow-[0_0_12px_rgba(244,63,94,0.6)]",
    label: "Do Not Disturb",
  },
  offline: {
    color: "bg-zinc-500",
    glow: "",
    label: "Offline",
  },
};

function StatusIndicator({ status }: { status: keyof typeof statusConfig }) {
  const config = statusConfig[status];
  const isOnline = status === "online";

  return (
    <div className="flex items-center gap-2.5">
      <div className="relative">
        <div
          className={`w-3 h-3 rounded-full ${config.color} ${config.glow} transition-all duration-300`}
        />
        {isOnline && (
          <div
            className={`absolute inset-0 w-3 h-3 rounded-full ${config.color} animate-ping opacity-75`}
          />
        )}
      </div>
      <span className="text-sm font-medium text-zinc-400">{config.label}</span>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-3 h-3 rounded-full bg-zinc-700" />
        <div className="h-4 w-16 bg-zinc-700 rounded" />
      </div>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-zinc-700/50 rounded-xl" />
        <div className="flex-1 space-y-2.5">
          <div className="h-5 w-32 bg-zinc-700/50 rounded" />
          <div className="h-4 w-48 bg-zinc-700/30 rounded" />
          <div className="h-4 w-40 bg-zinc-700/30 rounded" />
        </div>
      </div>
    </div>
  );
}

function ActivityDisplay({ data }: { data: DiscordActivity }) {
  return (
    <div className="group relative mt-4 mb-4">
      <div className=" inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex items-center gap-4 bg-zinc-800/40 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600/50 rounded-2xl p-4 transition-all duration-300 hover:bg-zinc-800/60">
        <div className="relative flex-shrink-0">
          {data.largeUrl ? (
            <div className="relative">
              <Image
                src={data.largeUrl}
                alt={data.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-xl object-cover ring-1 ring-white/10"
              />
              {data.smallUrl && (
                <div className="absolute -bottom-1 -right-1 ring-2 ring-zinc-900 rounded-lg overflow-hidden">
                  <Image
                    src={data.smallUrl}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 object-cover"
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-xl flex items-center justify-center ring-1 ring-white/5">
              <svg
                className="w-8 h-8 text-zinc-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-white truncate">
            {data.name}
          </h3>
          {data.details && (
            <p className="text-sm text-zinc-400 truncate mt-0.5">
              {data.details}
            </p>
          )}
          {data.state && (
            <p className="text-sm text-zinc-500 truncate mt-0.5">
              {data.state}
            </p>
          )}
        </div>

        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-zinc-700/50 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatLastSeen(minutes: number): string {
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${Math.floor(minutes)}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function Activity() {
  const [activityData, setActivityData] = useState<ActivityData | null>(null);
  const [state, setState] = useState<"loading" | "loaded" | "error">("loading");

  useEffect(() => {
    async function fetchActivity() {
        const websocket = new WebSocket('ws://status-server-production.up.railway.app/ws');
        websocket.onopen = () => {
            console.log('WebSocket connection established');
        };
        websocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setActivityData(data);
            setState("loaded");
        };
        websocket.onerror = (error) => {
            console.error('WebSocket error:', error);
            setState("error");
        };  
    }
    fetchActivity();
  }, []);

  const lastSeenMinutes = activityData
    ? activityData.lastPlayedDuration / 60000
    : 0;

  return (
    <SpotlightBox className="mb-4">
      {state === "loading" ? (
        <LoadingSkeleton />
      ) : state === "error" ? (
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-3">
            <svg
              className="w-6 h-6 text-rose-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <p className="text-zinc-400 text-sm">Unable to load activity</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Try again
          </button>
        </div>
      ) : activityData ? (
        <div>
          <div className="flex items-center justify-between">
            <StatusIndicator status={activityData.status} />
            {activityData.status === "offline" && lastSeenMinutes > 0 && (
              <span className="text-xs text-zinc-500">
                Last seen {formatLastSeen(lastSeenMinutes)}
              </span>
            )}
          </div>

          {activityData.activities.length > 0 ? (
            <ActivityDisplay data={activityData.activities[0]} />
          ) : activityData.lastPlayedGame ? (
            <div className="mt-4">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                Last Activity
              </p>
              <ActivityDisplay data={activityData.lastPlayedGame} />
            </div>
          ) : (
            <div className="mt-5 py-8 flex flex-col items-center justify-center text-center border border-dashed border-zinc-700/50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5 text-zinc-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <p className="text-sm text-zinc-500">No current activity</p>
            </div>
          )}
        </div>
      ) : null}
    </SpotlightBox>
  );
}