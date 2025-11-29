import { Code2, GraduationCap, Volleyball } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const facts = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Ta'lim",
      description: "2-maktab, 8-sinf o'quvchisi",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Dasturlash",
      description: "Web texnologiyalari va zamonaviy frameworklar",
    },
    {
      icon: <Volleyball className="h-8 w-8" />,
      title: "Sevimli mashg'ulot",
      description: "Valeybol o'ynash va sport bilan shug'ullanish",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Men <span className="gradient-text">haqimda</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Texnologiya va innovatsiyaga qiziquvchi yosh dasturchi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {facts.map((fact, index) => (
            <Card
              key={index}
              className="p-6 text-center card-hover border-2 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                {fact.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
              <p className="text-muted-foreground">{fact.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 border-2 animate-in fade-in duration-700 delay-300">
          <p className="text-lg leading-relaxed text-center">
            Men 14 yoshli o'quvchi va dasturlashga katta qiziqish bildiraman.
            Maktab ta'limim bilan birga, web dasturlash va zamonaviy
            texnologiyalarni o'rganishga ko'p vaqt ajrataman. Food website,
            Medical-assistance va Streamline landing page kabi loyihalar ustida
            ishladim. Mening maqsadim — texnologiya orqali foydali va chiroyli
            dasturlar yaratish. Bo'sh vaqtimda valeybol o'ynashni yaxshi
            ko'raman va doimiy ravishda yangi ko'nikmalarni o'rganishga
            intilamani.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
