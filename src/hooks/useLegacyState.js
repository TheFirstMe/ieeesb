import { useState } from "react";

export default function useLegacyState(initialState) {
  const [state, setState] = useState(initialState);

  const setLegacyState = (newState) => {
    setState((state) => ({ ...state, ...newState }));
  };
  return [state, setLegacyState];
}
