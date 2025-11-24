import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Gift } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import Starfield from "../components/Starfield";

const Home = () => {
  return (
    <div className="min-h-screen pt-24">
      <Starfield />
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-hero rounded-3xl px-12 py-14 border border-border">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-glow object-cover"
              />

              <div className="flex-1">
                <h1 className="block text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-normal bg-gradient-to-r from-primary via-primary/80 to-cyan-300 bg-clip-text text-transparent pt-2 pb-1">
                  Ömer F. Uysal
                </h1>

                <p className="text-2xl text-muted-foreground mb-4 leading-snug">
                  Cybersecurity Student &amp; Ethical Hacker
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Protecting digital assets and hunting vulnerabilities. Passionate about social engineering,
              red teaming, and making the internet a safer place (one exploit at a time).
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => {
                  document.getElementById("connect")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="flex items-center gap-2"
              >
                <Mail size={18} />
                Get in touch
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="/cv">
                  View CV
                  <ExternalLink className="ml-2" size={20} />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 hover:shadow-glow"
                asChild
              >
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Gift className="mr-2" size={20} />
                  Surprise
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">About Me</h2>
          <div className="gradient-card rounded-2xl p-8 border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a cybersecurity student with expertise in social engineering, penetration testing, threat hunting,
              and incident response. My journey in security has equipped me with a diverse skill set
              ranging from infrastructure security to application security.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not breaking things (ethically), you can find me at CTF competitions,
              researching zero-days, improving myself, or working on a random passion project. Monster energy
              (and techno) paired with late-night debugging sessions are my jam.
            </p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="container mx-auto px-6 py-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Let's Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://github.com/Samujaxx"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-card rounded-2xl p-6 border border-border hover:border-primary transition-smooth group"
            >
              <Github className="w-10 h-10 mb-4 text-primary group-hover:scale-110 transition-smooth" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground">Check out my late night projects</p>
            </a>

            <a
              href="https://linkedin.com/in/omer-faruk-uysal-b8108a239"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-card rounded-2xl p-6 border border-border hover:border-primary transition-smooth group"
            >
              <Linkedin className="w-10 h-10 mb-4 text-primary group-hover:scale-110 transition-smooth" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground">Let's connect professionally</p>
            </a>

            <a
              href="mailto:o.f.uysal@outlook.com"
              className="gradient-card rounded-2xl p-6 border border-border hover:border-primary transition-smooth group"
            >
              <Mail className="w-10 h-10 mb-4 text-primary group-hover:scale-110 transition-smooth" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">Drop me a message</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
