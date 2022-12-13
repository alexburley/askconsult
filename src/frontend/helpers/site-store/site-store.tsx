import create from "zustand";

import sample from "./data/sample-query";

interface Booking {
  paymentID: string | null;
  query: string;
  callLength: number;
  fullName: string;
  email: string;
  phone: string;
}

export interface SiteStore {
  search: string;
  setSearch: (s: string) => void;

  booking: Booking;
  setBooking: (q: Booking) => void;
}
// TODO: This needs sorting out -- annoying types etc and bad errors
export default class SiteStoreService {
  static createSiteStore = () =>
    create<SiteStore>((set) => ({
      booking: {
        paymentID: null,
        query: sample,
        callLength: 60,
        fullName: "someName",
        email: "someEmail@mail.com",
        phone: "07565566777",
      },
      setBooking: (booking) => set({ booking }),

      search: null,
      setSearch: (search) => set({ search }),
    }));
}
