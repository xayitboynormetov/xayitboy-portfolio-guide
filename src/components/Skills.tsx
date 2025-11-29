import { Card } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      category: "Backend & Tools",
      skills: [
        { name: "TypeScript", level: 75 },
        { name: "Git & GitHub", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Problem Solving", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Texnik <span className="gradient-text">ko'nikmalar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Web dasturlash va zamonaviy texnologiyalar bo'yicha bilimlarim
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-8 border-2 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${
                            (categoryIndex * 200 + skillIndex * 100)
                          }ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-in fade-in duration-700 delay-300">
          <Card className="inline-block p-6 border-2">
            <p className="text-lg text-muted-foreground">
              Doimiy ravishda yangi texnologiyalarni o'rganishga va
              ko'nikmalarimni rivojlantirishga intilamman 🚀
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
