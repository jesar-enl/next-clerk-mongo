import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

export default function Header() {
  const { userId } = auth();

  return (
    <header className="bg-cyan-950">
      <nav className="flex items-center justify-between mx-auto px-4">
        <div className="container mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-2">
          <div>
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                MyTemplateLogo
              </span>
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500  focus:outline-none focus:ring-2 focus:ring-gray-100 md:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
              data-collapse-toggle="navbar-default"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100  p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  className="block rounded px-3 py-2 text-gray-900  dark:border-gray-700 dark:text-white  dark:hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/protected/server"
                  className="block rounded px-3 py-2 text-gray-900  dark:border-gray-700 dark:text-white  dark:hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Server
                </Link>
              </li>
              <li>
                <Link
                  href="/protected/client"
                  className="block rounded px-3 py-2 text-gray-900  dark:border-gray-700 dark:text-white  dark:hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Client
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block rounded px-3 py-2 text-gray-900  dark:border-gray-700 dark:text-white  dark:hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            {!userId ? (
              <>
                <Link
                  href="/sign-in"
                  className="block rounded px-3 py-2 text-gray-900  dark:border-gray-700 dark:text-white  dark:hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Login
                </Link>
                <Link
                  href="/sign-up"
                  className="block rounded px-3 py-2 text-gray-900  dark:border-gray-700 dark:text-white  dark:hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/profile"
                  className="block rounded px-3 py-2 text-gray-900  dark:border-gray-700 dark:text-white  dark:hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Profile
                </Link>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </>
            )}

            {/* <SignedOut>
              <SignInButton>
                <button className="bg-gray-900 hover:bg-gray-800 rounded text-white px-3 py-2">
                  Login
                </button>
              </SignInButton>
            </SignedOut>
             */}
          </div>
        </div>
      </nav>
    </header>
  );
}
