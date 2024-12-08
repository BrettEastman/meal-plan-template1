import { Leaf } from 'lucide-react';

const footerSections = [
  {
    title: 'About Us',
    links: ['Our Story', 'Blog', 'Careers'],
  },
  {
    title: 'Help',
    links: ['FAQ', 'Contact Us', 'Shipping'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
  {
    title: 'Connect',
    links: ['Instagram', 'Facebook', 'Twitter'],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link} className="cursor-pointer hover:text-white">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}