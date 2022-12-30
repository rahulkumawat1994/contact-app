import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ContactInterface } from "../interfaces/contact";
import { immer } from "zustand/middleware/immer";

export interface ContactSliceInterface {
  contactData: ContactInterface[];
  setContact: (data: ContactInterface) => void;
  editContact: (id: string, data: ContactInterface) => void;
  deleteContact: (id: string) => void;
}

export const useContactStore = create<ContactSliceInterface>()(
  immer(
    devtools(
      persist(
        (set) => ({
          contactData: [],
          setContact: (data: ContactInterface): void => {
            set((state) => {
              state.contactData = [...state.contactData, data];
            });
          },
          editContact: (id: string, data: ContactInterface): void => {
            set((state) => {
              const draft = [...state.contactData];
              draft.forEach((item, i) => {
                if (item.phone === id) {
                  draft[i] = data;
                }
              });
              state.contactData = draft;
            });
          },
          deleteContact: (id: string): void => {
            set((state) => {
              state.contactData = state.contactData.filter(
                (item) => item.phone !== id
              );
            });
          },
        }),
        {
          name: "contact",
        }
      )
    )
  )
);
