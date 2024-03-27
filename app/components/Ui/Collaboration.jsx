import { curve1, curve2 } from "@/public";
import Img from "@/app/components/Image";

export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[6rem] -mt-1 ml-10 pointer-events-none xl:block 2xl:w-[20rem] ">
      <Img src={curve2} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <Img src={curve1} width={522} height={182} alt="Curve 1" />
    </div>
  );
};
