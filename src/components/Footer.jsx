import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12 flex flex-col items-center gap-4">
      
      <p className="text-md text-muted-foreground text-center font-semibold">
        &copy; {new Date().getFullYear()} Miraj Yafi. All rights reserved.
      </p>

      
      <a
        href="#hero"
        className="flex items-center justify-center p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
