import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm open to internships and research opportunities where I can contribute to meaningful projects, learn from experienced teams, and grow my skills. 
          Feel free to reach out to discuss potential roles or collaborations!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Email */}
          <div className="p-6 bg-card rounded-lg shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h4 className="font-semibold text-lg mb-2">Email</h4>
            <a
              
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              mby25@drexel.edu
            </a>
          </div>

          {/* Phone */}
          <div className="p-6 bg-card rounded-lg shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h4 className="font-semibold text-lg mb-2">Phone</h4>
            <a
              
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +1 (267) 367-2255
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-medium text-lg mb-4">Connect With Me</h4>
          <div className="flex justify-center space-x-6 text-primary">
            <a href="https://www.linkedin.com/in/miraj-yafi-9a845a2b4/" target="_blank" className="hover:text-primary/80 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/rubberart7" target="_blank" className="hover:text-primary/80 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
