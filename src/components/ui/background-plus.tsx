import { useState, useEffect, useRef, useCallback } from "react";

interface PlusSign {
    x: number;
    y: number;
    scale: number;
    rotation: number;
    opacity: number;
    hue: number;
    saturation: number;
    lightness: number;
}

export default function InteractivePlusGrid({
    children,
}: {
    children?: React.ReactNode;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mousePosRef = useRef({ x: -1000, y: -1000 });
    const plusSignsRef = useRef<PlusSign[]>([]);
    const animationFrameRef = useRef<number>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

    const spacing = 80;
    const influenceRadius = 150;
    const plusSize = 32;
    const plusStrokeWidth = 6;
    const maxScale = 2.5;
    const padding = plusSize * maxScale;
    const lerpFactor = 0.12; //animation smoothness

    // Initialize
    const initPlusSigns = useCallback(
        (width: number, height: number) => {
            const signs: PlusSign[] = [];
            const cols = Math.ceil(width / spacing) + 1;
            const rows = Math.ceil(height / spacing) + 1;

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const x = col * spacing + spacing / 2;
                    const y = row * spacing + spacing / 2;

                    if (y + padding > height) continue;

                    signs.push({
                        x,
                        y,
                        scale: 1,
                        rotation: 0,
                        opacity: 0.3,
                        hue: 200,
                        saturation: 20,
                        lightness: 20,
                    });
                }
            }
            plusSignsRef.current = signs;
        },
        [padding],
    );

    const lerp = (current: number, target: number, factor: number) => {
        return current + (target - current) * factor;
    };

    const drawPlus = (
        ctx: CanvasRenderingContext2D,
        plus: PlusSign,
        dpr: number,
    ) => {
        ctx.save();
        ctx.translate(plus.x * dpr, plus.y * dpr);
        ctx.rotate((plus.rotation * Math.PI) / 180);
        ctx.scale(plus.scale, plus.scale);

        ctx.strokeStyle = `hsla(${plus.hue}, ${plus.saturation}%, ${plus.lightness}%, ${plus.opacity})`;
        ctx.lineWidth = plusStrokeWidth * dpr;
        ctx.lineCap = "round";

        const halfSize = (plusSize / 2) * dpr;

        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(-halfSize, 0);
        ctx.lineTo(halfSize, 0);
        ctx.stroke();

        // Vertical line
        ctx.beginPath();
        ctx.moveTo(0, -halfSize);
        ctx.lineTo(0, halfSize);
        ctx.stroke();

        ctx.restore();
    };

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const mousePos = mousePosRef.current;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        plusSignsRef.current.forEach((plus) => {
            const dx = mousePos.x - plus.x;
            const dy = mousePos.y - plus.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const influence = Math.max(0, 1 - distance / influenceRadius);

            const targetScale = 1 + influence * 1.1;
            const targetRotation = influence * 45;
            const targetOpacity = 0.3 + influence * 0.7;
            const targetHue = 200 + influence * 120;
            const targetSaturation = 20 + influence * 80;
            const targetLightness = 20 + influence * 30;

            plus.scale = lerp(plus.scale, targetScale, lerpFactor);
            plus.rotation = lerp(plus.rotation, targetRotation, lerpFactor);
            plus.opacity = lerp(plus.opacity, targetOpacity, lerpFactor);
            plus.hue = lerp(plus.hue, targetHue, lerpFactor);
            plus.saturation = lerp(
                plus.saturation,
                targetSaturation,
                lerpFactor,
            );
            plus.lightness = lerp(plus.lightness, targetLightness, lerpFactor);

            drawPlus(ctx, plus, dpr);
        });

        animationFrameRef.current = requestAnimationFrame(animate);
    }, [lerpFactor]);

    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth;
            const height = window.outerHeight * 0.8;
            setDimensions({ width, height });

            const canvas = canvasRef.current;
            if (canvas) {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
            }

            initPlusSigns(width, height);
        };

        const handleScroll = () => {
            mousePosRef.current = { x: -1000, y: -1000 };
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        window.addEventListener("scroll", handleScroll);

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", updateDimensions);
            window.removeEventListener("scroll", handleScroll);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [initPlusSigns, animate]);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        mousePosRef.current = { x: e.pageX, y: e.pageY };
    };

    const handleMouseLeave = () => {
        mousePosRef.current = { x: -1000, y: -1000 };
    };

    return (
        <div
            ref={containerRef}
            className="z-15"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ width: dimensions.width, height: dimensions.height }}
            />
            <div className="relative z-15">{children}</div>
        </div>
    );
}
