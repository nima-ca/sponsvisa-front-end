import { useCallback, useState } from "react";

export const useToggle = (init: boolean) => {
  const [state, setState] = useState(init ?? false);
  const toggle = useCallback(() => setState((state) => !state), []);
  return { state, toggle };
};
