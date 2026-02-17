function Certifications() {
  const certificates = [
    {
      title: "Introduction to Databases",
      issuer: "Coursera",
      link: "https://coursera.org/verify/K062XEIM4PF9"
    },
    {
      title: "SQL: A Practical Introduction for Querying Databases",
      issuer: "Coursera",
      link: "https://coursera.org/verify/STYSQOJXBSP8"
    },
     {
      title: "The Full Stack",
      issuer: "Coursera",
      link: "https://coursera.org/verify/8XU02X24OOO7 "
    },
    {
      title: "Data Structures",
      issuer: "Coursera",
      link: "https://coursera.org/verify/PD1314GLYWZ6"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-100 dark:bg-gray-800 px-6">

      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-12">
          Certifications
        </h2>

        {/* Certificate Cards */}
        <div className="space-y-6">

          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-blue-500">
                {cert.title}
              </h3>

              <p className="mt-2">
                {cert.issuer}
              </p>

            </a>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;
