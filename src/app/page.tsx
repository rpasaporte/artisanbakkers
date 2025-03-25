export default function Hero() {
  return (
    <section
      className="bg-cover bg-center text-white flex items-center"
      style={{
        backgroundImage: "url('/hero2.jpg')",
        backgroundSize: '100% auto',
        backgroundPosition: 'center center',
        height: '665px',
      }}
    >
      <div className="max-w-screen-xl px-4 py-8 mx-auto w-full">
        <div className="lg:w-3/5">
          <div className="max-w-2xl mb-6 font-light text-white lg:mb-8 text-2xl md:text-3xl lg:text-4xl">
            Vind artisan bakkers bij jou
          </div>
          <div className="flex w-full max-w-2xl bg-white border border-gray-300 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Zoek op..."
              className="w-full px-4 py-3 text-gray-900 placeholder-gray-700 bg-transparent border-none focus:outline-none"
            />
            <button className="flex items-center px-4 py-3 text-gray-900 bg-primary-700 rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m2.85-6.15a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
