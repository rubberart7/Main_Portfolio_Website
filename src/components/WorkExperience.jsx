import { Briefcase, GraduationCap, FlaskConical } from "lucide-react";

export const WorkExperience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Drexel Internship */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  AI & Video Technology Research Intern
                </h4>
                <p className="text-sm text-muted-foreground">
                  Drexel University College of Computing and Informatics
                </p>
                <p className="text-xs text-muted-foreground mb-2">
                  Mar 2025 – Sep 2025 | Remote
                </p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>
                    Researched and synthesized cutting-edge AI developments into
                    practical educational resources for Professor Reza
                    Moradinezhad’s AI-Atelier.
                  </li>
                  <li>
                    Designed and developed hands-on courses on Generative AI and
                    AI-powered application development.
                  </li>
                  <li>
                    Facilitated weekly meetings and reviewed content for quality
                    and consistency.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Experience Example */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <FlaskConical className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Project Work</h4>
                <p className="text-sm text-muted-foreground">
                  Full-Stack Applications
                </p>
                <p className="text-xs text-muted-foreground mb-2">
                  2024 – 2025
                </p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>
                    Built <span className="font-medium">GameDex</span>, a
                    full-stack game deals platform with AI-driven
                    recommendations.
                  </li>
                  <li>
                    Created <span className="font-medium">InternSight</span>, an
                    AI-powered resume analyzer and career resource hub.
                  </li>
                  <li>
                    Developed{" "}
                    <span className="font-medium">WanderPlanner</span>, a travel
                    itinerary app powered by APIs (OpenCage, Foursquare, Google
                    Maps).
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
