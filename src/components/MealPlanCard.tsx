import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import type { MealPlan } from '../types/meal';

interface MealPlanCardProps {
  plan: MealPlan;
  onSelect: (plan: MealPlan) => void;
}

export function MealPlanCard({ plan, onSelect }: MealPlanCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
      <p className="mt-2 text-gray-600">{plan.description}</p>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2">
          <Check className="h-5 w-5 text-green-500" />
          <span>{plan.mealsPerWeek} meals per week</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="h-5 w-5 text-green-500" />
          <span>{plan.servings} servings per meal</span>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-2xl font-bold text-gray-900">
          ${plan.price}
          <span className="text-base font-normal text-gray-600">/week</span>
        </p>
      </div>

      <Button
        className="mt-6 w-full"
        onClick={() => onSelect(plan)}
      >
        Select Plan
      </Button>
    </div>
  );
}