"use client";
import { Fragment, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRecoilValue } from "recoil";
import Link from "next/link";
import { UserInfoAtom } from "../../atoms/UserInfoAtom";
import {
  Dialog,
  Disclosure,
  Popover,
  Menu,
  Transition,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { useCookies } from "react-cookie";
import useUserInfo from "../../hooks/useUserInfo";
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [cookies, setCookies, removeCookie] = useCookies(["access_token"]);
  const token = cookies["access_token"];
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const userInfo = useRecoilValue(UserInfoAtom);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [userName, setUserName] = useState("");
  const dd = useUserInfo();
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (userInfo) {
      if (userInfo.fullName) {
        let name = userInfo.fullName.split(" ")[0];
        setUserName(name);
      }
    }
    console.log("hinata" + userInfo);
  }, [userInfo]);

  if (!mounted) {
    return null;
  }

  const removeCookieButtonHandler = async () => {
    removeCookie("access_token");
    removeCookie("refresh_token");
    window.location.href = "/";
  };
  return (
    <>
      <header
        className={`bg-white max-w-screen w-screen isolate z-10 fixed dark:bg-gray-800 `}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between p-[0.75rem] lg:px-8  dark:text-white
        `}
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={
                  darkMode
                    ? "https://tailwindui.com/img/logos/mark-dark.svg?color=indigo&shade=600"
                    : "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                }
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center mr-[5px] justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button
                className={`flex items-center gap-x-1 text-sm font-semibold leading-6 text-black dark:text-gray-200`}
              >
                Solutions
                <ChevronDownIcon
                  className={`ml-1 h-5 w-5 text-gray-500 dark:text-gray-400`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  className={`absolute z-10 -ml-4 mt-3 w-screen max-w-md sm:px-0 
                dark:bg-gray-800 dark:border-gray-700 bg-white border-gray-200`}
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div
                      className={`relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8 dark:text-white`}
                    >
                      {products.map((product) => (
                        <a
                          key={product.name}
                          href={product.href}
                          className={`-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700`}
                        >
                          <product.icon
                            className={`flex-shrink-0 h-6 w-6 text-indigo-600`}
                            aria-hidden="true"
                          />
                          <div className="ml-4">
                            <p
                              className={`text-base font-medium dark:text-gray-200 text-gray-900
                            `}
                            >
                              {product.name}
                            </p>
                            <p
                              className={`mt-1 text-sm dark:text-gray-300  text-gray-500
                            `}
                            >
                              {product.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <a
              href="#"
              className={`text-sm font-semibold leading-6 text-black dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300`}
            >
              Pricing
            </a>
            <Popover className="relative">
              <Popover.Button
                className={`flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200`}
              >
                More
                <ChevronDownIcon
                  className={`ml-1 h-5 w-5 text-gray-500 dark:text-gray-400`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  className={`absolute z-10 -ml-4 mt-3 w-screen max-w-md sm:px-0 dark:bg-gray-800 dark:border-gray-700
               bg-white border-gray-200
                `}
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div
                      className={`relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8 dark:text-white
                    `}
                    >
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700`}
                        >
                          <item.icon
                            className={`flex-shrink-0 h-6 w-6 text-indigo-600`}
                            aria-hidden="true"
                          />
                          <div className="ml-4">
                            <p
                              className={`text-base font-medium dark:text-gray-200 text-gray-900
                            `}
                            >
                              {item.name}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1 lg:gap-x-12">
            <button
              type="button"
              className={`flex items-center gap-x-1 text-sm font-semibold leading-6  dark:text-white text-gray-900
            `}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <span>{theme == "dark" ? "Light" : "Dark"}</span>
            </button>
            {token && userInfo ? (
              <div>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex items-center rounded-[0.3rem] bg-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 py-[0.4rem] px-[0.75rem]">
                      <span className="sr-only">Open user menu</span>
                      {userName && (
                        <h2 className="text-white mr-[0.5rem] font-[440] tracking-[0.5px] text-[0.875rem]">
                          {userName}
                        </h2>
                      )}
                      {userName && userInfo.imgUri ? (
                        <img
                          className="h-6 w-6 rounded-full"
                          src={"/avatars/" + userInfo.imgUri}
                          alt=""
                        />
                      ) : (
                        <div className="bg-white h-6 w-6 rounded-full"></div>
                      )}
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/profile"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={removeCookieButtonHandler}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 text-left w-full"
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            ) : (
              <div>
                <Link
                  href="/signin"
                  className={`text-sm font-semibold leading-6 dark:text-white text-gray-900
            `}
                >
                  Sign in
                </Link>

                <Link
                  href="/signup"
                  className={`ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-semibold leading-6
           dark:text-white dark:bg-indigo-600 dark:hover:bg-indigo-700 
             text-indigo-600 bg-indigo-100 hover:bg-indigo-200
            `}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </nav>
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white dark:bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src={
                        darkMode
                          ? "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                          : "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      }
                      alt=""
                    />
                  </Link>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {products.map((product) => (
                      <a
                        key={product.name}
                        href={product.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <product.icon
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-200">
                          {product.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="mt-auto p-6">
                  <div className="pt-6">
                    <a
                      href="#"
                      className={`block w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium 
                      dark:text-white dark:bg-indigo-600 dark:hover:bg-indigo-700 hover:bg-indigo-500
              text-indigo-600 bg-indigo-100 `}
                    >
                      Sign up
                    </a>
                    <p
                      className={`mt-6 text-center text-base font-medium 
                    dark:text-gray-200 text-gray-500
                    `}
                    >
                      Existing customer?{" "}
                      <a
                        href="#"
                        className={`text-indigo-600 hover:text-indigo-500 dark:text-gray-200
                      `}
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>
      </header>
      <div className="pt-[56px]"></div>
    </>
  );
}
