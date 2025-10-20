import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface SurveyProps {
  open: boolean;
  onComplete: () => void;
}

const Survey = ({ open, onComplete }: SurveyProps) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (selectedRating !== null) {
      toast({
        title: "Obrigado pela sua avaliação!",
        description: `Você avaliou sua expectativa como ${selectedRating}/10`,
      });
      onComplete();
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        className="sm:max-w-md"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Avaliação de Expectativa
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-4">
            Em uma escala de 0 a 10, qual a sua expectativa para a sua
            experiência na Arena BRB hoje?
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-6 gap-2 py-6">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
            <Button
              key={rating}
              variant={selectedRating === rating ? "default" : "outline"}
              onClick={() => setSelectedRating(rating)}
              className="h-12 text-lg font-semibold transition-all hover:scale-110"
            >
              {rating}
            </Button>
          ))}
        </div>

        <Button
          onClick={handleSubmit}
          disabled={selectedRating === null}
          size="lg"
          className="w-full"
        >
          Enviar Avaliação
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Survey;
