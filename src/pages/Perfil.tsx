import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, Calendar, Settings, LogOut, Edit } from "lucide-react";
import { useState } from "react";

const Perfil = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 98765-4321",
    birthdate: "15/05/1990",
  });

  return (
    <div className="min-h-screen pb-20 bg-gradient-subtle">
      {/* Header */}
      <div className="gradient-primary text-white p-8 rounded-b-3xl shadow-glow">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <User className="h-8 w-8" />
          Meu Perfil
        </h1>
        <p className="text-white/90">Gerencie suas informações</p>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Header */}
        <Card className="p-6 shadow-card">
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="h-24 w-24 ring-4 ring-primary/20">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" />
              <AvatarFallback className="text-2xl gradient-primary text-white">
                JS
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{userData.name}</h2>
              <p className="text-muted-foreground">{userData.email}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit className="h-4 w-4 mr-2" />
              {isEditing ? "Cancelar Edição" : "Editar Perfil"}
            </Button>
          </div>
        </Card>

        {/* Profile Info */}
        <Card className="p-6 shadow-card">
          <h3 className="text-lg font-bold mb-4">Informações Pessoais</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                Nome Completo
              </Label>
              <Input
                id="name"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                Telefone
              </Label>
              <Input
                id="phone"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthdate" className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Data de Nascimento
              </Label>
              <Input
                id="birthdate"
                value={userData.birthdate}
                onChange={(e) =>
                  setUserData({ ...userData, birthdate: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>

            {isEditing && (
              <Button className="w-full gradient-primary text-white hover-glow">
                Salvar Alterações
              </Button>
            )}
          </div>
        </Card>

        {/* Settings */}
        <Card className="p-6 shadow-card">
          <h3 className="text-lg font-bold mb-4">Configurações</h3>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => {}}
            >
              <Settings className="h-5 w-5 mr-3" />
              Preferências
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start text-destructive hover:text-destructive"
              onClick={() => {}}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sair da Conta
            </Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 text-center shadow-card">
            <p className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
              8
            </p>
            <p className="text-sm text-muted-foreground">Eventos Visitados</p>
          </Card>
          <Card className="p-4 text-center shadow-card">
            <p className="text-3xl font-bold gradient-accent bg-clip-text text-transparent">
              15
            </p>
            <p className="text-sm text-muted-foreground">Check-ins</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Perfil;