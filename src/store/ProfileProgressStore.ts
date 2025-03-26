import { create } from "zustand";

// Define the state type
interface ProgressState {
  step: number;
  nextStep: () => void;
  resetSteps: () => void;
}

// Create the Zustand store
export const useProgressStore = create<ProgressState>((set) => ({
  step: 1, // Initial state
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 4) })), // Max step = 4
  resetSteps: () => set({ step: 1 }), // Reset to step 1
}));
