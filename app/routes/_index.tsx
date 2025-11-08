import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { 
  Download, 
  Linkedin, 
  Star
} from "lucide-react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Calum Steer - Development & Conservation Professional" },
    { name: "description", content: "Programme Officer for environmental conservation and sustainable livelihoods at SEED Madagascar. MPhil Development Studies, Cambridge. Passionate about sustainable development, migration, investigative journalism and compassion in politics." },
    { name: "keywords", content: "Development Studies, Conservation, Sustainable Development, SEED Madagascar, Marine Conservation, Migration, Cambridge" },
    { property: "og:title", content: "Calum Steer - Development & Conservation Professional" },
    { property: "og:description", content: "Programme Officer for environmental conservation and sustainable livelihoods at SEED Madagascar. MPhil Development Studies, Cambridge. Passionate about sustainable development and social justice." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://calumsteer.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Calum Steer - Development & Conservation Professional" },
    { name: "twitter:description", content: "Programme Officer for environmental conservation and sustainable livelihoods at SEED Madagascar. MPhil Development Studies, Cambridge. Passionate about sustainable development and social justice." },
  ];
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/CS-CV.pdf';
    link.download = 'Calum_Steer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled 
          ? 'bg-gray-900/60 backdrop-blur-2xl border-gray-600/20 shadow-xl shadow-black/10' 
          : 'bg-gray-800/70 backdrop-blur-md border-gray-700/50'
      }`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">CS</span>
            </div>
          </div>
          <Button 
            onClick={handleDownloadCV}
            variant="outline" 
            size="sm"
            className="border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-12 gap-8 mb-8">
            {/* Profile Photo */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start">
              <div className="relative mb-6">
                <div className="w-48 h-48 rounded-full p-0.5 bg-white">
                  <img 
                  src="/LinkedInprofilepicCS.jpeg" 
                  alt="Calum Steer" 
                  className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex justify-center space-x-6 md:mt-auto">
                <a 
                  href="https://www.linkedin.com/in/calum-steer-8460b0149" 
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="md:col-span-8 text-center md:text-left flex flex-col">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                Hi, I'm Calum
              </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-0">
                  Programme Officer working on environmental conservation and sustainable livelihoods in Madagascar.
                  MPhil in Development Studies from the University of Cambridge (top quarter of cohort).
                  First-class Geography degree from Durham University. Skilled in research, AI, and automation (n8n) for sustainability-focused innovation.&nbsp;
                    Passionate about{" "}
                    <span className="bg-cyan-400 rounded px-1 font-bold" style={{ lineHeight: "1.5", paddingTop: "0.1em", paddingBottom: "0.1em" }}>
                      sustainable development
                    </span>
                    {" "}and ocean protection.
                </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <div>
            <Card className="bg-gray-800 border-gray-700 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I’m a University of Cambridge graduate with an <strong>MPhil in Development Economics</strong> and experience in sustainable development
                  and emergency response across Tanzania, Jordan, and Madagascar. I’m passionate about advancing sustainable growth by combining
                  operational efficiency, project management, and research to help innovative organisations—particularly in ocean protection—maximise
                  their impact.
                </p>
                <p>
                  With an <strong>MPhil from Cambridge</strong>, where I graduated in the top quarter of my cohort, and a <strong>First-Class Geography
                  degree from Durham University</strong>, I bring academic rigour to practical, high-pressure contexts. My experience includes
                  supporting <strong>UNRWA</strong>’s Gaza emergency response and gender-based violence prevention, casework with asylum-seekers in the UK,
                  and co-designing a three-year conservation and livelihoods project at <strong>SEED Madagascar</strong> that secured donor funding.
                </p>
                <p>
                  I believe today’s global challenges—from corporate accountability to environmental management—are deeply interconnected and
                  demand cross-sector collaboration. Looking ahead, I aim to become an expert in cutting-edge sustainable business, using my
                  understanding of political economy to engage with decision-makers and private sector leaders, driving large-scale change that aligns
                  economic growth with environmental and social integrity.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience & Projects</h2>
          
          <div className="space-y-8">
            {/* SEED Madagascar - Featured */}
            <Card className="bg-gray-800 border-gray-700 p-8 relative">
              <div className="absolute -top-3 left-8">
                <Badge className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  <Star className="w-3 h-3 mr-1" />
                  Current Role
                </Badge>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">Programme Officer - Rural Livelihoods</h3>
                <p className="text-cyan-400 font-medium mb-3">SEED Madagascar · Sep 2024 - Sep 2025</p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  At SEED Madagascar, I supported fishing communities in southeast Madagascar through the Oratsimba project, helping to
                  establish Locally Managed Marine Areas (LMMAs) that promote sustainable livelihoods and environmental conservation. I
                  conducted ecological and social research, led the transfer of data analysis to R (programming language), and co-designed a
                  three-year project proposal that secured donor funding and launched new community-led conservation initiatives.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-gray-700 text-gray-300">Project Design</Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-300">Sustainable Resource Management</Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-300">Research Skills</Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-300">Statistical Data Analysis</Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-300">Donor Engagement</Badge>
              </div>
            </Card>

            {/* UNRWA */}
            <Card className="bg-gray-800 border-gray-700 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">Intern - Emergency Response Support and Gender Division</h3>
                <p className="text-cyan-400 font-medium mb-3">UNRWA · May 2024 - Sep 2024</p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I conducted research for a major report on gender-based violence in refugee camps across UNRWA's five fields of operation, 
                  contributing to evidence-based policy and programme recommendations. I also streamlined the rapid staff recruitment process 
                  for the Gaza emergency response and analysed internal legal documents on organisational neutrality.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-gray-700 text-gray-300">Data Structures</Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-300">Qualitative Research</Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-300">Literature Reviews</Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-300">Legal Document Analysis</Badge>
              </div>
            </Card>

            {/* Additional Experience Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Teaching */}
              <Card className="bg-gray-800 border-gray-700 p-6 h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-3">Geography Teacher</h3>
                  <p className="text-cyan-400 font-medium mb-3">Abingdon School · Oct 2023 - May 2024</p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    As a Geography Teacher at Abingdon School, I taught six classes of students aged 11–15. I received one-to-one training 
                    in contemporary pedagogy, led student research on the impact of Westgate Oxford, guided the Geography Club's climate 
                    investigations, and contributed to school life as a Year 9 tutor and sports coach.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Teaching</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Pedagogy</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Education Policy</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Leadership</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Presentation Skills</Badge>
                </div>
              </Card>

              {/* Action Foundation */}
              <Card className="bg-gray-800 border-gray-700 p-6 h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-3">Asylum-Seeker Caseworker</h3>
                  <p className="text-cyan-400 font-medium mb-3">Action Foundation UK · Oct 2021 - Jun 2022</p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I worked at the drop-in for migrants called InterAction that provides an accessible, supportive, and friendly environment 
                    for migrants in the hope of connecting them to the local community and minimizing feelings of isolation or disorientation. 
                    I was trained as a caseworker, which involves helping asylum-seekers access legal, health and education services.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Cross-Cultural Communication Skills</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Casework</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Safeguarding</Badge>
                </div>
              </Card>

              {/* Tearfund */}
              <Card className="bg-gray-800 border-gray-700 p-6 h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-3">Volunteer and Media Coordinator</h3>
                  <p className="text-cyan-400 font-medium mb-3">Tearfund · Jan 2019 - Apr 2019</p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Worked in Tanzania as Media Coordinator with Tearfund, teaching Geography in local schools and co-leading agroforestry 
                    and environmental awareness initiatives. Reported on community development projects for Tearfund's blog and magazine, and 
                    documented HIV support groups and community mobilisation meetings highlighting sustainable local partnerships.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Media Communications</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Environmental Advocacy</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Cross-cultural Teams</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Public Speaking</Badge>
                </div>
              </Card>

              {/* Education */}
              <Card className="bg-gray-800 border-gray-700 p-6 h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-3">Education</h3>
                  <div className="space-y-3 text-gray-300 leading-relaxed">
                    <div>
                      <p className="font-semibold text-white">MPhil Development Studies</p>
                      <p className="text-sm text-cyan-400">University of Cambridge · 2022-2023</p>
                      <p className="text-sm">Grade: 72</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white">BA Geography</p>
                      <p className="text-sm text-cyan-400">Durham University · 2019-2022</p>
                      <p className="text-sm">First-class Honours (75)</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Quantitative Research</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Qualitative Research</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Economic Research</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">R (Programming Language)</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Geographic Information Systems (GIS)</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Social Research</Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">Discourse Analysis</Badge>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="border-t border-gray-700 pt-12">
            <p className="text-gray-300 mb-6">Let's connect and work towards a more sustainable and just world</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/calum-steer-8460b0149" 
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm">© 2025 Calum Steer.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
