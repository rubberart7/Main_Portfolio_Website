import { useState } from "react";
import { cn } from "../lib/utills";
import {
  Code2,
  Terminal,
  Globe,
  GitBranch,
  Database,
  Boxes,
  Layout,
  Box,
  Feather,
  FlaskConical,
  Palette,
  ClipboardCheck,
  CheckSquare,
  Layers,
  Cloud,
  FileCode2,
  Cpu,
} from "lucide-react";

const icons = {
  Python: Code2,
  "C#": Code2,
  TypeScript: Code2,
  JavaScript: Code2,
  Java: Cpu,
  C: BracesIcon,
  SQL: Database,
  XPath: FileCode2,
  HTML: Globe,
  CSS: Globe,
  Racket: Code2,
  Bash: Terminal,
  Haskell: Code2,

  ".NET": Layers,
  "Selenium WebDriver": CheckSquare,
  "Next.js": Layout,
  React: Layout,
  Express: Box,
  "Node.js": Box,
  Flask: FlaskConical,
  "Tailwind CSS": Palette,

  "Azure DevOps": Cloud,
  Git: GitBranch,
  Supabase: Database,
  MSSQL: Database,
  PostgreSQL: Database,
  Prisma: Boxes,
  Swagger: ClipboardCheck,
  Postman: ClipboardCheck,
  SQLite: Database,
  SQLAlchemy: Boxes,
};

function BracesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" />
      <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1" />
    </svg>
  );
}

const skills = [
  { name: "Python", category: "languages" },
  { name: "C#", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "C", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "XPath", category: "languages" },
  { name: "HTML", category: "languages" },
  { name: "CSS", category: "languages" },
  { name: "Racket", category: "languages" },
  { name: "Bash", category: "languages" },
  { name: "Haskell", category: "languages" },

  { name: ".NET", category: "frameworks" },
  { name: "Selenium WebDriver", category: "frameworks" },
  { name: "Next.js", category: "frameworks" },
  { name: "React", category: "frameworks" },
  { name: "Express", category: "frameworks" },
  { name: "Node.js", category: "frameworks" },
  { name: "Flask", category: "frameworks" },
  { name: "Tailwind CSS", category: "frameworks" },

  { name: "Azure DevOps", category: "databases & tools" },
  { name: "Git", category: "databases & tools" },
  { name: "Supabase", category: "databases & tools" },
  { name: "MSSQL", category: "databases & tools" },
  { name: "PostgreSQL", category: "databases & tools" },
  { name: "Prisma", category: "databases & tools" },
  { name: "Swagger", category: "databases & tools" },
  { name: "Postman", category: "databases & tools" },
  { name: "SQLite", category: "databases & tools" },
  { name: "SQLAlchemy", category: "databases & tools" },
];

const categories = ["all", "languages", "frameworks", "databases & tools"];

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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = icons[skill.name] || Feather;
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center gap-3"
              >
                <Icon className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-sm sm:text-base text-center">
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