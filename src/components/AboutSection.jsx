export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6">
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
      </div>
    </section>
  );
};