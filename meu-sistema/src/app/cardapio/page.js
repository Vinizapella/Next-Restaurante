import BotaoFavorito from "@/componentes/BotaoFavorito";

export default function PaginaCardapio() {

    const pratosExemplo = [
    { id: 1, nome: "Filé Mignon", preco: "R$ 89,90" },
    { id: 2, nome: "Risoto de Alho Poró", preco: "R$ 65,00" },
  ];

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Nosso Cardápio</h1>
      
      <div className="grid gap-6">
        {pratosExemplo.map((prato) => (
          <div key={prato.id} className="p-6 border rounded-xl shadow-sm bg-white">
            <h2 className="text-xl font-semibold">{prato.nome}</h2>
            <p className="text-orange-600 font-bold">{prato.preco}</p>
            
            <BotaoFavorito />
          </div>
        ))}
      </div>
    </main>
  );
}