import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de e-commerce com painel administrativo e integração de pagamentos',
      image: 'https://images.unsplash.com/photo-1622131815526-eaae1e615381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNTAzNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Mobile App Design',
      description: 'Design system e protótipo de aplicativo móvel para fintech',
      image: 'https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBzY3JlZW58ZW58MXx8fHwxNzcxNTM3NTI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Figma', 'UI/UX', 'Design System'],
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para análise de dados e métricas em tempo real',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzE1MDI5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['TypeScript', 'Recharts', 'Tailwind'],
    },
    {
      title: 'Portfolio Website',
      description: 'Website portfolio criativo com animações e interações modernas',
      image: 'https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NzE0OTQ2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Framer Motion', 'CSS'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl mb-16 text-center">Projetos</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-colors duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 bg-white text-black hover:bg-neutral-200 transition-colors">
                    <ExternalLink size={20} />
                  </button>
                  <button className="p-3 bg-white text-black hover:bg-neutral-200 transition-colors">
                    <Github size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-neutral-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm border border-neutral-700 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
