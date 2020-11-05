import Particles from "react-particles-js";
export const ParticlesScreen = (props) => {
  return (
    <div>
      <div
        style={{
          textAlign: "center"
        }}
      >
      </div>

      <Particles
        style={{
          ...props.style,
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        width="100%"
        height="350%"
        params={{
          particles: {
            move: {
              speed: 0.5,
            },
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            size: {
              value: 2.5,
            },
            color: {
              value: "#696969",
            },
            line_linked: {
              enable: true,
              distance: 200,
              color: "#fff",
              opacity: 1,
              width: 1,
            },
          },

          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
          },
        }}
      />
    </div>
  );
};