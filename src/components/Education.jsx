function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      institution: "Chandigarh University",
      year: "2023 – 2027",
      score: "CGPA: 7.54"
    },
    {
      degree: "Class 12th (Senior Secondary)",
      institution: "Dev Samaj Vidya Niketan School",
      year: "Passed in 2023",
      score: "Percentage: 73.4%"
    },
    {
      degree: "Class 10th (Secondary School)",
      institution: "Narayana e-Techno School",
      year: "Passed in 2021",
      score: "Percentage: 93.8%"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-12">
          Education
        </h2>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              {/* Degree */}
              <h3 className="text-xl font-semibold text-blue-500">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="mt-2 font-medium">
                {edu.institution}
              </p>

              {/* Year */}
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {edu.year}
              </p>

              {/* Score */}
              <p className="text-gray-600 dark:text-gray-300">
                {edu.score}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
