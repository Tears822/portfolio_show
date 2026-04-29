import { useEffect, useState } from "react";
import Lottie from "lottie-react";

type LottieJson = Record<string, unknown>;

/**
 * Ambient page background: CSS gradient/mesh always visible; optional Lottie from
 * `public/lottie/background.json` (add your file there to layer animation on top).
 */
export const LottieBackground = () => {
  const [animationData, setAnimationData] = useState<LottieJson | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadAnimation = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}lottie/background.json`, {
          cache: "force-cache",
        });
        if (!response.ok) return;
        const json = (await response.json()) as LottieJson;
        if (mounted) setAnimationData(json);
      } catch {
        // Keep CSS-only background.
      }
    };

    void loadAnimation();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-0 h-screen w-screen pointer-events-none overflow-hidden"
    >
      {/* Base + animated mesh - lives behind PageShell (must stay visible: shell uses bg-transparent). */}
      <div className="absolute inset-0 bg-blue-950" />
      <div
        className="absolute -left-1/2 -top-1/2 h-[200%] w-[200%] will-change-transform animate-aurora-shift opacity-[0.95]"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 30% 20%, rgba(56, 189, 248, 0.28), transparent 55%),
            radial-gradient(ellipse 60% 40% at 75% 30%, rgba(59, 130, 246, 0.36), transparent 50%),
            radial-gradient(ellipse 50% 60% at 50% 70%, rgba(37, 99, 235, 0.3), transparent 55%),
            radial-gradient(ellipse 40% 35% at 10% 60%, rgba(29, 78, 216, 0.22), transparent 45%)
          `,
        }}
      />
      <div className="absolute -right-1/3 top-0 h-[120%] w-[120%] will-change-transform animate-aurora-rotate opacity-40 blur-3xl">
        <div
          className="h-full w-full"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(14,116,144,0.34), transparent 40%, rgba(29,78,216,0.28) 60%, transparent 80%)",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/18 via-blue-950/12 to-blue-950/92" />

      {animationData ? (
        <div
          className="absolute inset-0 h-full w-full opacity-70 mix-blend-normal"
          style={{ filter: "saturate(0.85) brightness(0.72) contrast(1.06)" }}
        >
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="h-full w-full"
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          />
        </div>
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,rgba(30,58,138,0.18),rgba(15,23,42,0.65))]" />
    </div>
  );
};
