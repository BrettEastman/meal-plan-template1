import { MealCustomizer } from '@/components/MealCustomizer';

export default function CustomizePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Customize Your Plan</h1>
        <MealCustomizer />
      </div>
    </div>
  );
}