import create from "zustand";

import sample from "./data/sample-query";

export interface SiteStore {
  search: string;
  setSearch: (s: string) => void;

  query: string;
  setQuery: (q: string) => void;
}

export default class SiteStoreService {
  static createSiteStore = () =>
    create<SiteStore>((set) => ({
      query: sample,
      setQuery: (query) => set({ query }),
      search: null,
      setSearch: (search) => set({ search }),
    }));
}
