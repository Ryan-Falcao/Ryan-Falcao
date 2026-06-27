import { useEffect, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./App.css";

//  SUPABASE/BANCO DE DADOS
const supabase = createClient(
  "https://swasjokrndcdetxnnczj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3YXNqb2tybmRjZGV0eG5uY3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1MDk3NTAsImV4cCI6MjA5ODA4NTc1MH0.AhsUhBS-O6Dd6P7j6abfcgaAZZgQD81058KhP9Lo3MI",
);

// REVEAL HOOK
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.12 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// SKILLS
function TerminalHero() {
  const lines = [
    { text: "$ whoami", delay: 0 },
    { text: "Ryan Falcão", delay: 600 },
    { text: "$ cat role.txt", delay: 1200 },
    { text: "Desenvolvedor Full Stack", delay: 1800 },
    { text: "$ ls skills/", delay: 2600 },
    { text: "React  JavaScript  PHP  Python  SQL  Git", delay: 3200 },
  ];

  const [visible, setVisible] = useState<number[]>([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, i]);
      }, line.delay);
    });
    const cursorInterval = setInterval(() => setCursor((c) => !c), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="terminal">
          <div className="terminal-bar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="terminal-title">portfolio.sh</span>
          </div>
          <div className="terminal-body">
            {lines.map((line, i) => (
              <div
                key={i}
                className={`terminal-line ${visible.includes(i) ? "visible" : ""} ${
                  i % 2 === 0 ? "cmd" : "output"
                }`}
              >
                {line.text}
                {i === lines.length - 1 && visible.includes(i) && (
                  <span className={`cursor ${cursor ? "on" : ""}`}>█</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="hero-cta">
          <a href="#projetos" className="btn-primary">
            Ver projetos
          </a>
          <a href="#contato" className="btn-ghost">
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}

//  SOBRE
function Sobre() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <span className="section-label reveal" ref={useReveal()}>
          sobre mim
        </span>
        <div className="sobre-grid">
          <div className="sobre-text reveal" ref={useReveal()}>
            <h2>
              Full Stack com foco em soluções <em>eficientes e bem feitas</em>
            </h2>
            <p>
              Sou desenvolvedor de software com foco em desenvolvimento web Full
              Stack, criando aplicações completas com integração entre frontend,
              backend e bancos de dados.
            </p>
            <p>
              Tenho experiência com criação e consumo de APIs REST, modelagem e
              consultas SQL, orientação a objetos, persistência de dados e
              versionamento com Git e GitHub. Busco escrever código organizado,
              escalável e de fácil manutenção.
            </p>
            <p>
              Meu objetivo é desenvolver soluções eficientes, intuitivas e com
              boa experiência para o usuário — com aprendizado contínuo e
              facilidade para adquirir novas tecnologias.
            </p>
          </div>
          <div className="sobre-stats reveal-left delay-2" ref={useReveal()}>
            <div className="stat">
              <span className="stat-num">12+</span>
              <span className="stat-label">Tecnologias e ferramentas</span>
            </div>
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Projetos entregues</span>
            </div>
            <div className="stat">
              <span className="stat-num">∞</span>
              <span className="stat-label">Café consumido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// HABILIDADES
const skills = [
  { name: "React", level: 88 },
  { name: "JavaScript", level: 85 },
  { name: "HTML5 & CSS3", level: 95 },
  { name: "PHP", level: 75 },
  { name: "Python", level: 78 },
  { name: "SQL", level: 80 },
  { name: "APIs REST", level: 82 },
  { name: "Git & GitHub", level: 85 },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFilled(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header">
        <span>{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: filled ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function Habilidades() {
  const competencias = [
    "Lógica de programação",
    "Algoritmos",
    "POO",
    "Modelagem de dados",
    "Depuração de código",
    "Resolução de problemas",
    "Persistência de dados",
    "Leitura de código legado",
  ];

  return (
    <section className="section section-alt" id="habilidades">
      <div className="container">
        <span className="section-label reveal" ref={useReveal()}>
          habilidades
        </span>
        <h2 className="reveal delay-1" ref={useReveal()}>
          Tecnologias & competências
        </h2>
        <div className="skills-grid reveal delay-2" ref={useReveal()}>
          {skills.map((s) => (
            <SkillBar key={s.name} {...s} />
          ))}
        </div>
        <div className="competencias reveal delay-3" ref={useReveal()}>
          <p className="competencias-title">Também tenho experiência em</p>
          <div className="competencias-list">
            {competencias.map((c) => (
              <span key={c} className="competencia-pill">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// PROJETOS
const projetos = [
  {
    title: "Agenda Digital",
    desc: "App de agenda com autenticação Google, agenda compartilhada entre amigos, notificações push e tempo real via Supabase Realtime.",
    tags: ["React", "TypeScript", "Supabase", "TanStack"],
    link: "https://heart-agenda.vercel.app",
    highlight: true,
  },
];

function Projetos() {
  return (
    <section className="section" id="projetos">
      <div className="container">
        <span className="section-label reveal" ref={useReveal()}>
          projetos
        </span>
        <h2 className="reveal delay-1" ref={useReveal()}>
          O que eu construí
        </h2>
        <div className="projects-grid reveal delay-2" ref={useReveal()}>
          {projetos.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card ${p.highlight ? "highlight" : ""}`}
            >
              {p.highlight && <span className="badge">destaque</span>}
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <span className="card-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// CONTATO
function Contato() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [form, setForm] = useState({ nome: "", email: "", msg: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    if (!form.nome || !form.email || !form.msg) {
      setErro("Preencha todos os campos.");
      return;
    }
    setLoading(true);
    setErro("");
    const { error } = await supabase.from("mensagens").insert({
      nome: form.nome,
      email: form.email,
      mensagem: form.msg,
    });
    setLoading(false);
    if (error) {
      setErro("Erro ao enviar. Tente novamente.");
    } else {
      setSent(true);
    }
  }

  return (
    <section className="section section-alt" id="contato">
      <div className="container contact-container">
        <span className="section-label reveal" ref={useReveal()}>
          contato
        </span>
        <h2 className="reveal delay-1" ref={useReveal()}>
          Vamos conversar?
        </h2>
        <p className="contact-sub reveal delay-2" ref={useReveal()}>
          Aberto a freelas, oportunidades e colaborações interessantes.
        </p>
        {sent ? (
          <div className="sent-msg">
            ✓ Mensagem enviada! Te respondo em breve.
          </div>
        ) : (
          <div className="contact-form">
            <div className="form-row">
              <div className="field">
                <label>Nome</label>
                <input
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div className="field">
              <label>Mensagem</label>
              <textarea
                name="msg"
                value={form.msg}
                onChange={handleChange}
                placeholder="Conta o que você tem em mente..."
                rows={5}
              />
            </div>
            {erro && <p className="form-erro">{erro}</p>}
            <button
              className="btn-primary"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar mensagem"}
            </button>
          </div>
        )}
        <div className="social-links">
          <a
            href="https://github.com/Ryan-Falcao"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/ryan-marques-monteiro-falca%CC%83o-0a4775397/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a href="mailto:ryanmarques2007f@email.com">Email</a>
        </div>
      </div>
    </section>
  );
}

//  NAV
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (light) {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [light]);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <span className="nav-logo">
        rm<span className="accent">.</span>
      </span>
      <div className="nav-links">
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Skills</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato" className="nav-cta">
          Contato
        </a>
        <button
          className="theme-toggle"
          onClick={() => setLight((l) => !l)}
          title={light ? "Modo escuro" : "Modo claro"}
        >
          {light ? (
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

// APP
export default function App() {
  return (
    <>
      <Nav />
      <TerminalHero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      <footer className="footer">
        <span>Feito com React & ☕ por Ryan Falcão</span>
      </footer>
    </>
  );
}
