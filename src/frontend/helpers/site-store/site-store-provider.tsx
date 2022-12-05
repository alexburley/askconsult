import createContext from "zustand/context";

import SiteStoreService, { SiteStore } from "./site-store";

const { Provider, useStore: useSiteStore } = createContext<SiteStore>();

export type SiteStoreProviderProps = {
  children: React.ReactElement;
};
export const SiteStoreProvider = ({ children }: SiteStoreProviderProps) => {
  return (
    <Provider createStore={SiteStoreService.createSiteStore}>
      {children}
    </Provider>
  );
};

export { useSiteStore };
