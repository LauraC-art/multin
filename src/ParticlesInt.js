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
              value: 35,
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
              distance: 150,
              color: "#696969",
              opacity: 0.4,
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