import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const userStore = (set) => ({
  user: null,
  login: (userObj) => {
    set((state) => ({
      user: userObj,
    }));
  },
  logout: () => {
    set((state) => ({
      user: null,
    }));
  },
});
const useUserStore = create(
  devtools(
    persist(userStore, {
      name: "userObj",
      // storage: createJSONStorage(() => AsyncStorage),
    })
  )
);
export default useUserStore;
