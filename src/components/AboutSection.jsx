import aiResearchCoopBg from "../assets/images/drexel-cci-logo.jpg";
import webstaurantBg from "../assets/images/webstaurant-bg-image.jpg";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border flex flex-col text-center">
            <div className="h-48 overflow-hidden">
              <img
                src={webstaurantBg}
                alt="WebstaurantStore"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow items-center justify-between">
              <div className="flex flex-wrap gap-1.5 justify-center mb-6">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">C#</span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">.NET</span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Selenium</span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">SQL/MSSQL</span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Azure DevOps</span>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-1 text-foreground">QA Automation Engineer Co-Op</h3>
                <p className="text-xs text-muted-foreground font-medium mb-4">WebstaurantStore • Mar 2026 – Sep 2026</p>
                <ul className="text-muted-foreground text-sm text-left list-disc list-inside space-y-2 leading-relaxed">
                  <li>Developed and maintained 500+ automated tests in C# covering end-to-end tracking, shipping, vendor management, and order processing workflows.</li>
                  <li>Built modular, reusable automation test suites in C# and .NET using a custom Selenium-based framework.</li>
                  <li>Validated end-to-end application integrity across UI, API, and database layers using SQL and Swagger contract checks.</li>
                  <li>Collaborated in Azure DevOps to triage defects, link test coverage to user stories, and verify fixes.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border flex flex-col text-center">
            <div className="h-48 overflow-hidden">
              <img
                src={aiResearchCoopBg}
                alt="Drexel CCI Logo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow items-center justify-between">
              <div className="flex flex-wrap gap-1.5 justify-center mb-6">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Python</span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Hugging Face</span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Google Gemini</span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">GenAI</span>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-1 text-foreground">AI Research Co-Op</h3>
                <p className="text-xs text-muted-foreground font-medium mb-4">Drexel CCI • March 2025 – Sep 2025</p>
                <ul className="text-muted-foreground text-sm text-left list-disc list-inside space-y-2 leading-relaxed">
                  <li>Pioneered the launch of the AI-Atelier research lab, setting strategic direction for its educational resources.</li>
                  <li>Researched cutting-edge AI developments and video/sound restoration algorithms to translate concepts into course materials.</li>
                  <li>Designed and developed hands-on courses on Generative AI integrating practical exercises with Python and Gemini.</li>
                  <li>Reviewed content of 20+ team members and facilitated 50+ meetings to maintain quality and lab alignment.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};