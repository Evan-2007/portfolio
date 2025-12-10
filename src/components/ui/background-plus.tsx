import { useState, useEffect, useMemo, useRef } from "react";

export default function InteractivePlusGrid({
    children,
}: {
    children?: React.ReactNode;
}) {
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const containerRef = useRef<HTMLDivElement>(null);

    const spacing = 80;
    const influenceRadius = 150;
    const plusSize = 32;
    const plusStrokeWidth = 6;
    const maxScale = 2.5;
    const padding = plusSize * maxScale;

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.outerHeight * 0.8,
            });
        };
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        window.addEventListener("scroll", () => {
            handleMouseLeave();
        });
        return () => {
            window.removeEventListener("resize", updateDimensions);
            window.removeEventListener("scroll", () => {
                handleMouseLeave();
            });
        };
    }, []);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        setMousePos({ x: e.pageX, y: e.pageY });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: -1000, y: -1000 });
    };

    const plusSigns = useMemo(() => {
        const signs = [];
        const cols = Math.ceil(dimensions.width / spacing) + 1;
        const rows = Math.ceil(dimensions.height / spacing) + 1;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * spacing + spacing / 2;
                const y = row * spacing + spacing / 2;

                if (y + padding > dimensions.height) continue;
                //if (x + padding > dimensions.width) continue;

                signs.push({ id: `${row}-${col}`, x, y });
            }
        }
        return signs;
    }, [dimensions]);

    return (
        <div
            ref={containerRef}
            className="z-15"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <svg className="absolute inset-0 w-full h-full">
                {plusSigns.map((plus) => {
                    const dx = mousePos.x - plus.x;
                    const dy = mousePos.y - plus.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const influence = Math.max(
                        0,
                        1 - distance / influenceRadius,
                    );

                    const scale = 1 + influence * 1.1;
                    const rotation = influence * 45;
                    const opacity = 0.3 + influence * 0.7;

                    const hue = 200 + influence * 120;
                    const saturation = 20 + influence * 80;
                    const lightness = 20 + influence * 30;

                    return (
                        <g
                            key={plus.id}
                            transform={`translate(${plus.x}, ${plus.y}) rotate(${rotation}) scale(${scale})`}
                            style={{
                                transition:
                                    "transform 0.15s ease-out, opacity 0.15s ease-out",
                            }}
                        >
                            <line
                                x1={plusSize / -2}
                                y1="0"
                                x2={plusSize / 2}
                                y2="0"
                                stroke={`hsl(${hue}, ${saturation}%, ${lightness}%)`}
                                strokeWidth={plusStrokeWidth}
                                strokeLinecap="round"
                                opacity={opacity}
                            />
                            <line
                                x1="0"
                                y1={plusSize / -2}
                                x2="0"
                                y2={plusSize / 2}
                                stroke={`hsl(${hue}, ${saturation}%, ${lightness}%)`}
                                strokeWidth={plusStrokeWidth}
                                strokeLinecap="round"
                                opacity={opacity}
                            />
                        </g>
                    );
                })}
            </svg>
            <div className="relative z-15">{children}</div>
        </div>
    );
}
