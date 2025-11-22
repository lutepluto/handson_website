'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/app/components/ui/navigation-menu';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useI18n } from '../contexts/I18nContext';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();

  const menus = [
    {
      id: 'home',
      title: t('common', 'nav.home'),
      href: '/'
    },
    {
      id: 'apply',
      title: t('common', 'nav.application'),
      href: '/apply'
    },
    {
      id: 'help',
      title: t('common', 'nav.help'),
      href: '/help'
    },
    {
      id: 'about',
      title: t('common', 'nav.vision'),
      href: '/about'
    }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <header className="bg-[var(--color-brand-lightgrey)] w-full flex justify-center pt-[20px] pb-[20px] relative z-50 font-sans">
      <div className="container flex items-center justify-between px-4 md:px-0 max-w-[960px] mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            alt="Handson Logo"
            height={50}
            width={150}
            src="/images/handson-logo.png"
            className="w-[150px]"
          />
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex ml-auto">
          <NavigationMenuList className="gap-2">
            {menus.map(({ id, title, href }) => (
              <NavigationMenuItem key={id}>
                <NavigationMenuLink asChild active={pathname === href}>
                  <Link
                    href={href}
                    className={`text-[20px] font-normal transition-colors pb-[12px] min-w-[100px] text-center inline-block border-b-[2px] rounded-none hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent ${
                      pathname === href
                        ? 'text-[#4d8ab6] border-[#4d8ab6]'
                        : 'text-[#777777] border-transparent hover:text-[#4d8ab6] hover:border-[#4d8ab6]'
                    }`}
                  >
                    {title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <button
                onClick={toggleLanguage}
                className="text-[15px] text-[#999999] hover:text-[#4d8ab6] transition-colors ml-4 cursor-pointer"
              >
                {t('common', 'nav.language')}
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <button
          type="button"
          className="flex align-center md:hidden ml-[5px] text-gray-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon size={24} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 gap-4 z-50">
          {menus.map(({ id, title, href }) => (
            <Link
              key={id}
              href={href}
              className={`text-sm font-medium ${pathname === href ? 'text-[#1c6dc1]' : 'text-[#747474]'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {title}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleLanguage();
              setIsMobileMenuOpen(false);
            }}
            className="text-sm font-medium text-[#747474]"
          >
            {t('common', 'nav.language')}
          </button>
        </div>
      )}
    </header>
  );
}
