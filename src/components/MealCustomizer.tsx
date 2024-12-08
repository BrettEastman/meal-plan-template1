import { useState } from 'react';
import { Minus, Plus, Utensils } from 'lucide-react';
import { Button } from './ui/Button';

export function MealCustomizer() {
  const [servings, setServings] = useState(2);
  const [mealsPerWeek, setMealsPerWeek] = useState(3);
  const [preferences, setPreferences] = useState({
    isGlutenFree: false,
    isNutFree: false,
    isSoyFree: false,
  });

  const updateServings = (delta: number) => {
    setServings((prev) => Math.max(1, Math.min(8, prev + delta)));
  };

  const updateMeals = (delta: number) => {
    setMealsPerWeek((prev) => Math.max(2, Math.min(7, prev + delta)));
  };

  return (
    <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
      <div className="space-y-8">
        {/* Servings Selector */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Servings per meal</h3>
          <div className="mt-4 flex items-center gap-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => updateServings(-1)}
              disabled={servings <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-xl font-medium">{servings}</span>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => updateServings(1)}
              disabled={servings >= 8}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Meals per Week Selector */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Meals per week</h3>
          <div className="mt-4 flex items-center gap-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => updateMeals(-1)}
              disabled={mealsPerWeek <= 2}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-xl font-medium">{mealsPerWeek}</span>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => updateMeals(1)}
              disabled={mealsPerWeek >= 7}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Dietary Preferences */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Dietary Preferences</h3>
          <div className="mt-4 space-y-3">
            {Object.entries(preferences).map(([key, value]) => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      [key]: e.target.checked,
                    }))
                  }
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span className="text-gray-700">
                  {key === 'isGlutenFree'
                    ? 'Gluten-free'
                    : key === 'isNutFree'
                    ? 'Nut-free'
                    : 'Soy-free'}
                </span>
              </label>
            ))}
          </div>
        </div>

        <Button className="w-full">
          <Utensils className="mr-2 h-4 w-4" />
          Update Plan
        </Button>
      </div>
    </div>
  );
}