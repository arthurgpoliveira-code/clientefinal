import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet as WalletIcon, Ticket, Trophy, Star, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const Wallet = () => {
  const tickets = [
    {
      id: 1,
      event: "Show de Rock Nacional",
      date: "15 Jan 2025",
      time: "20:00",
      status: "Válido",
      code: "TKT-12345",
    },
    {
      id: 2,
      event: "Festival Gastronômico",
      date: "22 Jan 2025",
      time: "12:00",
      status: "Válido",
      code: "TKT-67890",
    },
  ];

  const points = 1250;
  const level = "Ouro";

  return (
    <div className="min-h-screen pb-20 bg-gradient-subtle">
      {/* Header */}
      <div className="gradient-primary text-white p-8 rounded-b-3xl shadow-glow">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <WalletIcon className="h-8 w-8" />
          Minha Wallet
        </h1>
        <p className="text-white/90">Seus ingressos e recompensas</p>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Points Card */}
        <Card className="p-6 gradient-accent text-white shadow-glow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/90 text-sm mb-1">Seus Pontos</p>
              <h2 className="text-4xl font-bold">{points}</h2>
            </div>
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Trophy className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
              <Star className="h-3 w-3 mr-1" />
              Nível {level}
            </Badge>
            <span className="text-sm text-white/80">
              Continue acumulando para desbloquear benefícios!
            </span>
          </div>
        </Card>

        {/* Tickets Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Ticket className="h-6 w-6 text-primary" />
              Meus Ingressos
            </h2>
            <Badge variant="secondary">{tickets.length}</Badge>
          </div>

          <div className="space-y-4">
            {tickets.length > 0 ? (
              tickets.map((ticket) => (
                <Card
                  key={ticket.id}
                  className="overflow-hidden hover-lift cursor-pointer shadow-card"
                >
                  <div className="p-4 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{ticket.event}</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>{ticket.date} às {ticket.time}</p>
                          <p className="font-mono text-xs">Código: {ticket.code}</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500 text-white">
                        {ticket.status}
                      </Badge>
                    </div>

                    <div className="border-t pt-4 flex items-center justify-center">
                      <Button className="gradient-primary text-white hover-glow">
                        <QrCode className="h-5 w-5 mr-2" />
                        Mostrar QR Code
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <Card className="p-8 text-center shadow-card">
                <Ticket className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Você ainda não possui ingressos
                </p>
              </Card>
            )}
          </div>
        </section>

        {/* Rewards Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-accent" />
            Recompensas Disponíveis
          </h2>

          <div className="grid gap-4">
            <Card className="p-4 hover-lift cursor-pointer shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Ingresso Grátis</h3>
                  <p className="text-sm text-muted-foreground">
                    Resgate com 2000 pontos
                  </p>
                </div>
                <Badge variant="secondary" className="text-primary">
                  750 pts faltando
                </Badge>
              </div>
            </Card>

            <Card className="p-4 hover-lift cursor-pointer shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Desconto 50%</h3>
                  <p className="text-sm text-muted-foreground">
                    Resgate com 500 pontos
                  </p>
                </div>
                <Button size="sm" className="gradient-primary text-white">
                  Resgatar
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Wallet;