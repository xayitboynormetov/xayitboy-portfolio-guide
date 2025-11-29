import { Instagram, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Instagram",
      value: "@_xay1tboy_241_._",
      link: "https://instagram.com/_xay1tboy_241_._",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "xayitboy@example.com",
      link: "mailto:xayitboy@example.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "manzil",
      value: "O'zbekiston",
      link: "#",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Men bilan <span className="gradient-text">bog'laning</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Loyihalar, hamkorlik yoki savol-javoblar uchun menga murojaat
            qiling
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="p-6 text-center card-hover border-2 group animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${method.color} text-white mb-4 group-hover:scale-110 transition-transform`}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-muted-foreground break-words">
                  {method.value}
                </p>
              </a>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 text-center border-2 bg-gradient-to-br from-primary/5 to-secondary/5 animate-in fade-in duration-700 delay-300">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Keling, birgalikda <span className="gradient-text">yarataylik!</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agar sizda qiziqarli loyiha g'oyasi yoki takliflar bo'lsa, men bilan
            bog'laning. Hamkorlik qilishga va yangi narsalarni o'rganishga
            tayyorman.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8"
            onClick={() =>
              window.open("https://instagram.com/_xay1tboy_241_._", "_blank")
            }
          >
            Instagram orqali bog'lanish
          </Button>
        </Card>

        <div className="mt-12 text-center text-muted-foreground animate-in fade-in duration-700 delay-400">
          <p>© 2024 Xayitboy Normetov. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
