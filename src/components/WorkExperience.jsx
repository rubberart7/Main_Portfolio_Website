import { FlaskConical } from "lucide-react";
import aiResearchCoopBg from "../assets/images/drexel-cci-logo.jpg"; 

export const WorkExperience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="max-w-2xl mx-auto">
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
              <p className="text-xs text-gray-300 mb-2">
                Mar 2025 – Sep 2025 | Remote
              </p>
              <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
                <li>
                  Pioneered the launch of the AI-Atelier research lab, setting the strategic direction for its educational resources
                </li>
                <li>
                  Researched and synthesized cutting-edge AI developments and video and sound restoration algorithms, translating complex technical concepts into accessible learning materials
                </li>
                <li>
                  Designed and developed hands-on courses on Generative AI and AI-powered application development, integrating practical exercises with tools such as Hugging Face, Google Gemini, and Python
                </li>
                <li>
                  Reviewed the content of 20+ team members, provided constructive feedback, and facilitated 50+ meetings to maintain quality, consistency, and alignment with lab objectives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};