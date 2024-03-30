import { NavigationContext } from "../contexts/navigation.context";

import { useContext } from "react";

function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;
