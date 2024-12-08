export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  category: string;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: Ingredient[];
  instructions: string[];
  nutrition: NutritionInfo;
  tags: string[];
  isGlutenFree: boolean;
  isNutFree: boolean;
  isSoyFree: boolean;
}

export interface MealPlan {
  id: string;
  name: string;
  description: string;
  recipes: Recipe[];
  servings: number;
  mealsPerWeek: number;
  price: number;
}