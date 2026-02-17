import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
const [darkMode, setDarkMode] = useState(true);
useEffect(() => {
document.documentElement.classList.toggle("dark", darkMode);
}, [darkMode]);

return (
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300">
<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
<Hero />
<About />
<Skills />
<Education />
<Certifications />
<Projects />
<Contact />
<Footer />
</div>
);
}
export default App;