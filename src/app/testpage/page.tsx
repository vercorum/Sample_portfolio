import {
  TestTitle1,
  TestTitle2,
  TestTitle3,
} from "@/components/test-components/TestTitle";
import React from "react";

const page = () => {
  return (
    <div className="w-[100vw] h-screen flex flex-col justify-center items-center gap-2">
      <TestTitle1 name="sohan" age={12} />
      <TestTitle2 name="gihan" age={34} />
      <TestTitle3 name="ravi" age={27} />
    </div>
  );
};

export default page;
