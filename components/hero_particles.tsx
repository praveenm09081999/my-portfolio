import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

const HeroParticles = ({ darkMode }: { darkMode: boolean }): JSX.Element => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      //https://github.com/tsparticles/react
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false, zIndex: -1 },
      background: {
        color: "transparent",
      },
      particles: {
        color: {
          value: darkMode ? "#E5E7EB" : "#F3E8FF",
        },
        links: {
          enable: true,
          color: darkMode ? "#4B5563" : "#C084FC",
          distance: 120,
          opacity: darkMode ? 0.3 : 0.5,
          width: 1,
          triangles: {
            enable: true,
            color: darkMode ? "#6B7280" : "#D8B4FE",
            opacity: 0.1,
          },
        },
        move: {
          enable: true,
          speed: darkMode ? 1.5 : 2,
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: {
          density: { enable: true, area: 800 },
          value: darkMode ? 90 : 110,
        },
        opacity: {
          value: darkMode ? 0.4 : 0.6,
        },
        size: {
          value: { min: 1, max: darkMode ? 3 : 4 },
        },
        shape: {
          type: "circle",
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: darkMode ? "grab" : "repulse",
          },
        },
        modes: {
          repulse: { distance: 80, duration: 0.4 },
          grab: { distance: 120, links: { opacity: 0.8 } },
        },
      },
    }),
    [darkMode]
  );

  return (
    <div
      className={
        darkMode
          ? "absolute inset-0 w-full h-full bg-gradient-to-b from-gray-900 to-gray-700"
          : "absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-300"
      }
    >
      {init ? (
        <Particles
          id="tsparticles"
          className="w-full h-full"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default HeroParticles;
