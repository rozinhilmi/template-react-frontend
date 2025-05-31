import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StoreInterface } from "./interface";

// Membuat store dengan middleware persist
export const useStore = create<StoreInterface>()(
  persist(
    (set) => ({
      setStore: (key: string, newValue: any) =>
        set((state) => ({
          ...state,
          [key]: newValue,
        })),
      currentTheme: false,
      setTheme: () =>
        set((state) => ({
          currentTheme: !state.currentTheme,
        })),
      count: 1,
      inputState: "input state value",
      token: "",
      secretKey: import.meta.env.VITE_SECRET_KEY,
      appVersion: import.meta.env.VITE_APP_VERSION,
    }),
    {
      name: "store",
    }
  )
);

export const store = <K extends keyof StoreInterface>(key: K) => {
  return useStore<StoreInterface[K]>((state) => state[key]);
};

export const setStore = (key: string, newValue: any) => {
  useStore.getState().setStore(key, newValue); // Memanggil fungsi setStore di store
};

export const useToken = () => {
  return {
    headers: {
      Authorization: useStore.getState().token,
    },
  };
};
