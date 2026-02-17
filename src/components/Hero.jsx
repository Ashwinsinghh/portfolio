function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="Ashwin Singh"
        className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full shadow-2xl border-4 border-blue-500 mb-8"
      />

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Hi, I'm <span className="text-blue-500">Ashwin Singh</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        Full Stack Developer passionate about scalable systems, modern UI
        design, and high-performance web applications.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Download CV
        </a>

        <a
          href="#projects"
          className="px-6 py-3 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
