import { useState } from "react";

export const useToggle = (init: boolean) => {
  const [state, setState] = useState(init ?? false);
  const toggle = () => setState((state) => !state);
  return { state, toggle };
};
