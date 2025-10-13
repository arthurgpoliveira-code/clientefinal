import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Megaphone, Sparkles } from "lucide-react";

const Home = () => {
  const flyers = [
    {
      id: 1,
      title: "Festival de Verão 2025",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
      tag: "Evento",
      date: "15 Jan",
    },
    {
      id: 2,
      title: "Noite do Rock",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
      tag: "Show",
      date: "22 Jan",
    },
    {
      id: 3,
      title: "Esportes Radicais",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80",
      tag: "Atividade",
      date: "28 Jan",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Nova Atração Inaugurada!",
      description: "Confira a nova montanha-russa radical.",
      icon: Sparkles,
    },
    {
      id: 2,
      title: "Horário Especial",
      description: "Funcionamento estendido aos finais de semana.",
      icon: Bell,
    },
    {
      id: 3,
      title: "Promoção Limitada",
      description: "50% de desconto em ingressos até domingo.",
      icon: Megaphone,
    },
  ];

  return (
    <div className="min-h-screen pb-20 bg-gradient-subtle">
      {/* Hero Section */}
      <div className="gradient-primary text-white p-8 rounded-b-3xl shadow-glow">
        <h1 className="text-3xl font-bold mb-2">Bem-vindo!</h1>
        <p className="text-white/90">Descubra tudo que acontece no complexo</p>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-8">
        {/* Flyers Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Destaques
          </h2>
          <div className="grid gap-4">
            {flyers.map((flyer) => (
              <Card
                key={flyer.id}
                className="overflow-hidden hover-lift cursor-pointer shadow-card"
              >
                <div className="relative h-48">
                  <img
                    src={flyer.image}
                    alt={flyer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {flyer.tag}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-bold text-xl">
                      {flyer.title}
                    </h3>
                    <p className="text-white/90 text-sm">{flyer.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Announcements Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Bell className="h-6 w-6 text-accent" />
            Avisos e Novidades
          </h2>
          <div className="space-y-3">
            {announcements.map((announcement) => (
              <Card
                key={announcement.id}
                className="p-4 hover-lift cursor-pointer shadow-card"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                    <announcement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{announcement.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {announcement.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;