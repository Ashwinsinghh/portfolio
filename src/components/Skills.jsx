function Skills() {
  const skills = {
    "Programming Languages": [
      "JavaScript",
      "Python",
      "C++",
      "Java"
    ],
    "Frameworks & Libraries": [
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS"
    ],
    "Databases": [
      "MongoDB",
      "MySQL",
      "PostgreSQL"
    ],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Docker",
      "Salesforce",
      "VS Code"
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 px-6">

      {/* Container */}
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-16">
          Skills
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">

          {Object.entries(skills).map(([category, items], index) => (
            
            <div key={index} className="w-full max-w-md text-center">

              {/* Category */}
              <h3 className="text-xl font-semibold mb-6 text-blue-500">
                {category}
              </h3>

              {/* Skills badges */}
              <div className="flex flex-wrap justify-center gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
