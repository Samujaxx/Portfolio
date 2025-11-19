import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Network Scanner Pro",
    description: "Advanced network reconnaissance tool with port scanning, service detection, and vulnerability mapping.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    tags: ["Python", "Nmap", "Security"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Password Auditor",
    description: "Enterprise password strength analyzer with breach detection and policy compliance checking.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
    tags: ["Python", "Cryptography", "Database"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Phishing Detection System",
    description: "ML-powered phishing URL classifier with real-time threat intelligence integration.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
    tags: ["Machine Learning", "Python", "API"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "CTF Toolkit",
    description: "Comprehensive suite of tools for Capture The Flag competitions including decoders and exploit scripts.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
    tags: ["Python", "Bash", "Cryptography"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "SIEM Dashboard",
    description: "Security Information and Event Management dashboard with real-time log analysis and alerting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["ELK Stack", "Python", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Vulnerability Scanner",
    description: "Automated web application security scanner detecting OWASP Top 10 vulnerabilities.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
    tags: ["Python", "Burp Suite", "OWASP"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Security tools, research projects, and things I've broken (then fixed)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="gradient-card border-border hover:border-primary transition-smooth group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
