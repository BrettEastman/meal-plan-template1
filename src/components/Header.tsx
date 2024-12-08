import Link from 'next/link';
import { Leaf } from 'lucide-react';
import { AuthButton } from './auth/AuthButton';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">Vegan Meal Plans</h1>
          </Link>
          <AuthButton />
        </div>
      </div>
    </header>
  );
}