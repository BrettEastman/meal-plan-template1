import { Leaf } from 'lucide-react';
import { MealPlanList } from '@/components/MealPlanList';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">Vegan Meal Plans</h1>
          </div>
        </div>
      </header>

      <main>
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

        <MealPlanList />
        <Features />
      </main>

      <Footer />
    </div>
  );
}