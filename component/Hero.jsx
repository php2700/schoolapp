export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-left px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
          Nurturing Bright Minds, Building Strong Futures
        </h1>
        <p className="mt-4 text-gray-200 text-lg">
          At Sriram Universal School, we combine academic excellence with values,
          creativity, and innovation to prepare every child for tomorrow.
        </p>
        <button className="mt-6 bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900">
          Apply for Admission
        </button>
      </div>
    </section>
  );
}
