"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

const imageSources = [
  "/images/about/about-teacher-community-v1.png",
  "/images/about/about-ai-workshop-close-v1.png",
  "/images/about/about-howie-teacher-training-center-v2.png",
  "/images/about/about-classroom-workshop-v1.png",
  "/images/about/about-teacher-participation-v1.png",
] as const;

const cycles = [0, 1, 2, 3, 4, 5, 6] as const;

type DragState = {
  pointerId: number;
  lastX: number;
  lastTime: number;
  velocity: number;
};

export function AboutStoryStrip({
  label,
  title,
  instructions,
  alt,
}: {
  label: string;
  title: string;
  instructions: string;
  alt: readonly [string, string, string, string, string];
}) {
  const stripRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const cycleWidthRef = useRef(0);
  const xRef = useRef(0);
  const boundsRef = useRef({ min: 0, max: 0 });
  const animationRef = useRef<number | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const initializedRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const setTrackX = useCallback((nextX: number) => {
    xRef.current = nextX;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${nextX}px, 0, 0)`;
    }
  }, []);

  const stopAnimation = useCallback(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const normalizePosition = useCallback(() => {
    const cycleWidth = cycleWidthRef.current;
    if (!cycleWidth) return;

    const wrappedX =
      (((xRef.current % cycleWidth) + cycleWidth) % cycleWidth) -
      3 * cycleWidth;
    setTrackX(wrappedX);
  }, [setTrackX]);

  const animateTo = useCallback(
    (targetX: number, duration = 420) => {
      stopAnimation();
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reducedMotion) {
        setTrackX(targetX);
        normalizePosition();
        return;
      }

      const startX = xRef.current;
      const startedAt = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setTrackX(startX + (targetX - startX) * eased);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(tick);
          return;
        }

        animationRef.current = null;
        normalizePosition();
      };

      animationRef.current = requestAnimationFrame(tick);
    },
    [normalizePosition, setTrackX, stopAnimation],
  );

  const startMomentum = useCallback(
    (initialVelocity: number) => {
      stopAnimation();
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      let velocity = Math.max(-4, Math.min(4, initialVelocity * 1.65));

      if (reducedMotion || Math.abs(velocity) < 0.06) {
        normalizePosition();
        return;
      }

      let previousTime = performance.now();
      const tick = (now: number) => {
        const deltaTime = Math.min(32, now - previousTime);
        previousTime = now;

        const proposedX = xRef.current + velocity * deltaTime;
        const nextX = Math.max(
          boundsRef.current.min,
          Math.min(boundsRef.current.max, proposedX),
        );
        setTrackX(nextX);

        if (nextX !== proposedX) velocity = 0;
        velocity *= Math.pow(0.968, deltaTime / 16.67);

        if (Math.abs(velocity) > 0.06) {
          animationRef.current = requestAnimationFrame(tick);
          return;
        }

        animationRef.current = null;
        normalizePosition();
      };

      animationRef.current = requestAnimationFrame(tick);
    },
    [normalizePosition, setTrackX, stopAnimation],
  );

  useEffect(() => {
    const strip = stripRef.current;
    const track = trackRef.current;
    if (!strip || !track) return;

    const measure = () => {
      const middleCycleStart = track.querySelector<HTMLElement>(
        '.about-story-frame[data-cycle="3"][data-image-index="0"]',
      );
      const followingCycleStart = track.querySelector<HTMLElement>(
        '.about-story-frame[data-cycle="4"][data-image-index="0"]',
      );
      const centreFrame = track.querySelector<HTMLElement>(
        '.about-story-frame[data-cycle="3"][data-image-index="2"]',
      );
      if (!middleCycleStart || !followingCycleStart || !centreFrame) return;

      const previousCycleWidth = cycleWidthRef.current;
      const cycleWidth =
        followingCycleStart.offsetLeft - middleCycleStart.offsetLeft;
      cycleWidthRef.current = cycleWidth;
      boundsRef.current = {
        min: strip.clientWidth - track.scrollWidth,
        max: 0,
      };

      if (!initializedRef.current || !previousCycleWidth) {
        const initialX =
          strip.clientWidth / 2 -
          (centreFrame.offsetLeft + centreFrame.offsetWidth / 2);
        setTrackX(initialX);
        initializedRef.current = true;
        setIsReady(true);
        return;
      }

      const phase =
        ((xRef.current % previousCycleWidth) + previousCycleWidth) %
        previousCycleWidth;
      setTrackX((phase / previousCycleWidth) * cycleWidth - 3 * cycleWidth);
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(strip);
    return () => {
      resizeObserver.disconnect();
      stopAnimation();
    };
  }, [setTrackX, stopAnimation]);

  const finishDrag = (
    event: ReactPointerEvent<HTMLElement>,
    withMomentum: boolean,
  ) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragRef.current = null;
    setIsDragging(false);

    if (withMomentum) startMomentum(drag.velocity);
    else normalizePosition();
  };

  return (
    <section
      id="story"
      ref={stripRef}
      className={`about-story-strip${isDragging ? " is-dragging" : ""}`}
      aria-label={label}
      aria-roledescription="carousel"
      aria-describedby="about-story-instructions"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? -1 : 1;
        const firstFrame = trackRef.current?.querySelector<HTMLElement>(
          '.about-story-frame[data-cycle="3"][data-image-index="0"]',
        );
        const secondFrame = trackRef.current?.querySelector<HTMLElement>(
          '.about-story-frame[data-cycle="3"][data-image-index="1"]',
        );
        const step =
          firstFrame && secondFrame
            ? secondFrame.offsetLeft - firstFrame.offsetLeft
            : 360;
        animateTo(xRef.current + direction * step);
      }}
      onPointerDown={(event) => {
        if (event.button !== 0) return;
        stopAnimation();
        const now = performance.now();
        dragRef.current = {
          pointerId: event.pointerId,
          lastX: event.clientX,
          lastTime: now,
          velocity: 0,
        };
        event.currentTarget.setPointerCapture(event.pointerId);
        setIsDragging(true);
      }}
      onPointerMove={(event) => {
        const drag = dragRef.current;
        if (!drag || drag.pointerId !== event.pointerId) return;

        const now = performance.now();
        const deltaX = event.clientX - drag.lastX;
        const deltaTime = Math.max(1, now - drag.lastTime);
        const instantVelocity = deltaX / deltaTime;
        drag.velocity = drag.velocity * 0.65 + instantVelocity * 0.35;
        drag.lastX = event.clientX;
        drag.lastTime = now;

        const nextX = Math.max(
          boundsRef.current.min,
          Math.min(boundsRef.current.max, xRef.current + deltaX),
        );
        setTrackX(nextX);
      }}
      onPointerUp={(event) => finishDrag(event, true)}
      onPointerCancel={(event) => finishDrag(event, false)}
    >
      <h2 className="sr-only">{title}</h2>
      <p id="about-story-instructions" className="sr-only">
        {instructions}
      </p>
      <ul
        ref={trackRef}
        className={`about-story-track${isReady ? " is-ready" : ""}`}
        onDragStart={(event) => event.preventDefault()}
      >
        {cycles.flatMap((cycle) =>
          imageSources.map((src, index) => {
            const isAccessibleCycle = cycle === 3;
            return (
              <li
                className="about-story-frame"
                data-cycle={cycle}
                data-image-index={index}
                aria-hidden={isAccessibleCycle ? undefined : true}
                key={`${cycle}-${src}`}
              >
                <Image
                  src={src}
                  alt={isAccessibleCycle ? alt[index] : ""}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1600px) 520px, (min-width: 768px) 34vw, 288px"
                  quality={88}
                  draggable={false}
                />
              </li>
            );
          }),
        )}
      </ul>
    </section>
  );
}
