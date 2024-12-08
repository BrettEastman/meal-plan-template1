import { Leaf, UtensilsCrossed, Users } from 'lucide-react';

const features = [
  {
    title: 'Customizable Plans',
    description: 'Adjust portions, swap meals, and customize based on your preferences and dietary restrictions.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Premium Ingredients',
    description: 'Fresh, organic produce and high-quality plant-based ingredients sourced from trusted suppliers.',
    icon: Leaf,
  },
  {
    title: 'Expert Support',
    description: 'Access to nutritionists and cooking tips to help you on your plant-based journey.',
    icon: Users,
  },
];

export function Features() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Why Choose Our Meal Plans?
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg border border-gray-200 p-6">
              <feature.icon className="h-8 w-8 text-green-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}