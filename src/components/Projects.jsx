function Projects() {
  const projects = [
    {
      title: "Expense Tracker",
      description:
        "Developed a web based application to record and manage user expenses efficiently, enabled users to track, categorize, and analyze expenses for better financial planning, provided an overview of spending pattern by generating summaries. ",
      tech: ["React", "Node.js"],
      image: "/projects/expensetracker.png",
      github: "https://github.com/Ashwinsinghh/Expense-tracker.git",
    },
    {
      title: "Employee Management System",
      description:
        "An Employee Management System built using Java, JavaScript, and CSS efficiently manages employee records, attendance, and working days. It automatically calculates salaries based on attendance data and generates accurate salary slips. The system provides a user-friendly interface for tracking employee information and payroll operations.",
      tech: ["Java", "CSS", "Javascript"],
      image: "/projects/employeemanagement.png",
      github: "https://github.com/Ashwinsinghh/Employee-management-system.git",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-12">Projects</h2>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-6"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-6 w-full max-w-sm mx-auto object-cover"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-500 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button Only */}
              <div className="flex justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
