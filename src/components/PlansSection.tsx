const plans = [
  {
    name: "Premium",
    description:
      "Esse plano é perfeito para você que já tem um escritório e deseja desligar totalmente das funções do financeiro.",
    align: "left" as const,
  },
  {
    name: "Essence",
    description:
      "Esse plano é para com que deseja organizar seu financeiro, mas precisa controlar de conta em relação ao pagamento.",
    align: "right" as const,
  },
  {
    name: "Start",
    description:
      "Esse plano ideal para você que está abrindo um estúdio, a pouco não sabe por como começou para iniciar com as finanças.",
    align: "left" as const,
  },
  {
    name: "Combo Kit",
    description:
      "Ideal para quem deseja o pacote completo com todas as ferramentas necessárias.",
    align: "right" as const,
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
              {/* Plan image placeholder */}
              <div className="w-full h-40 rounded-lg bg-accent border border-border flex items-center justify-center mb-6">
                <span className="text-muted-foreground font-body text-xs">Imagem</span>
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
