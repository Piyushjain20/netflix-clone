import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const modalStore = (set) => ({
  isModalOpen: false,
  modalElement: null,
  open: (modalObj) => {
    set((state) => ({
      isModalOpen: true,
      modalElement: modalObj,
    }));
  },
  close: () => {
    set((state) => ({
      isModalOpen: false,
      modalElement: null,
    }));
  },
});
const useModalStore = create(
  devtools(
    persist(modalStore, {
      name: "modalState",
    })
  )
);
export default useModalStore;
