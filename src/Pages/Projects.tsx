import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Starfield from "../components/Starfield";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};


const projects: Project[] = [
  {
    id: 1,
    title: "Cassper",
    description: "Spyware that is made collaboratively for educational purposes and 1st year ADCS Coding project to demonstrate the risks of mobile malware.",
    image: "src/assets/cassper.png",
    tags: ["Python", "malware", "Security", "research"],
    githubUrl: "https://github.com/LeonBoussen/Cassper"
  },
  {
    id: 2,
    title: "GifJet",
    description: "a gif widget on your desktop to make your workspace more lively and fun. made with Python and monster energy.",
    image: "src/assets/Gifjet.png",
    tags: ["Python", "Widget", "Passion Project"],
    githubUrl: "https://github.com/Samujaxx/GIFJet"
  }
];

const Projects = () => {  
  return (
    <div className="min-h-screen pt-20">
      <Starfield />
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="block text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-normal bg-gradient-to-r from-primary via-primary/80 to-cyan-300 bg-clip-text text-transparent pt-2 pb-1">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Security tools, Research projects, Passion projects and things I've broken (then fixed)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="gradient-card border-border hover:border-primary transition-smooth group overflow-hidden flex flex-col"
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
                
                <CardContent className="flex flex-col flex-1">
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
                    <div className="flex gap-3 mt-auto">
                      {project.liveUrl && (
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
                      )}

                      {project.githubUrl && (
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
                      )}
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
