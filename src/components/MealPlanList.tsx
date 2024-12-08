import { SAMPLE_MEAL_PLANS } from '@/lib/constants';
import { MealPlanCard } from './MealPlanCard';

export function MealPlanList() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Choose Your Meal Plan
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Select the perfect plan for your lifestyle and dietary preferences
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_MEAL_PLANS.map((plan) => (
            <MealPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}