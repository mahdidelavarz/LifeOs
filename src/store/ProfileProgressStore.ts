import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProgressState {
  step: number; // 1 to 4
  setStep: (step: number) => void;
}

const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      step: 1, // Start at step 1
      setStep: (step) => set({ step }),
    }),
    {
      name: 'progress-storage', // Key for localStorage
    }
  )
);

export default useProgressStore;