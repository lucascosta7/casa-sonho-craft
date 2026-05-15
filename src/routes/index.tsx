import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Train, Car, Sun, Waves, FileCheck, Home, Phone, Mail, MessageCircle, MapPin, Award, Shield, TrendingUp, Heart, Sparkles, ArrowRight, Quote, Bed, Maximize, Star } from "lucide-react";
import logo from "@/assets/logo-carlos-henrique.jpeg";
import heroImg from "@/assets/hero-building.jpg";
import portrait from "@/assets/carlos-portrait.jpg";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carlos Henrique — Corretor de Imóveis em Itaquera" },
      { name: "description", content: "Seu novo lar te espera. Atendimento personalizado, imóveis em Itaquera e região com conforto, segurança e qualidade de vida." },
    ],
    links: [{ rel: "icon", href: logo }],
  }),
  component: Index,
});

const WHATSAPP = "https://api.whatsapp.com/send?phone=5511981601780&text=Ol%C3%A1%20Carlos%2C%20gostaria%20de%20conhecer%20im%C3%B3veis";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-navy/85 backdrop-blur-xl border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Carlos Henrique" className="h-12 w-12 rounded-full object-cover bg-white" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-white text-lg font-semibold tracking-wide">Carlos Henrique</div>
            <div className="text-gold text-[10px] tracking-[0.25em] uppercase">Corretor de Imóveis</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-white/80">
          <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
          <a href="#imoveis" className="hover:text-gold transition-colors">Imóveis</a>
          <a href="#diferenciais" className="hover:text-gold transition-colors">Diferenciais</a>
          <a href="#depoimentos" className="hover:text-gold transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-gold/90 transition-all hover:scale-105 shadow-lg shadow-gold/20">
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Fale com o Carlos</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Edifício de luxo" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs tracking-[0.2em] uppercase mb-8">
            <Sparkles className="w-3.5 h-3.5" /> Itaquera & Região · São Paulo
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02]">
            Seu novo <span className="italic text-gold">lar</span><br />te espera.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-white/75 text-lg lg:text-xl max-w-xl leading-relaxed">
            Conforto, praticidade e qualidade de vida em um só lugar.
            Atendimento consultivo para você encontrar o imóvel certo — sem complicação.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all shadow-2xl shadow-gold/30">
              Encontre seu imóvel ideal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#imoveis" className="inline-flex items-center gap-2 border border-white/25 text-white px-8 py-4 rounded-full hover:border-gold hover:text-gold transition-all">
              Ver imóveis em destaque
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-x-6 gap-y-5 max-w-2xl">
            {[
              { icon: Train, label: "5 min do Metrô" },
              { icon: Car, label: "Vaga de carro" },
              { icon: Sun, label: "Varanda" },
              { icon: Waves, label: "Lazer de clube" },
              { icon: FileCheck, label: "Doc. grátis" },
            ].map((it, i) => (
              <div key={i} className="flex flex-col items-start gap-2">
                <it.icon className="w-5 h-5 text-gold" />
                <span className="text-white/80 text-xs lg:text-sm">{it.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] uppercase">
        Role para baixo
      </div>
    </section>
  );
}

function Sobre() {
  const items = [
    { icon: TrendingUp, t: "Iniciativa & Proatividade", d: "Busca constante por soluções e oportunidades para cada cliente." },
    { icon: Award, t: "Foco em Resultados", d: "Orientação total para entregar o melhor para você e sua família." },
    { icon: Shield, t: "Ética & Confiabilidade", d: "Transparência e segurança em todas as etapas da negociação." },
    { icon: Heart, t: "Atendimento Humano", d: "Habilidades interpessoais e escuta ativa para entender o que importa." },
  ];
  return (
    <section id="sobre" className="py-28 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl blur-2xl" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img src={portrait} alt="Carlos Henrique" className="w-full h-full object-cover" width={900} height={1100} loading="lazy" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-8">
              <div className="text-gold text-xs tracking-[0.25em] uppercase mb-2">CRECI · São Paulo</div>
              <div className="font-display text-white text-2xl">Carlos Henrique Barbosa da Costa</div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Conheça o Carlos</div>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight">
            Sua jornada imobiliária <span className="italic text-navy">começa aqui.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Corretor de imóveis com forte iniciativa, proatividade e profundo interesse
            em negociação e relacionamento com clientes. Uma trajetória profissional sólida
            que desenvolveu responsabilidade, foco em resultados e ética — tudo aplicado
            para te ajudar a encontrar o lar dos seus sonhos.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Valores em cada negociação: <strong className="text-navy">Conforto, Segurança</strong> e <strong className="text-navy">Qualidade de Vida</strong>.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {items.map((it, i) => (
              <div key={i} className="group p-5 rounded-2xl border border-border hover:border-gold hover:shadow-gold transition-all">
                <it.icon className="w-6 h-6 text-gold mb-3" />
                <div className="font-semibold text-navy">{it.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{it.d}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const properties = [
  { img: p1, title: "Residencial Aurora", loc: "Itaquera, SP", desc: "2 dorm · 1 suíte · varanda gourmet", beds: "2 dorm", area: "58m²", tags: ["Lazer completo", "Próx. metrô"] },
  { img: p2, title: "Edifício Skyline", loc: "Carrão, SP", desc: "3 dorm · 1 vaga · piscina e academia", beds: "3 dorm", area: "72m²", tags: ["Vista panorâmica", "Lazer de clube"] },
  { img: p3, title: "Vista Park Residence", loc: "Tatuapé, SP", desc: "Cobertura · 2 vagas · acabamento premium", beds: "3 dorm", area: "120m²", tags: ["Cobertura", "Acabamento alto padrão"] },
];

function Imoveis() {
  return (
    <section id="imoveis" className="py-28 lg:py-40 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div {...fadeUp} className="max-w-2xl">
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Oportunidades exclusivas</div>
          <h2 className="font-display text-4xl lg:text-5xl text-navy leading-tight">
            Imóveis selecionados<br />para você e sua família.
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p, i) => (
            <motion.a key={i} {...fadeUp} transition={{ duration: 0.7, delay: i * 0.1 }}
              href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="group block bg-card rounded-3xl overflow-hidden border border-border hover:shadow-elegant transition-all hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width={1200} height={900} loading="lazy" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {p.tags.map((t, j) => (
                    <span key={j} className="bg-navy/85 backdrop-blur text-white text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-1.5 text-gold text-xs tracking-widest uppercase">
                  <MapPin className="w-3 h-3" /> {p.loc}
                </div>
                <h3 className="font-display text-2xl text-navy mt-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
                <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Bed className="w-4 h-4 text-gold" /> {p.beds}</span>
                    <span className="flex items-center gap-1.5"><Maximize className="w-4 h-4 text-gold" /> {p.area}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-navy group-hover:translate-x-1 group-hover:text-gold transition-all" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-14 text-center">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy font-semibold border-b-2 border-gold pb-1 hover:gap-3 transition-all">
            Ver mais oportunidades no WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Diferenciais() {
  const features = [
    { icon: Train, t: "Apenas 5 min", s: "da Estação Itaquera, mobilidade total no dia a dia." },
    { icon: Car, t: "Vaga de carro", s: "Praticidade e segurança para sua rotina." },
    { icon: Sun, t: "Varanda", s: "Espaço a mais para respirar e receber bem." },
    { icon: Waves, t: "Lazer de clube", s: "Piscina, academia, salão de festas e mais." },
    { icon: FileCheck, t: "Documentação grátis", s: "Cuidamos de toda a burocracia para você." },
    { icon: Home, t: "Acabamento alto padrão", s: "Detalhes que fazem do imóvel um verdadeiro lar." },
  ];
  return (
    <section id="diferenciais" className="py-28 lg:py-40 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div {...fadeUp} className="max-w-3xl">
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Conforto · Segurança · Qualidade de vida</div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05]">
            O lugar ideal para <span className="italic text-gold">você</span><br />e sua família.
          </h2>
        </motion.div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {features.map((f, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.07 }}
              className="bg-navy p-10 hover:bg-navy/60 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all">
                <f.icon className="w-7 h-7 text-gold group-hover:text-navy transition-colors" />
              </div>
              <h3 className="font-display text-2xl text-white">{f.t}</h3>
              <p className="text-white/65 mt-2 leading-relaxed">{f.s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  const t = [
    { name: "Mariana & Pedro", role: "Compraram em Itaquera", text: "O Carlos entendeu exatamente o que a gente buscava. Nos mostrou opções que combinavam com nossa rotina e nosso orçamento. Atendimento impecável." },
    { name: "Ricardo Almeida", role: "Investidor", text: "Profissional ético, responsivo e que conhece bem a região. Recomendo de olhos fechados para quem quer comprar com tranquilidade." },
    { name: "Família Souza", role: "Primeiro imóvel", text: "Cuidaram de toda a documentação. Foi a primeira vez que compramos um apartamento e nos sentimos seguros do começo ao fim." },
  ];
  return (
    <section id="depoimentos" className="py-28 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div {...fadeUp} className="max-w-2xl">
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Histórias de sucesso</div>
          <h2 className="font-display text-4xl lg:text-5xl text-navy leading-tight">
            Quem já encontrou o lar<br />dos sonhos com o Carlos.
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-7">
          {t.map((d, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative bg-card p-9 rounded-3xl border border-border hover:border-gold/50 transition-all">
              <Quote className="w-10 h-10 text-gold/30 absolute top-6 right-6" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed italic">"{d.text}"</p>
              <div className="mt-7 pt-6 border-t border-border">
                <div className="font-semibold text-navy">{d.name}</div>
                <div className="text-sm text-muted-foreground">{d.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="py-28 lg:py-40 bg-gradient-to-br from-navy to-navy/90 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <motion.div {...fadeUp}>
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Vamos conversar?</div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05]">
            Fale com o Carlos<br />e <span className="italic text-gold">realize seu sonho.</span>
          </h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-md">
            Atendimento personalizado por WhatsApp. Conte o que você procura — eu cuido do resto.
          </p>

          <div className="mt-10 space-y-5">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center group-hover:bg-gold transition-colors">
                <MessageCircle className="w-5 h-5 text-gold group-hover:text-navy" />
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase text-gold">WhatsApp principal</div>
                <div className="text-white text-lg">(11) 98160-1780</div>
              </div>
            </a>
            <a href="tel:+5511995351785" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase text-white/50">Telefones adicionais</div>
                <div className="text-white">(11) 99535-1785 · (11) 97278-4318</div>
              </div>
            </a>
            <a href="mailto:carlos.dacosta@hotmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase text-white/50">E-mail</div>
                <div className="text-white">carlos.dacosta@hotmail.com</div>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.form {...fadeUp} onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP, "_blank"); }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 space-y-5">
          <div>
            <label className="text-xs tracking-widest uppercase text-gold">Seu nome</label>
            <input required type="text" className="w-full mt-2 bg-transparent border-b border-white/20 focus:border-gold py-3 text-white outline-none transition-colors" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs tracking-widest uppercase text-gold">E-mail</label>
              <input required type="email" className="w-full mt-2 bg-transparent border-b border-white/20 focus:border-gold py-3 text-white outline-none transition-colors" />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-gold">Telefone</label>
              <input required type="tel" className="w-full mt-2 bg-transparent border-b border-white/20 focus:border-gold py-3 text-white outline-none transition-colors" />
            </div>
          </div>
          <div>
            <label className="text-xs tracking-widest uppercase text-gold">Que imóvel você procura?</label>
            <textarea rows={4} className="w-full mt-2 bg-transparent border-b border-white/20 focus:border-gold py-3 text-white outline-none resize-none transition-colors" placeholder="Bairro, número de quartos, faixa de preço..." />
          </div>
          <button type="submit" className="w-full bg-gold text-navy font-semibold py-4 rounded-full hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-xl shadow-gold/20">
            <MessageCircle className="w-4 h-4" /> Enviar pelo WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/15 text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Carlos Henrique" className="h-10 w-10 rounded-full object-cover bg-white" />
          <div className="text-sm">
            <div className="text-white font-semibold">Carlos Henrique</div>
            <div className="text-xs tracking-widest uppercase text-gold">Corretor de Imóveis</div>
          </div>
        </div>
        <div className="text-xs text-white/40">
          © {new Date().getFullYear()} Carlos Henrique Barbosa da Costa. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-gold text-navy font-semibold pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-gold/40 hover:scale-105 transition-all">
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm">Fale com o Carlos</span>
    </a>
  );
}

function Index() {
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <Sobre />
      <Imoveis />
      <Diferenciais />
      <Depoimentos />
      <Contato />
      <Footer />
      <FloatingWhats />
    </main>
  );
}
