import Link from 'next/link'
import { ArrowUpRight, Check } from './icons'
import { ThemeToggle } from './theme-toggle'
import { ProjectVisual } from './project-visual'

const sections = {
  pt: {
    back: 'Voltar ao portfólio',
    lang: 'EN',
    theme: 'Alternar tema',
    eyebrow: 'Case de produto · 2026',
    title: 'Organizador Financeiro',
    lead: 'Uma experiência local-first que transforma a complexidade da vida financeira familiar em contexto para decisões melhores.',
    meta: [
      ['Papel', 'Produto, UX e engenharia'],
      ['Plataformas', 'Web, PWA e Android'],
      ['Arquitetura', 'Local-first + AWS serverless'],
    ],
    problemTitle: 'O problema não era registrar gastos.',
    problemText: 'Era entender como cada decisão afeta o todo. Contas, cartões, dívidas, metas e investimentos costumam ser tratados como saldos isolados — gerando duplicidades e escondendo compromissos futuros.',
    solutionTitle: 'Uma visão financeira conectada.',
    solutionText:
      'O produto separa fluxo de caixa de movimentações patrimoniais, previsto de realizado e realidade de simulação. Assim, uma compra no cartão não vira despesa duas vezes e um aporte não é confundido com consumo.',
    gallery: 'Produto em uso',
    galleryNote: 'Adicione screenshots em public/projects/financial-organizer usando os nomes indicados.',
    pillars: 'Decisões de engenharia',
    items: [
      ['Offline por padrão', 'IndexedDB e Dexie mantêm as operações rápidas e disponíveis sem conexão.'],
      ['Sincronização segura', 'Coleções hidratadas sob demanda, lotes pequenos, retry exponencial e prioridade para alterações locais.'],
      ['Regras isoladas', 'Funções puras concentram projeções, recorrências, cartões, investimentos e saúde financeira.'],
      ['Backend serverless', 'API Gateway, Lambda, DynamoDB, Cognito, CloudWatch e infraestrutura com SAM.'],
      ['Um código, três experiências', 'React e TypeScript na web, como PWA e no Android via Capacitor.'],
      ['Privacidade e resiliência', 'Dados isolados por usuário; falhas de push ou nuvem nunca bloqueiam gravações locais.'],
    ],
    flow: 'Como o sistema se conecta',
    resultTitle: 'O resultado',
    result: 'Um sistema que não se limita a contar o que já aconteceu. Ele projeta cenários, protege reservas, expõe riscos e permite experimentar decisões sem contaminar os dados reais.',
    cta: 'Tem um problema igualmente complexo?',
    ctaLink: 'Vamos conversar',
  },
  en: {
    back: 'Back to portfolio',
    lang: 'PT',
    theme: 'Toggle theme',
    eyebrow: 'Product case study · 2026',
    title: 'Financial Organizer',
    lead: 'A local-first experience that turns the complexity of family finances into context for better decisions.',
    meta: [
      ['Role', 'Product, UX & engineering'],
      ['Platforms', 'Web, PWA & Android'],
      ['Architecture', 'Local-first + serverless AWS'],
    ],
    problemTitle: "The problem wasn't tracking expenses.",
    problemText: 'It was understanding how each decision affects the whole. Accounts, cards, debt, goals, and investments are often treated as isolated balances — creating duplicates and hiding future commitments.',
    solutionTitle: 'One connected financial view.',
    solutionText: 'The product separates cash flow from asset movements, planned from actual, and reality from simulation. A card purchase is never counted twice, and an investment is not mistaken for spending.',
    gallery: 'The product in use',
    galleryNote: 'Add screenshots to public/projects/financial-organizer using the indicated filenames.',
    pillars: 'Engineering decisions',
    items: [
      ['Offline by default', 'IndexedDB and Dexie keep operations fast and available without a connection.'],
      ['Safe synchronization', 'On-demand hydration, small batches, exponential retry, and priority for local changes.'],
      ['Isolated rules', 'Pure functions model projections, recurrence, cards, investments, and financial health.'],
      ['Serverless backend', 'API Gateway, Lambda, DynamoDB, Cognito, CloudWatch, and SAM infrastructure.'],
      ['One codebase, three experiences', 'React and TypeScript on the web, as a PWA, and on Android through Capacitor.'],
      ['Privacy & resilience', 'User data stays isolated; cloud or push failures never block local writes.'],
    ],
    flow: 'How the system connects',
    resultTitle: 'The outcome',
    result: 'A system that does more than count what already happened. It projects scenarios, protects reserves, exposes risk, and lets people experiment with decisions without contaminating real data.',
    cta: 'Have an equally complex problem?',
    ctaLink: "Let's talk",
  },
}
const shots = ['dashboard.webp', 'planning.webp', 'projections.webp', 'accounts.webp', 'cards.webp', 'investments.webp', 'entries.webp', 'goals.webp']
export function ProjectCase({ locale }: { locale: 'pt' | 'en' }) {
  const c = sections[locale],
    en = locale === 'en',
    home = en ? '/en' : '/'
  return (
    <main className="project-page">
      <nav className="nav shell">
        <Link className="brand" href={home}>
          <span>CH</span>
          <i />
        </Link>
        <Link className="project-back" href={home}>
          ← {c.back}
        </Link>
        <div className="nav-tools">
          <Link className="language-link" href={en ? '/projetos/organizador-financeiro' : '/en/projects/financial-organizer'}>
            {c.lang}
          </Link>
          <ThemeToggle label={c.theme} />
        </div>
      </nav>
      <header className="project-hero shell">
        <p>{c.eyebrow}</p>
        <h1>{c.title}</h1>
        <div>
          <p>{c.lead}</p>
          <span>React · TypeScript · AWS · Local-first</span>
        </div>
      </header>
      <section className="project-cover shell">
        <ProjectVisual english={en} />
      </section>
      <section className="project-meta shell">
        {c.meta.map(([a, b]) => (
          <div key={a}>
            <small>{a}</small>
            <b>{b}</b>
          </div>
        ))}
      </section>
      <section className="narrative shell">
        <div>
          <span>01</span>
          <h2>{c.problemTitle}</h2>
          <p>{c.problemText}</p>
        </div>
        <div>
          <span>02</span>
          <h2>{c.solutionTitle}</h2>
          <p>{c.solutionText}</p>
        </div>
      </section>
      <section className="screens shell">
        <header>
          <span>03</span>
          <h2>{c.gallery}</h2>
        </header>
        <div className="screenshot-grid">
          {shots.map((shot, i) => (
            <figure key={shot} className={`shot shot-${i + 1}`}>
              <div className="shot-placeholder">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <b>{shot}</b>
                <small>{c.galleryNote}</small>
              </div>
            </figure>
          ))}
        </div>
      </section>
      <section className="engineering">
        <div className="shell">
          <header>
            <span>04</span>
            <h2>{c.pillars}</h2>
          </header>
          <div className="engineering-grid">
            {c.items.map(([a, b], i) => (
              <article key={a}>
                <small>{String(i + 1).padStart(2, '0')}</small>
                <Check />
                <h3>{a}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="architecture shell">
        <header>
          <span>05</span>
          <h2>{c.flow}</h2>
        </header>
        <div className="arch-flow">
          <b>React + TypeScript</b>
          <i>→</i>
          <b>Dexie / IndexedDB</b>
          <i>⇄</i>
          <b>API Gateway</b>
          <i>→</i>
          <b>Lambda + DynamoDB</b>
        </div>
      </section>
      <section className="project-result shell">
        <span>06</span>
        <div>
          <small>{c.resultTitle}</small>
          <h2>{c.result}</h2>
        </div>
      </section>
      <section className="project-cta shell">
        <p>{c.cta}</p>
        <Link href={`${home}#contato`}>
          {c.ctaLink}
          <ArrowUpRight size={24} />
        </Link>
      </section>
    </main>
  )
}
