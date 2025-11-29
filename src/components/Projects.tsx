import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Food Website",
      description:
        "Ovqatlanish xizmatlari uchun zamonaviy web-sayt. Foydalanuvchilarga menyu ko'rish va buyurtma berish imkonini beradi.",
      tags: ["React", "CSS", "JavaScript"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Medical Assistance",
      description:
        "Tibbiy yordam platformasi. Bemorlar va shifokorlar o'rtasida aloqani osonlashtiruvchi zamonaviy interfeys.",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Streamline Landing",
      description:
        "Zamonaviy biznes uchun landing page. Professional dizayn va foydalanuvchilar uchun qulay navigatsiya.",
      tags: ["React", "Tailwind", "TypeScript"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mening <span className="gradient-text">loyihalarim</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Turli xil web-dasturlar va interaktiv loyihalar ustida ishlash
            tajribasi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-hover border-2 group animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Kod
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ko'rish
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
