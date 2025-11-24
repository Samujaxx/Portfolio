import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useEffect } from "react";
import Starfield from "../components/Starfield";
import cvFile from "../assets/Cv.pdf";

const CV = () => {
  useEffect(() => {
    console.log("I'm pretty sure I said there are no vulnerabilities. Stop inspecting, Sherlock 🕵️‍♂️");
  }, []);

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <Starfield />
      <span
        style={{
          position: "absolute",
          left: "-9999px",
          fontSize: "0px",
          opacity: 0,
          height: 0,
          width: 0,
          overflow: "hidden",
        }}
      >
        I'm pretty sure I said there are no vulnerabilities. Why are you in inspect element?
      </span>
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
                Curriculum Vitae
              </h1>
              <p className="text-xl text-muted-foreground">
                Professional experience, certifications, and definitely no vulnerabilities here
              </p>
            </div>

            <Button size="lg" className="flex items-center gap-2" asChild>
              <a href={cvFile} download>
                Download CV
              </a>
            </Button>
          </div>

          {/* Skills & Certifications */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Skills & Certifications</h2>
            </div>

            <div className="gradient-card rounded-2xl p-6 border border-border">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Social Engineering",
                    "Penetration Testing",
                    "Python",
                    "Burp Suite",
                    "Metasploit",
                    "Wireshark",
                    "Nmap",
                    "Linux",
                    "Bash Scripting",
                    "OWASP Top 10",
                    "Incident Response",
                    "Threat Hunting",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Certifications</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Certified Penetration Testing Specialist (CPTS), ongoing</li>
                  <li>Cisco cyberops associate, ongoing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>

            <div className="space-y-6">
              <div className="gradient-card rounded-2xl p-6 border border-border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">IT Consultant</h3>
                    <p className="text-primary">Student aan huis B.V.</p>
                  </div>
                  <span className="text-muted-foreground">2025 - Present</span>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    Provided onsite technical support for 20+ clients, including troubleshooting computer systems,
                    networks, and digital devices
                  </li>
                  <li>
                    Configured and resolved issues regarding hardware, software, and WiFi connections; implemented basic
                    network security solutions and firewall settings to minimize risks.
                  </li>
                  <li>
                    Educated clients on secure online practices, enhancing their data protection and privacy.
                  </li>
                  <li>
                    Delivered customized solutions aligned with client needs, improving technical and communication
                    skills.
                  </li>
                </ul>
              </div>

              <div className="gradient-card rounded-2xl p-6 border border-border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Game Developer (Internship)</h3>
                    <p className="text-primary">AD1100 (Formerly Dent Studios B.V.)</p>
                  </div>
                  <span className="text-muted-foreground">2022 - 2023</span>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    independently developed a Unity game, including both the graphics and the code under the guidance of
                    Mr. Dotsenko as my final MBO assignment.
                  </li>
                  <li>
                    Playable here:{" "}
                    <a
                      href="https://11000ad.itch.io/asteroidal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent underline underline-offset-4 transition-smooth"
                    >
                      Asteroidal
                    </a>
                  </li>
                  <li>
                    contributed to Covenant Project Zero, a 2.5D Unity game published on Steam, where I worked on
                    gameplay mechanics and systems programming in C#.
                  </li>
                  <li>
                    Steam Page:{" "}
                    <a
                      href="https://store.steampowered.com/app/2207500/Covenant_Project_Zero/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent underline underline-offset-4 transition-smooth"
                    >
                      Covenant: Project Zero
                    </a>
                  </li>
                </ul>
              </div>

              <div className="gradient-card rounded-2xl p-6 border border-border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Web Developer (Internship)</h3>
                    <p className="text-primary">compu-factory</p>
                  </div>
                  <span className="text-muted-foreground">2020 - 2021</span>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    contributed to developing the internal inventory management system, helping streamline and digitize
                    core business operations
                  </li>
                  <li>build the internal procurement and salesplatform.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              <div className="gradient-card rounded-2xl p-6 border border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Cyber Security (Associate Degree)</h3>
                    <p className="text-primary">Amsterdam University of Applied Sciences (AUAS/HvA)</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2024 - present</span>
                </div>
                <p className="text-muted-foreground">
                  Focused on practical, hands-on security, including networking, penetration testing, and defensive
                  security.
                </p>
              </div>

              <div className="gradient-card rounded-2xl p-6 border border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Software Engineering (Bachelor)</h3>
                    <p className="text-primary">Amsterdam University of Applied Sciences (AUAS/HvA)</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2023 - 2024</span>
                </div>
                <p className="text-muted-foreground">
                  Worked with TypeScript and PHP. Program not completed because I was looking for other aspirations.
                </p>
              </div>

              <div className="gradient-card rounded-2xl p-6 border border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Software Development (MBO 4)</h3>
                    <p className="text-primary">Nova College Zijlweg</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2020 - 2023</span>
                </div>
                <p className="text-muted-foreground">
                  Completed with a specialization in C# .NET application development and PHP fullstack development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
