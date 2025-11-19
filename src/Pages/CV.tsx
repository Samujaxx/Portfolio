import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const CV = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
                Curriculum Vitae
              </h1>
              <p className="text-xl text-muted-foreground">
                Professional experience, certifications, and definitely no vulnerabilities here 😉
              </p>
            </div>
            
            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              <Download className="mr-2" size={20} />
              Download PDF
            </Button>
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
                    <h3 className="text-xl font-semibold">Senior Security Analyst</h3>
                    <p className="text-primary">CyberSec Corp</p>
                  </div>
                  <span className="text-muted-foreground">2022 - Present</span>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Led penetration testing engagements for Fortune 500 clients</li>
                  <li>Discovered and responsibly disclosed 15+ critical vulnerabilities</li>
                  <li>Implemented security automation reducing incident response time by 70%</li>
                </ul>
              </div>

              <div className="gradient-card rounded-2xl p-6 border border-border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Penetration Tester</h3>
                    <p className="text-primary">SecureNet Solutions</p>
                  </div>
                  <span className="text-muted-foreground">2020 - 2022</span>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Conducted web application and network penetration tests</li>
                  <li>Developed custom exploit scripts and security tools</li>
                  <li>Provided remediation guidance to development teams</li>
                </ul>
              </div>

              <div className="gradient-card rounded-2xl p-6 border border-border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Security Analyst</h3>
                    <p className="text-primary">Global Defense Systems</p>
                  </div>
                  <span className="text-muted-foreground">2018 - 2020</span>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Monitored security events and performed incident response</li>
                  <li>Analyzed malware and conducted threat intelligence research</li>
                  <li>Created security policies and conducted security awareness training</li>
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
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Bachelor of Science in Cybersecurity</h3>
                    <p className="text-primary">University Name</p>
                  </div>
                  <span className="text-muted-foreground">2014 - 2018</span>
                </div>
                <p className="text-muted-foreground">
                  Graduated with honors. Focus on network security, cryptography, and ethical hacking.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Skills & Certifications</h2>
            </div>
            
            <div className="gradient-card rounded-2xl p-6 border border-border">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Penetration Testing', 'Python', 'Burp Suite', 'Metasploit', 'Wireshark', 'Nmap', 
                    'Linux', 'Bash Scripting', 'OWASP Top 10', 'Cloud Security', 'Incident Response', 'Threat Hunting'].map((skill) => (
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
                  <li>Offensive Security Certified Professional (OSCP)</li>
                  <li>Certified Ethical Hacker (CEH)</li>
                  <li>CompTIA Security+</li>
                  <li>GIAC Security Essentials (GSEC)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
