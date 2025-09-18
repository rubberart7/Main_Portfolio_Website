import { useState } from "react";
import { cn } from "../lib/utills";
import {
  Braces,
  Code2,
  Terminal,
  Globe,
  GitBranch,
  Server,
  Database,
  Boxes,
  Settings,
  Layout,
  Box,
  Feather,
  FlaskConical,
  Palette,
  ClipboardCheck,
  Laptop,
} from "lucide-react";

// map skill names to icons
const icons = {
  Python: Code2,
  TypeScript: Code2,
  JavaScript: Code2,
  Java: Braces,
  C: Braces,
  Racket: Braces,
  Bash: Terminal,
  HTML: Globe,
  CSS: Globe,

  Git: GitBranch,
  GitHub: GitBranch,
  GitLab: GitBranch,
  Postman: ClipboardCheck,
  "VS Code": Laptop,
  IntelliJ: Laptop,

  "Next.js": Layout,
  React: Layout,
  Express: Box,
  "Node.js": Box,
  Flask: FlaskConical,
  "Tailwind CSS": Palette,

  PostgreSQL: Database,
  SQLite: Database,
  SQLAlchemy: Boxes,
  Prisma: Boxes,
};

// your actual skills list
const skills = [
  // Languages
  { name: "Python", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "C", category: "languages" },
  { name: "Racket", category: "languages" },
  { name: "Bash", category: "languages" },
  { name: "HTML", category: "languages" },
  { name: "CSS", category: "languages" },

  // Developer Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "GitLab", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "IntelliJ", category: "tools" },

  // Libraries/Frameworks
  { name: "Next.js", category: "frameworks" },
  { name: "React", category: "frameworks" },
  { name: "Express", category: "frameworks" },
  { name: "Node.js", category: "frameworks" },
  { name: "Flask", category: "frameworks" },
  { name: "Tailwind CSS", category: "frameworks" },

  // Databases/ORM
  { name: "PostgreSQL", category: "databases" },
  { name: "SQLite", category: "databases" },
  { name: "SQLAlchemy", category: "databases" },
  { name: "Prisma", category: "databases" },
];

const categories = ["all", "languages", "frameworks", "databases", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = icons[skill.name] || Feather;
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center gap-3"
              >
                <Icon className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-lg text-center">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
