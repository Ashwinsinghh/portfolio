import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
function Contact() {
return (
<section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 px-6 text-center">
<h2 className="text-3xl font-bold mb-10">Contact</h2>
<div className="flex justify-center gap-8 text-3xl mb-6">
<a href="https://www.linkedin.com/in/ashwinnsinghh/" target="_blank"><FaLinkedin /></a>
<a href="https://github.com/Ashwinsinghh" target="_blank"><FaGithub /></a>
<a href="https://leetcode.com/u/ASHWINSINGH007/" target="_blank"><SiLeetcode /></a>
</div>
<p>Email: ashwinsingh.as2005@gmail.com</p>
<p>Phone: +91 9310573849</p>
</section>
);
}
export default Contact;