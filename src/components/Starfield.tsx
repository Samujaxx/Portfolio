import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

const Starfield: React.FC = () => {
  const [init, setInit] = useState(false);

  // init engine ONCE
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // our particle options
  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: 160,
          density: {
            enable: true, // v3: only enable/width/height here
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 2 },
        },
        opacity: {
          value: 0.7,
          animation: {
            enable: true,
            speed: 0.3,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="starfield"
      className="fixed inset-0 z-0 pointer-events-none"
      options={options}
    />
  );
};

export default Starfield;
