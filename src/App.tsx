import React from 'react';
import { Leaf } from 'lucide-react';
import { MealPlanCard } from './components/MealPlanCard';
import { RecipeCard } from './components/RecipeCard';
import { useMealStore } from './store/mealStore';

const SAMPLE_MEAL_PLANS = [
  {
    id: '1',
    name: 'Starter Plan',
    description: 'Perfect for beginners looking to explore plant-based cooking',
    recipes: [],
    servings: 2,
    mealsPerWeek: 3,
    price: 59,
  },
  {
    id: '2',
    name: 'Family Plan',
    description: 'Ideal for families wanting to embrace vegan meals together',
    recipes: [],
    servings: 4,
    mealsPerWeek: 4,
    price: 89,
  },
  {
    id: '3',
    name: 'Gourmet Plan',
    description: 'Premium recipes for the adventurous plant-based foodie',
    recipes: [],
    servings: 2,
    mealsPerWeek: 5,
    price: 79,
  },
];

function App() {
  const { setSelectedPlan } = useMealStore();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">Vegan Meal Plans</h1>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-green-600 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Delicious Plant-Based Meals,
              <br />
              Delivered to Your Door
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-green-100">
              Choose from our curated selection of chef-crafted vegan recipes.
              Customize your plan, and we'll deliver fresh, pre-portioned
              ingredients right to you.
            </p>
          </div>
        </section>

        {/* Meal Plans Section */}
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
                <MealPlanCard
                  key={plan.id}
                  plan={plan}
                  onSelect={setSelectedPlan}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Why Choose Our Meal Plans?
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Customizable Plans
                </h3>
                <p className="mt-2 text-gray-600">
                  Adjust portions, swap meals, and customize based on your
                  preferences and dietary restrictions.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Premium Ingredients
                </h3>
                <p className="mt-2 text-gray-600">
                  Fresh, organic produce and high-quality plant-based ingredients
                  sourced from trusted suppliers.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Expert Support
                </h3>
                <p className="mt-2 text-gray-600">
                  Access to nutritionists and cooking tips to help you on your
                  plant-based journey.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-white">About Us</h3>
              <ul className="mt-4 space-y-2">
                <li>Our Story</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Help</h3>
              <ul className="mt-4 space-y-2">
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Shipping</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <ul className="mt-4 space-y-2">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;