'use client';

import { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { CurrencyDollarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useCurrency } from '@/hooks/useCurrency';

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', flag: '🇦🇪' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
];

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();
  
  const currentCurrency = currencies.find(c => c.code === currency) || currencies[0];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-obsidian bg-cream border border-hinoki rounded-md hover:bg-hinoki hover:text-obsidian transition-colors focus:outline-none focus:ring-2 focus:ring-gold">
          <CurrencyDollarIcon className="w-4 h-4 mr-2" />
          <span className="mr-1">{currentCurrency.flag}</span>
          <span className="hidden sm:inline">{currentCurrency.code}</span>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-cream border border-hinoki shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {currencies.map((curr) => (
              <Menu.Item key={curr.code}>
                {({ active }) => (
                  <button
                    onClick={() => setCurrency(curr.code as 'USD' | 'AED' | 'EUR')}
                    className={`${
                      active ? 'bg-hinoki text-obsidian' : 'text-obsidian'
                    } ${
                      currency === curr.code ? 'bg-gold text-obsidian' : ''
                    } group flex items-center w-full px-4 py-2 text-sm transition-colors`}
                  >
                    <span className="mr-3">{curr.flag}</span>
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{curr.code}</span>
                      <span className="text-xs text-obsidian/60">{curr.name}</span>
                    </div>
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