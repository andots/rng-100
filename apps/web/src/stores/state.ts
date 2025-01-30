import { createWithSignal } from "solid-zustand";

interface AppState {
  generatedNumber: number;
  theme: Theme;
  generateRandomNumber: () => void;
  toggleTheme: () => void;
}

export type Theme = "light" | "dark" | "system";

export const useAppSate = createWithSignal<AppState>((set) => ({
  theme: "dark",
  generatedNumber: randomInteger(1, 100),
  toggleTheme: () => set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
  generateRandomNumber: () => set(() => ({ generatedNumber: randomInteger(1, 100) })),
}));

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
