export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Black Overlay - 50% opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-8">
        {/* Heading */}
        <h1 className="text-6xl font-bold text-white text-center px-4">
          Explore our Watches
        </h1>

        {/* Button */}
        <button className="px-8 py-3 border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
          Explore
        </button>
      </div>
    </div>
  );
}