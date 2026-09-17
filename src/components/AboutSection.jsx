import aiResearchCoopBg from "../assets/images/drexel-cci-logo.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        
        <div className="mb-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
          <h3 className="text-2xl font-semibold">
            Software Engineer | Full Stack and Test Automation
          </h3>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            I am a Computer Science student at Drexel University with experience spanning full-stack personal web development, 
            enterprise QA automation, and applied AI research. 
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            My professional background includes a QA Automation Co-Op at WebstaurantStore, 
            where I built end-to-end C# and .NET automated test suites for high-volume platforms, as well as an AI Research Co-Op at Drexel, 
            where I helped establish the AI-Atelier research lab and designed generative AI course material.
            Outside of my co-ops, I build and deploy full-stack applications using Next.js, React, Express, and PostgreSQL, 
            incorporating Google Gemini API integrations for features like resume analysis and personalized recommendations. 
            I thrive on combining robust testing and clean architecture to build reliable, performant software solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">Get In Touch</a>
            <a
              href="/public/assets/main-resume.pdf"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          <span className="text-primary">Experience</span>
        </h3>

        <div className="grid grid-cols-1 gap-6">
          <div className="card-hover overflow-hidden rounded-lg relative min-h-[250px] border border-border">
            <img 
              src={aiResearchCoopBg} 
              alt="Drexel CCI Logo" 
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="absolute inset-0 bg-black/80 z-10" />

            <div className="relative z-20 p-6 h-full text-left">
              <h4 className="font-semibold text-lg text-white">
                AI Research Co-Op
              </h4>
              <p className="text-sm text-gray-200">
                Drexel University College of Computing and Informatics
              </p>
              <p className="text-xs text-gray-300 mb-4">
                March 2025 – Sep 2025 | Remote
              </p>
              <ul className="list-disc list-inside text-gray-200 text-sm space-y-2">
                <li>
                  Pioneered the launch of the AI-Atelier research lab, setting the strategic direction for its educational resources.
                </li>
                <li>
                  Researched and synthesized cutting-edge AI developments and video and sound restoration algorithms, 
                  translating complex technical concepts into accessible learning materials.
                </li>
                <li>
                  Designed and developed hands-on courses on Generative AI and AI-powered application development, 
                  integrating practical exercises with tools such as Hugging Face, Google Gemini, and Python.
                </li>
                <li>
                  Reviewed the content of 20+ team members, provided constructive feedback, and facilitated 50+ meetings 
                  to maintain quality, consistency, and alignment with lab objectives.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};