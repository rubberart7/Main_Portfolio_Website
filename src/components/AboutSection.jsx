import { GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        
        <div className="mb-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
          <h3 className="text-2xl font-semibold">
            Full-Stack Developer & Problem Solver
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            I build full-stack applications that combine elegant design with scalable backends. My projects include AI-powered resume analyzers, game deal platforms, and travel planners integrating multiple APIs.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Skilled in Python, TypeScript, React, Next.js, Flask, Express, and PostgreSQL, I enjoy creating solutions that are both practical and performant, while continuously learning new technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">Get In Touch</a>
            <a
              href=""
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Work <span className="text-primary">Experience</span>
        </h3>

        
        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  AI and Video Technology Research Intern
                </h4>
                <p className="text-sm text-muted-foreground">
                  Drexel University College of Computing and Informatics
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  March 2025 – Sep 2025 | Remote
                </p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2">
                  <li>
                    Researched and synthesized cutting-edge AI developments into practical educational resources for Professor Reza Moradinezhad’s research lab, AI-Atelier, translating complex technical concepts into accessible learning materials
                  </li>
                  <li>
                    Designed and developed hands-on courses on Generative AI and AI-powered application development, integrating practical exercises with tools such as Hugging Face, Google Gemini, and Python
                  </li>
                  <li>
                    Reviewed team-generated content, provided constructive feedback, and facilitated weekly meetings to maintain quality, consistency, and alignment with lab objectives
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
