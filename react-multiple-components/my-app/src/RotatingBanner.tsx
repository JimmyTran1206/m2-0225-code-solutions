import { Banner } from "./Banner";
import { Indicators } from "./Indicators";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";

export function RotatingBanner(){
  return (
    <>
      <Banner />
      <NextButton />
      <Indicators />
      <PrevButton />
    </>
  )
}
