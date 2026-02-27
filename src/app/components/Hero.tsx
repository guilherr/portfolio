import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mb-6 text-6xl md:text-8xl tracking-tight">
          Luiz Guilherme
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 mb-8">
          Graduando em análise e desenvolvimento de sistemas
        </p>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-12">
        
        </p>
        <button
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-colors duration-300"
        >
          Ver Projetos
          <ArrowDown size={20} />
        </button>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-neutral-600" />
      </div>
    </section>
  );
}
