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
            I am a Computer Science student with a strong interest in software engineering, AI development, data science, IT solutions, and other areas of technology. 
            My experience includes a research co-op at Drexel University’s College of Computing and Informatics, where I contributed to launching the AI-Atelier research lab, 
            developed educational resources on generative AI, and collaborated with a team to design hands-on courses. 
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            I’ve built full-stack platforms using tools such as 
            Next.js, React, Flask, Express, and PostgreSQL, integrating features like intelligent recommendations, 
            resume analysis, and secure authentication. I enjoy combining creativity with technical problem-solving and am eager to contribute to innovative and high-impact projects across diverse areas of technology.
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
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  AI Research Co-Op
                </h4>
                <p className="text-sm text-muted-foreground">
                  Drexel University College of Computing and Informatics
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  March 2025 – Sep 2025 | Remote
                </p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2">
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

      </div>
    </section>
  );
};
