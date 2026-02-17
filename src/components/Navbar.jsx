function Navbar({ darkMode, setDarkMode }) {
return (
<nav className="fixed w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm z-50">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<h1 className="text-xl font-bold">Ashwin Singh</h1>
<div className="space-x-6 hidden md:block">
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#education">Education</a>
<a href="#certifications">Certifications</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
</div>
<button onClick={() => setDarkMode(!darkMode)}
className="ml-4 px-3 py-1 border rounded-lg">
{darkMode ? "Light" : "Dark"}
</button>
</div>
</nav>
);
}
export default Navbar;