import { Code2, Badge, Rocket, Database  } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Desenvolvimento',
      description: 'Python, Java, Javascript e tecnologias modernas de web',
    },
    {
      icon: Database,
      title: 'Dados',
      description: 'Análise, visualização e interpretação de dados para gerar insights e apoiar tomadas de decisão.',
    },
    {
      icon: Rocket,
      title: 'Proatividade',
      description: 'Atitude ativa na identificação de oportunidades, antecipação de problemas e busca constante por melhorias.',
    },
    {
      icon: Badge,
      title: 'Curiosidade',
      description: 'Tenho uma curiosidade constante que me motiva a explorar novas ideias, aprender continuamente e entender o ‘porquê’ das coisas.',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl mb-16 text-center">Sobre</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="border border-neutral-800 p-8 hover:border-neutral-600 transition-colors duration-300"
              >
                <Icon size={40} className="mb-6 text-white" />
                <h3 className="text-2xl mb-4">{skill.title}</h3>
                <p className="text-neutral-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-neutral-400 leading-relaxed mb-6">
            Sou estudante de Análise e Desenvolvimento de Sistemas pela UERJ, movido por curiosidade e pela vontade constante de evoluir na tecnologia. Tenho grande interesse em desenvolvimento e engenharia de dados, áreas que me desafiam a pensar de forma estruturada, lógica e estratégica. 
            Busco construir uma base sólida, combinando fundamentos técnicos com prática constante, sempre focado em crescimento e aprendizado contínuo.
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Acredito no poder do código e dos dados como ferramentas de transformação. Gosto de analisar problemas com profundidade, entender o contexto antes de propor soluções e desenvolver projetos que sejam não apenas funcionais, mas eficientes e bem estruturados. Estou sempre explorando novas tecnologias, aprimorando minhas habilidades e 
            buscando criar soluções inteligentes que gerem impacto real
          </p>
        </div>
      </div>
    </section>
  );
}
