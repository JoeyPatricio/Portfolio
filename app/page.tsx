import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="text-xl font-bold text-gray-800">Joseph Patricio</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I&apos;m Joseph Patricio</h1>
            <p className="text-xl md:text-2xl mb-8">Full Stack Developer | Designer | Creator</p>
            <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">About Me</h2>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-5/12 flex justify-center">
              <Image src="/1764697225458.jpg" alt="Profile" width={256} height={256} className="rounded-full object-cover shadow-xl border-4 border-blue-100" />
            </div>
            <div className="lg:w-7/12 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am Joseph Patricio, a dedicated professional with experience building impactful digital experiences and geospatial projects. I combine full-stack development, user-centered design, and data-driven systems to create engaging products and mission-driven solutions.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
                <a href="/JP_Resume.pdf" download className="inline-flex items-center justify-center rounded-full border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition">
                  Download Resume
                </a>
                <a href="https://www.linkedin.com/in/joe-pat/" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/WtoA.png" alt="SSSC Marine Debris Database screenshot" width={400} height={192} className="w-full object-cover object-top rounded mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SSSC Marine Debris Database</h3>
              <p className="text-gray-700 mb-4">A data-driven application built for the Sitka Sound Science Center to collect, categorize, and analyze marine debris sightings. The database supports cleanup tracking, volunteer reporting, and public-facing dashboards to help educators and coastal managers monitor pollution trends.</p>
              <a href="https://sitka-sound-science-center-marine-debris.onrender.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">View Project</a>
            </div>
            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/SSSC.png" alt="Welcome to America screenshot" width={400} height={192} className="w-full object-cover object-top rounded mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome to America</h3>
              <p className="text-gray-700 mb-4">A one-stop immigration resource designed to help newcomers navigate services, legal support, and community resources. It includes multilingual guidance, accessible information, and practical tools for users seeking immigration assistance in the United States.</p>
              <a href="https://github.com/juanms23/welcome-to-america" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Java</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C/C++</li>
                <li>HTML/CSS</li>
                <li>C#</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frameworks & Libraries</h3>
              <ul className="space-y-2 text-gray-700">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Flask</li>
                <li>Leaflet</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Databases</h3>
              <ul className="space-y-2 text-gray-700">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Supabase</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Systems</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Git</li>
                <li>Docker</li>
                <li>Linux</li>
                <li>Bash</li>
                <li>Vite</li>
                <li>GitHub Actions</li>
                <li>Jest</li>
                <li>pytest</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Concepts</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Data Structures & Algorithms</li>
                <li>RESTful APIs</li>
                <li>OOP</li>
                <li>MVC</li>
                <li>Geospatial Data Processing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Contace Me</h2>
          <div className="max-w-md mx-auto text-center space-y-6">
            <p className="text-lg text-gray-700">The easiest way to reach me is by email. Click the button below to send a message directly to joe.patricio@hotmail.com.</p>
            <a href="mailto:joe.patricio@hotmail.com" className="inline-flex w-full items-center justify-center rounded-full border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition">
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Joseph Patricio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
