// import type { NextPage } from 'next'
// import RollingItem from 'react-rolling-item'
import * as React from "react";
// import imageFile from './images/bg-fruit.png';
import Image from "next/image";
import MobileRollingItem from "../MobileRollingItem";
import DesktopRollingItem from "../DesktopRollingItem";

const RollingPan = () => {
  const [mobile, setMobile] = React.useState(false);
  const [start, setStart] = React.useState(false);

  function handleWindowSizeChange() {
    if (window !== undefined) {
      setMobile(window.innerWidth < 1024 ? true : false);
    }
  }
  React.useEffect(() => {
    if (window !== undefined) {
      handleWindowSizeChange();
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex-[3] flex flex-row items-center justify-center relative h-[75v] z-1">
        {mobile ? (
          <div className="flex gap-[30px] absolute z-10 bottom-[100] top-[140px]">
            <MobileRollingItem start={start} setStart={setStart} target={3} />
            <MobileRollingItem start={start} setStart={setStart} target={4} />
            <MobileRollingItem start={start} setStart={setStart} target={7} />
          </div>
        ) : (
          <div className="flex gap-[70px] absolute z-10 bottom-[100] top-[140px]">
            <DesktopRollingItem start={start} setStart={setStart} target={3} />
            <DesktopRollingItem start={start} setStart={setStart} target={4} />
            <DesktopRollingItem start={start} setStart={setStart} target={7} />
          </div>
        )}

        <Image
          className="z-0"
          src={mobile ? "/images/draw1.png" : "/images/desktop/draw1.png"}
          width={mobile ? 300 : 838}
          height={mobile ? 262 : 731}
          style={{ maxHeight: "1000%" }}
        />
      </div>
      {/* <button className="text-center text-orange-600 font-semibold h-[25v]">
        Again
      </button> */}
    </div>
  );
};

export default RollingPan;
