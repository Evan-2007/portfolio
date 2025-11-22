'use client';
import React, { useEffect, useState, useRef } from 'react';


//https://github.com/Evan-2007/Amplitune/blob/main/src/components/player/lyrics/syllable.tsx

interface WordData {
  value: string;
  start: number;
  end: number;
  whitespace?: boolean;
}

const GradientWord: React.FC<{
  word: string;
  wordStart: number;
  wordEnd: number;
  progress: number;
  whitespace?: boolean;
}> = ({ word, wordStart, wordEnd, progress, whitespace }) => {
  const letters = word.split('');
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [letterWidths, setLetterWidths] = useState<number[]>([]);

  useEffect(() => {
    if (letterRefs.current.length) {
      const widths = letterRefs.current.map((ref) => (ref ? ref.offsetWidth : 0));
      setLetterWidths(widths);
    }
  }, [word]);

  
  let overallPercent = 0;
  if (progress >= wordEnd) {
    overallPercent = 100;
  } else if (progress > wordStart) {
    overallPercent = ((progress - wordStart) / (wordEnd - wordStart)) * 100;
  }

  const totalWidth = letterWidths.reduce((acc, width) => acc + width, 0);
  const cumulativeOffsets = letterWidths.map((width, index) =>
    letterWidths.slice(0, index + 1).reduce((acc, w) => acc + w, 0)
  );


  //const shouldGlow = (wordEnd - wordStart) / word.length > 0.1 && word.length > 1;
  const shouldGlow = true;

  return (
    <span className="relative inline-block font-sans font-bold">
      {letters.map((letter, index) => {
        const letterStartPercent = totalWidth && index > 0
            ? (cumulativeOffsets[index - 1] / totalWidth) * 100
            : 0;
        const letterEndPercent = totalWidth
          ? (cumulativeOffsets[index] / totalWidth) * 100
          : 0;

        let letterFillPercent = 0;
        if (overallPercent >= letterEndPercent) {
          letterFillPercent = 100;
        } else if (overallPercent > letterStartPercent) {
          letterFillPercent =
            ((overallPercent - letterStartPercent) /
              (letterEndPercent - letterStartPercent)) *
            100;
        }

        return (
          <span
            key={index}
            className={`
              relative inline-block transition-transform duration-300
              ${letterFillPercent > 0 && !shouldGlow ? '-translate-y-1' : ''} 
              ${shouldGlow && letterFillPercent > 1 ? '-translate-y-1 animate-[pulse_1.4s_ease-out]' : ''}
            `}
          >
            {/* Background Layer (Inactive Gray) */}
            <span
              style={{ color: '#4a4a55' }} // Darker gray for inactive
              ref={(el) => {
                letterRefs.current[index] = el;
              }}
            >
              {letter}
            </span>

            {/* Foreground Layer (Active Gradient/White) */}
            <span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${letterFillPercent}%`,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                color: 'white',
                height: '100%',
                filter: shouldGlow && letterFillPercent > 0 && overallPercent < 100
                    ? 'drop-shadow(0 0 4px rgba(255,255,255,0.8))'
                    : 'drop-shadow(0 0 0px white)',
                transition: 'filter 0.2s ease-in-out',
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
      {whitespace && '\u00A0'}
    </span>
  );
};

const GradientTextLine: React.FC<{
  words: WordData[];
  progress: number;
}> = ({ words, progress }) => {
  return (
    <div className="flex flex-wrap text-4xl md:text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
      {words.map((w, index) => (
        <GradientWord
          key={`${w.value}-${index}`}
          word={w.value}
          wordStart={w.start}
          wordEnd={w.end}
          progress={progress}
          whitespace={w.whitespace}
        />
      ))}
    </div>
  );
};



export function TextFill({
    words
}: {
    words: WordData[];
}) {
  const [progress, setProgress] = useState<number>(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let rafId: number;
    const startTime = performance.now();
    const endTime = words[words.length - 1].end + 0.5;

    const tick = () => {
      const now = performance.now();
      const elapsedSeconds = (now - startTime) / 1000;

      setProgress(elapsedSeconds);

      if (elapsedSeconds < endTime) {
        rafId = requestAnimationFrame(tick);
      } else {
        setIsFinished(true);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div >
      
      <div className="">
        <GradientTextLine words={words} progress={progress} />
      </div>

      {/* <div className={`mt-12 transition-opacity duration-1000 ${isFinished ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={() => window.location.reload()}
          className="text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
        >
        </button>
      </div> */}

    </div>
  );
}