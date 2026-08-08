/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Check } from './icons'
import { ProjectVisual } from './project-visual'
import { ThemeToggle } from './theme-toggle'
import { ContactForm } from './contact-form'

const stack = ['React', 'TypeScript', 'Next.js', 'Node.js', 'AWS', 'React Native', 'Supabase', 'Docker', 'Tailwind', 'shadcn/ui']
const copy = {
  pt: {
    nav: ['Trabalho', 'Sobre', 'Contato'],
    talk: 'Vamos conversar',
    available: 'Disponível para projetos selecionados',
    hero: (
      <>
        Experiências simples.
        <br />
        Sistemas <em>sólidos.</em>
      </>
    ),
    intro: 'Sou Carlos Henrique, engenheiro de software full stack. Uno visão de produto e engenharia para criar experiências claras — do primeiro componente à infraestrutura.',
    featured: 'Trabalho em destaque',
    note: 'Produto próprio · UX, engenharia e arquitetura',
    case: 'Case study · 2026',
    project: 'Organizador Financeiro',
    projectDesc: 'Uma aplicação conectada para organizar o presente e planejar o futuro financeiro familiar, com dados consistentes entre dispositivos.',
    explore: 'Ver case completo',
    challenge: 'O desafio',
    challengeTitle: 'Finanças não são só números. São decisões.',
    challengeBody: [
      'Contas, cartões, dívidas e investimentos costumam viver em lugares separados. O resultado é uma visão fragmentada — e decisões tomadas sem enxergar o impacto completo.',
      'Desenhei e desenvolvi um produto que conecta esses domínios, evita duplicidades contábeis e transforma movimentações em projeções e cenários úteis.',
    ],
    features: [
      ['Remote-first com cache local', 'Banco remoto como fonte de verdade e IndexedDB para leituras rápidas e uma interface responsiva.'],
      ['Domínio complexo, interface simples', 'Regras financeiras isoladas, testáveis e traduzidas em decisões claras.'],
      ['Web, PWA e Android', 'Uma base React distribuída no navegador e via Capacitor.'],
      ['Backend serverless', 'Lambda, DynamoDB, Cognito e infraestrutura como código na AWS.'],
    ],
    about: 'Sobre & experiência',
    location: 'Amambai, MS · Brasil',
    aboutTitle: (
      <>
        Engenharia com
        <br />
        <em>visão de produto.</em>
      </>
    ),
    aboutBody: [
      'Trabalho com desenvolvimento desde 2018, criando produtos que precisam ser bonitos por fora e sólidos por dentro.',
      'Minha base é React e TypeScript. Ao redor dela, transito com naturalidade entre front-end, APIs, mobile e cloud — sempre procurando a solução mais simples que sustenta o próximo passo do produto.',
    ],
    stats: [
      ['8+', 'anos construindo software'],
      ['Full', 'stack, da interface à infraestrutura'],
      ['4', 'continentes em times e produtos globais'],
    ],
    contactLead: 'Tem um produto interessante em mente?',
    contactTitle: (
      <>
        Vamos construir
        <br />
        <em>algo relevante.</em>
      </>
    ),
    back: 'Voltar ao topo ↑',
    theme: 'Alternar tema',
    language: 'EN',
    form: {
      name: 'Nome',
      email: 'Seu e-mail',
      company: 'Empresa (opcional)',
      message: 'Como posso ajudar?',
      submit: 'Enviar mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada. Obrigado — retorno em breve.',
      error: 'Não foi possível enviar agora. Tente novamente em alguns minutos.',
      privacy: 'Seus dados serão usados apenas para responder esta mensagem.',
    },
  },
  en: {
    nav: ['Work', 'About', 'Contact'],
    talk: "Let's talk",
    available: 'Available for selected projects',
    hero: (
      <>
        Simple experiences.
        <br />
        Solid <em>systems.</em>
      </>
    ),
    intro: "I'm Carlos Henrique, a full-stack software engineer. I combine product thinking and engineering to create clear experiences — from the first component to the infrastructure.",
    featured: 'Featured work',
    note: 'Independent product · UX, engineering & architecture',
    case: 'Case study · 2026',
    project: 'Financial Organizer',
    projectDesc: "A connected application to understand today's finances and plan a family's financial future, with consistent data across devices.",
    explore: 'View full case study',
    challenge: 'The challenge',
    challengeTitle: "Finance isn't just numbers. It's decisions.",
    challengeBody: [
      'Accounts, cards, debt, and investments usually live in separate places. The result is a fragmented view — and decisions made without seeing their full impact.',
      'I designed and built a product that connects these domains, prevents duplicate accounting, and turns transactions into useful projections and scenarios.',
    ],
    features: [
      ['Remote-first with local cache', 'A remote source of truth with IndexedDB for fast reads and a responsive interface.'],
      ['Complex domain, simple interface', 'Isolated, testable financial rules translated into clear decisions.'],
      ['Web, PWA & Android', 'One React codebase shipped to the browser and through Capacitor.'],
      ['Serverless backend', 'Lambda, DynamoDB, Cognito and infrastructure as code on AWS.'],
    ],
    about: 'About & experience',
    location: 'Amambai, MS · Brazil',
    aboutTitle: (
      <>
        Engineering with
        <br />
        <em>product vision.</em>
      </>
    ),
    aboutBody: [
      "I've been building software since 2018, creating products that need to look great on the outside and stay solid underneath.",
      "React and TypeScript are my foundation. Around them, I move naturally across front-end, APIs, mobile, and cloud — always looking for the simplest solution that supports the product's next step.",
    ],
    stats: [
      ['8+', 'years building software'],
      ['Full', 'stack, interface to infrastructure'],
      ['4', 'continents across global teams and products'],
    ],
    contactLead: 'Have an interesting product in mind?',
    contactTitle: (
      <>
        Let's build
        <br />
        <em>something meaningful.</em>
      </>
    ),
    back: 'Back to top ↑',
    theme: 'Toggle theme',
    language: 'PT',
    form: {
      name: 'Name',
      email: 'Your email',
      company: 'Company (optional)',
      message: 'How can I help?',
      submit: 'Send message',
      sending: 'Sending...',
      success: "Message sent. Thank you — I'll get back to you soon.",
      error: "Couldn't send your message right now. Please try again in a few minutes.",
      privacy: 'Your details will only be used to reply to this message.',
    },
  },
}

const xp = {
  pt: [
    ['2022 — agora', 'Senior Full-stack Engineer', 'Lemon.io', 'Produtos web e mobile para diferentes mercados, de MVPs a plataformas SaaS em escala.'],
    ['2022 — 2023', 'Full-stack Engineer', 'RankMyAPP', 'Arquitetura de tickets em tempo real, microserviços e evolução de produto com React.'],
    ['2021 — 2022', 'Full-stack Engineer', 'DOT digital group', 'Plataformas SaaS, dashboards e reescritas completas com foco em performance e escala.'],
    ['2018 — 2021', 'Full-stack Developer', 'Projetos independentes', 'Do discovery ao deploy: produtos sob medida, APIs, pagamentos e infraestrutura.'],
  ],
  en: [
    ['2022 — now', 'Senior Full-stack Engineer', 'Lemon.io', 'Web and mobile products across industries, from MVPs to SaaS platforms at scale.'],
    ['2022 — 2023', 'Full-stack Engineer', 'RankMyAPP', 'Real-time ticketing architecture, microservices, and React product development.'],
    ['2021 — 2022', 'Full-stack Engineer', 'DOT digital group', 'SaaS platforms, dashboards, and full rewrites focused on performance and scale.'],
    ['2018 — 2021', 'Full-stack Developer', 'Independent projects', 'Discovery to deployment: custom products, APIs, payments, and infrastructure.'],
  ],
}

export function PortfolioHome({ locale }: { locale: 'pt' | 'en' }) {
  const c = copy[locale],
    english = locale === 'en',
    root = english ? '/en' : '/',
    project = english ? '/en/projects/financial-organizer' : '/projetos/organizador-financeiro'
  return (
    <main>
      <nav className="nav shell" aria-label={english ? 'Main navigation' : 'Navegação principal'}>
        <Link className="brand" href={root}>
          <span>CH</span>
          <i />
        </Link>
        <div className="nav-links">
          <a href="#trabalho">{c.nav[0]}</a>
          <a href="#sobre">{c.nav[1]}</a>
          <a href="#contato">{c.nav[2]}</a>
        </div>
        <div className="nav-tools">
          <Link className="language-link" href={english ? '/' : '/en'}>
            {c.language}
          </Link>
          <ThemeToggle label={c.theme} />
        </div>
        <a className="nav-cta" href="#contato">
          {c.talk} <ArrowUpRight size={16} />
        </a>
      </nav>
      <section className="hero shell" id="top">
        <div className="hero-kicker">
          <span className="status-dot" />
          {c.available}
        </div>
        <h1>{c.hero}</h1>
        <div className="hero-bottom">
          <p>{c.intro}</p>
          <a className="round-link" href="#trabalho">
            <ArrowDown />
          </a>
        </div>
        <div className="hero-index">01</div>
      </section>
      <section className="ticker">
        <div className="ticker-track">
          {[...stack, ...stack].map((x, i) => (
            <span key={`${x}-${i}`}>
              {x}
              <b>✦</b>
            </span>
          ))}
        </div>
      </section>
      <section className="work shell" id="trabalho">
        <header className="section-head">
          <div>
            <span className="section-number">02</span>
            <p>{c.featured}</p>
          </div>
          <p className="section-note">{c.note}</p>
        </header>
        <article className="case-card">
          <div className="case-copy">
            <div className="case-label">{c.case}</div>
            <h2>{c.project}</h2>
            <p>{c.projectDesc}</p>
            <div className="case-tags">
              <span>React 19</span>
              <span>TypeScript</span>
              <span>AWS</span>
              <span>Capacitor</span>
            </div>
            <Link href={project} className="text-link">
              {c.explore}
              <ArrowUpRight />
            </Link>
          </div>
          <ProjectVisual english={english} />
        </article>
        <div className="case-details">
          <div className="case-intro">
            <span>{c.challenge}</span>
            <h3>{c.challengeTitle}</h3>
          </div>
          <div className="case-body">
            {c.challengeBody.map((x) => (
              <p key={x}>{x}</p>
            ))}
          </div>
          <div className="case-features">
            {c.features.map(([a, b]) => (
              <div key={a}>
                <Check />
                <span>
                  <b>{a}</b>
                  <small>{b}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="about" id="sobre">
        <div className="shell">
          <header className="section-head light">
            <div>
              <span className="section-number">03</span>
              <p>{c.about}</p>
            </div>
            <p className="section-note">{c.location}</p>
          </header>
          <div className="about-grid">
            <div className="about-statement">
              <span className="spark">✦</span>
              <h2>{c.aboutTitle}</h2>
            </div>
            <div className="about-copy">
              {c.aboutBody.map((x) => (
                <p key={x}>{x}</p>
              ))}
            </div>
          </div>
          <div className="stats">
            {c.stats.map(([a, b]) => (
              <div key={a}>
                <strong>{a}</strong>
                <span>{b}</span>
              </div>
            ))}
          </div>
          <div className="experience">
            {xp[locale].map(([a, b, d, e]) => (
              <article key={d}>
                <time>{a}</time>
                <div>
                  <h3>{b}</h3>
                  <span>{d}</span>
                </div>
                <p>{e}</p>
                <ArrowUpRight size={20} />
              </article>
            ))}
          </div>
          <Link className="history-link" href={locale === 'en' ? '/en/experience' : '/experiencia'}>
            {locale === 'en' ? 'View full work history' : 'Ver trajetória completa'}
            <ArrowUpRight />
          </Link>
        </div>
      </section>
      <section className="contact shell" id="contato">
        <span className="section-number">04</span>
        <div className="contact-layout">
          <div className="contact-content">
            <p>{c.contactLead}</p>
            <h2>{c.contactTitle}</h2>
          </div>
          <ContactForm copy={c.form} locale={locale} />
        </div>
        <footer>
          <span>© {new Date().getFullYear()} Carlos Henrique</span>
          <div>
            <a href="https://www.linkedin.com/in/carlos-henrique-dev" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://github.com/carlos-henrique-dev" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
          <a href="#top">{c.back}</a>
        </footer>
      </section>
    </main>
  )
}
