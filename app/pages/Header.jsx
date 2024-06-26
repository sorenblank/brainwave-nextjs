// Libraries
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { disablePageScroll, enablePageScroll } from "scroll-lock";

// Constants
import { navigation } from "../lib/constants";

// Components
import Img from "@/app/components/Image";
import Button from "../components/Button";

// Ui Components
import { HamburgerMenu } from "../components/Ui/Header";

// Assets
import MenuSvg from "@/public/svg/MenuSvg";

/**
 * Header Component
 * 
 * The Header component displays the website's header with navigation links
 * and a hamburger menu for mobile view.
 */
const Header = () => {
  // Hooks
  const router = useRouter();
  const [openNavigation, setOpenNavigation] = useState(false);

  /**
   * Toggles the navigation menu open/close
   * and disables/enables page scroll accordingly.
   */
  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    !openNavigation ? disablePageScroll() : enablePageScroll();
  };

  /**
   * Handles click on navigation links
   * If navigation is open, closes it and enables page scroll
   */
  const handleClick = () => {
    if (!openNavigation) {
      return;
    }
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo */}
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <Img src="brainwave.svg" alt="Brainwave" width={190} height={40} />
        </a>

        {/* Navigation Links */}
        <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {/* Mapping through navigation items */}
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === router.pathname ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Hamburger Menu Icon */}
          <HamburgerMenu />
        </nav>

        {/* New Account Button (Desktop) */}
        <a href="#signup" className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
          New Account
        </a>

        {/* Sign In Button (Desktop) */}
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        {/* Hamburger Menu Icon (Mobile) */}
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;