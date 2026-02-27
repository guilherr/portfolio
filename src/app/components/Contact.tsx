import { Mail, Github, Linkedin, Twitter, ArrowBigDown } from 'lucide-react';

export function Contact() {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/guilherr',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/luiz-guilherme-gonzaga/',
    },

    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:guilhergonza6@gmail.com',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl mb-8">Contato</h2>
        
        <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
          Interessado em trabalhar juntos? Entre em contato comigo através das redes sociais
          ou envie um email diretamente.
        </p>

        <a
          href="https://drive.google.com/file/d/1c3uCVeUVkamHywdIMiE7NrcNzefHsWLw/view?usp=sharing" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-colors duration-300 text-lg mb-16"
        >
          <ArrowBigDown size={24} />
          Currículo
        </a>

        <div className="flex justify-center gap-6 flex-wrap">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-neutral-800 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group"
                aria-label={link.label}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        <div className="mt-20 pt-12 border-t border-neutral-800">
          <p className="text-neutral-500">
            © 2026 Luiz Guilherme. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
