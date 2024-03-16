import React from "react";

import { Context } from "../Context/useTheme";

const useTheme = () => {
  const ctx = React.useContext(Context);

  return [ctx.theme, ctx.setheme];
};

export default useTheme;