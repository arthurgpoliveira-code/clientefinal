import { useState } from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import arqInferior from "@/assets/arq_inferior.jpeg";
import arqSuperior from "@/assets/arq_superior.jpeg";
import camarotes from "@/assets/camarotes.jpeg";

const Localizacao = () => {
  const [showMapDialog, setShowMapDialog] = useState(false);
  const [selectedMap, setSelectedMap] = useState<string | null>(null);

  const mapOptions = [
    { id: "inferior", name: "Arquibancada Inferior", image: arqInferior },
    { id: "superior", name: "Arquibancada Superior", image: arqSuperior },
    { id: "camarotes", name: "Camarotes", image: camarotes },
  ];

  const handleMapSelect = (mapId: string) => {
    setSelectedMap(mapId);
    setShowMapDialog(false);
  };
  const locations = [
    {
      id: 1,
      name: "Arena Principal",
      description: "Shows e eventos de grande porte",
      coordinates: "Setor A - Entrada Norte",
    },
    {
      id: 2,
      name: "Campo Esportivo",
      description: "Atividades esportivas e torneios",
      coordinates: "Setor B - Área Externa",
    },
    {
      id: 3,
      name: "Praça de Alimentação",
      description: "Restaurantes e lanchonetes",
      coordinates: "Setor C - Centro",
    },
    {
      id: 4,
      name: "Área Aquática",
      description: "Piscinas e tobogãs",
      coordinates: "Setor D - Entrada Sul",
    },
  ];

  return (
    <div className="min-h-screen pb-20 bg-gradient-subtle">
      {/* Header */}
      <div className="gradient-primary text-white p-8 rounded-b-3xl shadow-glow">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <MapPin className="h-8 w-8" />
          Localização
        </h1>
        <p className="text-white/90">Encontre tudo que procura</p>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Interactive Map */}
        <Card className="overflow-hidden shadow-card">
          {selectedMap ? (
            <div className="relative">
              <img
                src={mapOptions.find((m) => m.id === selectedMap)?.image}
                alt={mapOptions.find((m) => m.id === selectedMap)?.name}
                className="w-full h-auto"
              />
              <Button
                onClick={() => setShowMapDialog(true)}
                className="absolute bottom-4 right-4 gradient-primary text-white hover-glow"
              >
                Trocar Mapa
              </Button>
            </div>
          ) : (
            <div className="h-64 bg-muted relative flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
                <p className="text-muted-foreground font-semibold">
                  Mapa Interativo
                </p>
                <Button
                  onClick={() => setShowMapDialog(true)}
                  className="gradient-primary text-white hover-glow"
                >
                  Acessar Mapa
                </Button>
              </div>
            </div>
          )}
        </Card>

        {/* Map Selection Dialog */}
        <Dialog open={showMapDialog} onOpenChange={setShowMapDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl">
                Escolha o Mapa
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-3 py-4">
              {mapOptions.map((option) => (
                <Button
                  key={option.id}
                  onClick={() => handleMapSelect(option.id)}
                  variant="outline"
                  className="w-full h-auto py-4 text-lg hover-lift"
                >
                  {option.name}
                </Button>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* Contact Info */}
        <Card className="p-6 shadow-card space-y-4">
          <h2 className="text-xl font-bold mb-4">Informações de Contato</h2>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Endereço</p>
                <p className="font-medium">Av. Principal, 1000 - Centro</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefone</p>
                <p className="font-medium">(11) 1234-5678</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Horário</p>
                <p className="font-medium">Seg-Dom: 09h às 22h</p>
              </div>
            </div>
          </div>

          <Button className="w-full gradient-primary text-white hover-glow mt-4">
            <Navigation className="h-5 w-5 mr-2" />
            Como Chegar
          </Button>
        </Card>

        {/* Locations List */}
        <section>
          <h2 className="text-xl font-bold mb-4">Principais Locais</h2>
          <div className="space-y-3">
            {locations.map((location) => (
              <Card
                key={location.id}
                className="p-4 hover-lift cursor-pointer shadow-card"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{location.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {location.description}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {location.coordinates}
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

export default Localizacao;