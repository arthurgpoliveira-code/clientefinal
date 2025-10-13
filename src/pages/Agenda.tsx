import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Agenda = () => {
  const events = [
    {
      id: 1,
      title: "Show de Rock Nacional",
      date: "15 Jan 2025",
      time: "20:00",
      location: "Arena Principal",
      category: "Show",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
    },
    {
      id: 2,
      title: "Torneio de Futebol",
      date: "18 Jan 2025",
      time: "14:00",
      location: "Campo Esportivo",
      category: "Esporte",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80",
    },
    {
      id: 3,
      title: "Festival Gastronômico",
      date: "22 Jan 2025",
      time: "12:00",
      location: "Praça de Alimentação",
      category: "Evento",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
    },
    {
      id: 4,
      title: "Aula de Yoga ao Ar Livre",
      date: "25 Jan 2025",
      time: "07:00",
      location: "Jardim Zen",
      category: "Atividade",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Show: "bg-primary",
      Esporte: "bg-accent",
      Evento: "bg-secondary text-secondary-foreground",
      Atividade: "bg-muted text-muted-foreground",
    };
    return colors[category] || "bg-muted";
  };

  return (
    <div className="min-h-screen pb-20 bg-gradient-subtle">
      {/* Header */}
      <div className="gradient-primary text-white p-8 rounded-b-3xl shadow-glow">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <CalendarIcon className="h-8 w-8" />
          Agenda de Eventos
        </h1>
        <p className="text-white/90">Não perca nenhuma atração</p>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="w-full grid grid-cols-4 mb-6">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="Show">Shows</TabsTrigger>
            <TabsTrigger value="Esporte">Esportes</TabsTrigger>
            <TabsTrigger value="Evento">Eventos</TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="space-y-4">
            {events.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden hover-lift cursor-pointer shadow-card"
              >
                <div className="flex gap-4 p-4">
                  <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-lg">{event.title}</h3>
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {["Show", "Esporte", "Evento"].map((category) => (
            <TabsContent key={category} value={category} className="space-y-4">
              {events
                .filter((event) => event.category === category)
                .map((event) => (
                  <Card
                    key={event.id}
                    className="overflow-hidden hover-lift cursor-pointer shadow-card"
                  >
                    <div className="flex gap-4 p-4">
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-bold text-lg">{event.title}</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Agenda;