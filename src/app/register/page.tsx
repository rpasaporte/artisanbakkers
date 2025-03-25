'use client';
import Image from 'next/image';

export default function RegisterBakeryPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6 py-12 mt-20">
      <div className="bg-white shadow-lg rounded-2xl p-8 sm:w-[500px] w-full">
        <div className="text-center">
          <Image
            className="mx-auto h-16 w-auto"
            src="/b-blue.png"
            alt="Bakery Logo"
            width={64}
            height={64}
          />
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
            Pre-register your bakery
          </h2>
        </div>

        <form className="mt-6 space-y-4" action="#" method="POST">
          {['Bakery Name', 'Address', 'Email', 'Website'].map((placeholder, index) => (
            <div
              key={index}
              className="flex items-center rounded-md bg-white border border-gray-300 px-3 py-2 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500"
            >
              <input
                type={placeholder === 'Email' ? 'email' : 'text'}
                id={placeholder.toLowerCase().replace(/ /g, '-')}
                name={placeholder.toLowerCase().replace(/ /g, '-')}
                required
                placeholder={placeholder}
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder-gray-400 focus:outline-none sm:text-sm"
              />
            </div>
          ))}

          <div className="flex items-center rounded-md bg-white border border-gray-300 px-3 py-2 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500">
            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm">
              instagram.com/
            </div>
            <input
              type="text"
              id="instagram"
              name="instagram"
              placeholder="yourhandle"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder-gray-400 focus:outline-none sm:text-sm"
            />
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-900">Profile photo</label>
            <div className="mt-2 flex items-center gap-x-3">
              <svg
                className="size-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
              >
                Change
              </button>
            </div>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-900">Bakery gallery</label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg
                  className="mx-auto size-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="mt-4 flex text-sm text-gray-600">
                  <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload files</span>
                    <input type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
