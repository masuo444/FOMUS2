'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇦🇪' },
];

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // 現在のパスから言語コードを置換
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const currentLocale = locales.find(l => l.code === locale);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-obsidian bg-cream border border-hinoki rounded-md hover:bg-hinoki hover:text-obsidian transition-colors focus:outline-none focus:ring-2 focus:ring-gold">
          <GlobeAltIcon className="w-4 h-4 mr-2" />
          <span className="mr-1">{currentLocale?.flag}</span>
          <span className="hidden sm:inline">{currentLocale?.name}</span>
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-cream border border-hinoki shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {locales.map((loc) => (
              <Menu.Item key={loc.code}>
                {({ active }) => (
                  <button
                    onClick={() => switchLocale(loc.code)}
                    className={`${
                      active ? 'bg-hinoki text-obsidian' : 'text-obsidian'
                    } ${
                      locale === loc.code ? 'bg-gold text-obsidian' : ''
                    } group flex items-center w-full px-4 py-2 text-sm transition-colors`}
                  >
                    <span className="mr-3">{loc.flag}</span>
                    {loc.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}