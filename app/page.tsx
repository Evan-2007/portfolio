import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import AnimatedBall from "@/components/ui/gradient";

import top from "@/components/ui/top";
import Top from "@/components/ui/top";
import Header from "@/components/ui/header";

export default function DotBackgroundDemo() {
  return (
    <div className="absolute ">
        <AnimatedBall />
      <Header></Header>
      <Top />
    </div>
  );
}
