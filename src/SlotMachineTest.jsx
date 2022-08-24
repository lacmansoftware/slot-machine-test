import React from "react";
import SlotMachine from "react-slot-machine-gen"; // or '../dist/react-slot-machine-gen';

const reels = [
  {
    imageSrc: "https://nuxy.github.io/slot-machine-gen/images/reel-strip1.png",
    symbols: [
      {
        title: "cherry",
        position: 100,
        weight: 2
      },
      {
        title: "plum",
        position: 300,
        weight: 6
      },
      {
        title: "orange",
        position: 500,
        weight: 5
      },
      {
        title: "bell",
        position: 700,
        weight: 1
      },
      {
        title: "cherry",
        position: 900,
        weight: 3
      },
      {
        title: "plum",
        position: 1100,
        weight: 5
      }
    ]
  }

  // add more reels ...
];

const SlotMachine = () => {
  const [play, setPlay] = React.useState(false);

  const playEvent = () => {
    setPlay(!play);
  };

  return (
    <>
      <React.Fragment>
        <SlotMachine reels={reels} play={play} />

        <button id="play-button" onClick={() => playEvent()}>
          Play
        </button>
      </React.Fragment>
    </>
  );
};

export default SlotMachine;
