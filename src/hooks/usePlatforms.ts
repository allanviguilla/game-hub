import useData from "./useData";

import { Platform } from "./useGames";

export default function usePlatforms() {
  return useData<Platform>("/platforms/lists/parents");
}
