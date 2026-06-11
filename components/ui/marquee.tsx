"use client";

/**
 * Infinite horizontal marquee. Content is duplicated once and the track
 * translates -50%, so the loop is seamless as long as children fill a row.
 */
export function Marquee({
  children,
  duration = 30,
  reverse = false,
  className = "",
}: {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="animate-marquee inline-flex w-max items-center"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        <div className="inline-flex items-center">{children}</div>
        <div className="inline-flex items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
