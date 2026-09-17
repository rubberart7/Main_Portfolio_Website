import aiResearchCoopBg from "../assets/images/drexel-cci-logo.jpg";
import webstaurantBg from "../assets/images/webstaurant-bg-image.jpg";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Experience</span>
        </h2>

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
              <div className="flex flex-wrap gap-1 justify-center mb-2">
                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">C#</span>
                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">.NET</span>
                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">Selenium</span>
                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">Swagger</span>
                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">SQL/MSSQL</span>
                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">Azure DevOps</span>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-1 text-foreground">QA Automation Engineer Co-Op</h3>
                <p className="text-xs text-muted-foreground font-medium mb-4">WebstaurantStore • Mar 2026 – Sep 2026</p>
                <ul className="text-muted-foreground text-sm text-left list-disc list-inside space-y-2 leading-relaxed">
                  <li>Developed and maintained automated tests in C# covering end-to-end tracking, shipping, vendor management, and order processing workflows.</li>
                  <li>Built modular, reusable automation test suites in C# and .NET using a custom Selenium-based framework to improve test maintainability and expand regression coverage.</li>
                  <li>Validated end-to-end application integrity across UI, API, and database layers utilizing SQL/MSSQL, Swagger contract checks, and backend data verification.</li>
                  <li>Collaborated with cross-functional teams in Azure DevOps to triage defects, link automated test coverage to user stories, and verify fixes for reliable product releases.</li>
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
              <div className="flex flex-wrap gap-1 justify-center mb-2">
                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">Python</span>
                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">Express</span>
                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">Hugging Face</span>
                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">Google Gemini</span>
                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">GenAI</span>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-1 text-foreground">AI Research Co-Op</h3>
                <p className="text-xs text-muted-foreground font-medium mb-4">Drexel CCI • March 2025 – Sep 2025</p>
                <ul className="text-muted-foreground text-sm text-left list-disc list-inside space-y-2 leading-relaxed">
                  <li>Pioneered the launch of the AI-Atelier research lab, setting strategic direction for its educational resources.</li>
                  <li>Researched and synthesized cutting-edge AI developments and video and sound restoration algorithms, translating complex technical concepts into accessible learning materials.</li>
                  <li>Designed and developed hands-on courses on Generative AI and AI-powered application development, integrating practical exercises with tools such as Hugging Face, Google Gemini, and Python.</li>
                  <li>Reviewed the content of 20+ team members, provided constructive feedback, and facilitated meetings to maintain quality, consistency, and alignment with lab objectives.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};