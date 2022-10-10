import React from "react";

import Hoc from "./Hoc";

function CheckHoc() {
  return <div className="h-[300px] text-center">hocCheckPage</div>;
}

export default Hoc(CheckHoc);
