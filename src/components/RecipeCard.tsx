import React from 'react';
import { Clock, Users } from 'lucide-react';
import type { Recipe } from '../types/meal';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{recipe.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{recipe.description}</p>
        
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{recipe.prepTime + recipe.cookTime} min</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}