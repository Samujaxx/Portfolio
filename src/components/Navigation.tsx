import { NavLink } from "./NavLink";
import { Home, Briefcase, FileText } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="text-xl font-bold text-foreground hover:text-primary transition-smooth"
          >
            Portfolio
          </NavLink>
          
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              activeClassName="text-primary"
            >
              <Home size={18} />
              <span>Home</span>
            </NavLink>
            
            <NavLink
              to="/projects"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              activeClassName="text-primary"
            >
              <Briefcase size={18} />
              <span>Projects</span>
            </NavLink>
            
            <NavLink
              to="/cv"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              activeClassName="text-primary"
            >
              <FileText size={18} />
              <span>CV</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
