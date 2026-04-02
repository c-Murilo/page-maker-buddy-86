import planPremium from "@/assets/plan-premium.png";
import planEssence from "@/assets/plan-essence.png";
import planStart from "@/assets/plan-start.png";
import planCombo from "@/assets/plan-combo.png";

const plans = [
  {
    name: "Premium",
    description:
      "Esse plano é perfeito para você que já tem um escritório e deseja desligar totalmente das funções do financeiro.",
    image: planPremium,
    position: "center",
  },
  {
    name: "Essence",
    description:
      "Esse plano é para com que deseja organizar seu financeiro, mas precisa controlar de conta em relação ao pagamento.",
    image: planEssence,
    position: "center",
  },
  {
    name: "Start",
    description:
      "Esse plano ideal para você que está abrindo um estúdio, a pouco não sabe por como começou para iniciar com as finanças.",
    image: planStart,
    position: "center 35%",
  },
  {
    name: "Combo Kit",
    description:
      "Ideal para quem deseja o pacote completo com todas as ferramentas necessárias.",
    image: planCombo,
    position: "center 30%",
  },
];

const PlansSection = () => {
  return (
    <section className="bg-background px-4 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="border border-border rounded-lg p-8 flex flex-col"
            >
              {/* Plan image */}
              <div className="w-full h-40 rounded-lg overflow-hidden border border-border mb-6">
                <img src={plan.image} alt={plan.name} className="w-full h-full object-cover" style={{ objectPosition: plan.position }} />
              </div>

              <div className="flex-1">
                <h3 className="font-elegant text-2xl md:text-3xl italic text-foreground mb-3">
                  {plan.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
