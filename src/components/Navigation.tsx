import Image from 'next/image';
import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Logo />
        <RegisterButton />
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src="/logo.png" alt="Artisan Bakkers" width={180} height={180} />
    </Link>
  );
}

function RegisterButton() {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Registreer
    </button>
  );
}
