import { create } from 'zustand';
import type { MealPlan, Recipe } from '../types/meal';

interface MealStore {
  selectedPlan: MealPlan | null;
  customizations: {
    servings: number;
    mealsPerWeek: number;
    isGlutenFree: boolean;
    isNutFree: boolean;
    isSoyFree: boolean;
  };
  setSelectedPlan: (plan: MealPlan) => void;
  updateCustomizations: (customizations: Partial<MealStore['customizations']>) => void;
}

export const useMealStore = create<MealStore>((set) => ({
  selectedPlan: null,
  customizations: {
    servings: 2,
    mealsPerWeek: 3,
    isGlutenFree: false,
    isNutFree: false,
    isSoyFree: false,
  },
  setSelectedPlan: (plan) => set({ selectedPlan: plan }),
  updateCustomizations: (customizations) =>
    set((state) => ({
      customizations: { ...state.customizations, ...customizations },
    })),
}));