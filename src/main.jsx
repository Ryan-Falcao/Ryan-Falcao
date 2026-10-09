import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, ArrowDown, Coffee, Leaf, Mail, Copy, Check, Menu, X, Award } from 'lucide-react'
import './styles.css'

const email = 'ryanmarques2007f@gmail.com'
const github = 'https://github.com/Ryan-Falcao/'
const linkedin = 'https://www.linkedin.com/in/ryan-falcao'
const GithubMark = ({ size = 18 }) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.06 1.14a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.76 1.02.76 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>
const LinkedinMark = ({ size = 18 }) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.7H4.98V9.2h2.95v9.5ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.27 10.8h-2.94v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.52V9.2h2.82v1.3h.04c.39-.74 1.35-1.52 2.78-1.52 2.98 0 3.56 1.96 3.56 4.5v5.22Z"/></svg>
const skillGroups = [
  { title: 'Backend & APIs', description: 'Linguagens e frameworks para construir serviços e lógica de negócio.', items: ['Java', 'Spring Boot', 'Python', 'Django', 'APIs REST'] },
  { title: 'Segurança', description: 'Autenticação e controle de acesso às aplicações.', items: ['Spring Security', 'JWT', 'OAuth'] },
  { title: 'Dados & bancos', description: 'Modelagem de dados, bancos relacionais e fundamentos de plataforma de dados.', items: ['SQL', 'PostgreSQL', 'MySQL', 'Azure Data Lake'] },
  { title: 'Interfaces web', description: 'Conhecimentos para conectar a experiência do usuário ao backend.', items: ['React', 'TypeScript', 'JavaScript'] },
  { title: 'Infra & ferramentas', description: 'Organização do código e dos ambientes de desenvolvimento.', items: ['Docker', 'Git', 'GitHub'] },
  { title: 'Fundamentos', description: 'Lógica de programação e conhecimentos na linguagem C.', items: ['C'] },
]
const skillLogos = {
  Java: '/images/skills/java.svg',
  'Spring Boot': '/images/skills/springboot.svg',
  Python: '/images/skills/python.svg', Django: '/images/skills/django.svg',
  'Spring Security': '/images/skills/springsecurity.svg', JWT: '/images/skills/jsonwebtokens.svg',
  PostgreSQL: '/images/skills/postgresql.svg', MySQL: '/images/skills/mysql.svg',
  'Azure Data Lake': '/images/skills/azure.svg', React: '/images/skills/react.svg',
  TypeScript: '/images/skills/typescript.svg', JavaScript: '/images/skills/javascript.svg',
  Docker: '/images/skills/docker.svg', Git: '/images/skills/git.svg',
  GitHub: '/images/skills/github.svg', C: '/images/skills/c.svg',
}
const whatsapp = 'https://wa.me/5583988519664?text=' + encodeURIComponent('Olá, Ryan! Conheci seu portfólio e gostaria de conversar.')
const lake = '/images/nature-mist-lake.jpg'
const mountain = '/images/nature-blue-lake.jpg'

// Adicione sua foto em public/images/ryan.webp e altere para '/images/ryan.webp'.
const profilePhoto = null
const projects = [
  {
    title: 'Polaris Model', category: 'MODELAGEM DE DADOS', image: '/images/projects/polaris-model.jpg', imageWidth: 1251, imageHeight: 712,
    description: 'Da ideia à estrutura de dados: crie diagramas entidade-relacionamento, documente regras e converta seus modelos em SQL, em uma ferramenta online.',
    tags: ['Diagramas ER', 'Modelagem de dados', 'Geração de SQL'],
    url: 'https://polaris-model.vercel.app/', domain: 'polaris-model.vercel.app',
  },
  {
    title: 'Descubra seu Stand', category: 'EXPERIÊNCIA INTERATIVA', image: '/images/projects/descubra-seu-stand.jpg', imageWidth: 1280, imageHeight: 720,
    description: 'Descubra seu Stand a partir do nome e da data de nascimento. Uma interface React conectada ao backend Java apresenta o resultado em uma carta personalizada.',
    tags: ['Java', 'Spring Boot', 'React', 'API REST'],
    url: 'https://descubra-seu-stand-frontend.vercel.app/', domain: 'descubra-seu-stand-frontend.vercel.app',
  },
  {
    title: 'CurtaLink', category: 'UTILIDADE PARA O DIA A DIA', image: '/images/projects/curtalink.jpg', imageWidth: 1251, imageHeight: 712,
    description: 'URLs longas viram links curtos, prontos para compartilhar. Basta colar o endereço, gerar o link e copiar — sem precisar de cadastro.',
    tags: ['Encurtador de URLs', 'Links persistentes', 'Compartilhamento'],
    url: 'https://curtalink.vercel.app/', domain: 'curtalink.vercel.app',
  },
]
const certificates = [
  {
    title: 'Introdução à IA generativa e aos agentes', issuer: 'Microsoft', date: 'Setembro de 2026',
    skills: ['Inteligência artificial', 'IA generativa'],
  },
  {
    title: 'Introdução ao Git', issuer: 'Microsoft', date: 'Setembro de 2026',
    skills: ['Git', 'GitHub'],
  },
  {
    title: 'Introdução à Engenharia de Dados no Azure', issuer: 'Microsoft', date: 'Julho de 2026',
    skills: ['Data warehouse', 'Azure Data Lake'],
  },
  {
    title: 'Engenharia de Prompt e Aplicação em IA', issuer: 'Centro Universitário de João Pessoa (Unipê)', date: 'Junho de 2026',
    skills: ['IA Prompting', 'PROMPT'], logo: '/images/certificates/unipe.png', logoAlt: 'Logo original da Unipê conforme aparece no certificado',
  },
  {
    title: 'Introdução à programação orientada a objetos (POO)', issuer: 'Fundação Bradesco', date: 'Fevereiro de 2026',
    credential: 'B66781E5-B18D-479F-82B4-6EA0ACB5EF0E', skills: [], logo: '/images/certificates/bradesco.png', logoAlt: 'Logo original da Fundação Bradesco conforme aparece no certificado',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copyState, setCopyState] = useState('')
  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopyState('E-mail copiado!') }
    catch { setCopyState('Não foi possível copiar. Use o link de e-mail.') }
  }
  return <>
    <a className="skip-link" href="#sobre">Pular para o conteúdo</a>
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Ryan Falcão, início">ryan<span>falcão.</span></a>
      <nav className={`navigation glass ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal" id="navigation">
        {[['sobre','Sobre mim'],['skills','Stack'],['projetos','Projetos'],['certificados','Certificados'],['contato','Contato']].map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <a className="header-contact glass" href="#contato">Vamos conversar <ArrowUpRight size={16}/></a>
      <button className="menu-button glass" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="navigation" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>
    <main>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <img className="hero-landscape" src={lake} alt="Lago azul sereno entre montanhas envoltas em névoa" fetchPriority="high"/>
        <div className="hero-shade"/>
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span aria-hidden="true"/><span className="hero-role">DESENVOLVEDOR BACKEND <span className="hero-stack">· JAVA & SPRING BOOT</span></span></p>
          <h1 id="hero-title">Ryan<br/><span>Falcão.</span></h1>
          <div className="hero-description glass"><p>Por trás de uma boa experiência, existe um backend bem construído.</p><a href="#sobre" aria-label="Conheça mais sobre Ryan"><ArrowDown size={22}/></a></div>
        </div>
        <div className="hero-bottom"><span>CÓDIGO COM PROPÓSITO.</span><span>PORTFÓLIO PESSOAL / 2026</span><a href="#projetos">Explore o portfólio <ArrowDown size={14}/></a></div>
      </section>
      <section className="about section" id="sobre">
        <div className="section-heading"><p className="eyebrow">01 / SOBRE MIM</p><span>Uma pessoa por trás do código.</span></div>
        <div className="about-layout">
          <figure className="portrait-frame"><img src={profilePhoto || mountain} alt={profilePhoto ? 'Ryan Marques Monteiro Falcão' : 'Lago azul claro e montanhas distantes sob um céu branco'} loading="lazy"/><figcaption className="glass"><span className="monogram">rm.</span><div>Ryan Marques Monteiro Falcão<small>Desenvolvedor backend</small></div><ArrowUpRight size={20}/></figcaption></figure>
          <div className="about-copy">
            <h2>Prazer, Ryan.<br/><em>Backend é meu foco.</em></h2>
            <p>Sou <strong>Ryan Marques Monteiro Falcão</strong>, estudante de <strong>Engenharia de Software</strong> e desenvolvedor de João Pessoa, PB. Construo aplicações com foco em <strong>Java, Spring Boot e APIs REST</strong>.</p>
            <p>Gosto de conectar as partes de uma solução: dados, lógica de negócio, autenticação e interface. Também desenvolvo com <strong>Python e Django</strong> e trabalho com bancos relacionais, Docker e tecnologias web.</p>
            <p>Meus projetos são parte desse aprendizado. Busco uma oportunidade para contribuir em equipe e seguir evoluindo em backend, segurança e arquitetura de software.</p>
            <div className="about-facts"><div><span>FORMAÇÃO EM ANDAMENTO</span><strong>Engenharia de Software</strong></div><div><span>FOCO PRINCIPAL</span><strong>Backend · Java & Spring Boot</strong></div></div>
            <div className="about-links"><a className="text-link" href="#contato">Vamos nos conhecer <ArrowUpRight size={18}/></a><a className="text-link" href={github} target="_blank" rel="noreferrer"><GithubMark size={17}/> GitHub <ArrowUpRight size={18}/></a><a className="text-link" href={linkedin} target="_blank" rel="noreferrer"><LinkedinMark size={17}/> LinkedIn <ArrowUpRight size={18}/></a></div>
          </div>
        </div>
      </section>
      <section className="stack section" id="skills">
        <div className="section-heading"><p className="eyebrow">02 / MINHA STACK</p><span>Tecnologia aplicada a problemas reais.</span></div>
        <div className="stack-layout"><div><h2>Por dentro<br/><em>do backend.</em></h2><p className="stack-intro">Java e Spring Boot são o centro do meu foco técnico. Meus projetos também conectam interfaces, serviços e modelagem de dados.</p></div><div className="stack-cards"><article className="stack-card"><Coffee size={27} strokeWidth={1.3}/><span className="card-number">01</span><h3>Java</h3><p>Linguagem principal do meu foco em backend, na construção da lógica das aplicações.</p><span className="tag">LINGUAGEM PRINCIPAL</span></article><article className="stack-card"><Leaf size={27} strokeWidth={1.3}/><span className="card-number">02</span><h3>Spring Boot</h3><p>Framework que direciona meu trabalho com aplicações backend no ecossistema Java.</p><span className="tag">FRAMEWORK BACKEND</span></article></div></div>
        <div className="skill-groups">{skillGroups.map((group, index) => <article className="skill-group" key={group.title}><span className="skill-group-index">0{index + 1}</span><h3>{group.title}</h3><p>{group.description}</p><ul aria-label={`Tecnologias de ${group.title}`}>{group.items.map(item => <li key={item}>{skillLogos[item] && <img src={skillLogos[item]} alt="" aria-hidden="true" loading="lazy"/>}<span>{item}</span></li>)}</ul></article>)}</div>
        <a className="text-link stack-github" href={github} target="_blank" rel="noreferrer">Explore meus repositórios no GitHub <ArrowUpRight size={18}/></a>
      </section>
      <section className="work section" id="projetos">
        <div className="section-heading"><p className="eyebrow">03 / PROJETOS</p><span>Da ideia à implementação.</span></div>
        <div className="work-heading"><h2>O código conta<br/><em>uma história.</em></h2><p>Três projetos, diferentes desafios. Explore as aplicações e conheça meu trabalho na prática.</p></div>
        <figure className="project-nature"><img src={mountain} alt="Águas azuis tranquilas de um lago diante de montanhas suaves" loading="lazy"/><figcaption className="glass"><span className="eyebrow">IDEIAS, PRÁTICA E EVOLUÇÃO</span><span>Um projeto de cada vez.</span></figcaption></figure>
        <div className="project-showcase">{projects.map((project, index) => {
          return <article className="project-row" key={project.title}>
            <a className="project-preview" href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title} em nova aba`}><img src={project.image} alt={`Captura real da página inicial de ${project.title}`} loading="lazy" decoding="async" width={project.imageWidth} height={project.imageHeight}/></a>
            <div className="project-details"><p className="eyebrow">0{index + 1} / {project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="entry-tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><div className="project-action"><a className="project-visit" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visitar ${project.title} em nova aba`}>Visitar projeto <ArrowUpRight size={18}/></a></div></div>
          </article>
        })}</div>
      </section>
      <section className="learning section" id="certificados">
        <div className="section-heading"><p className="eyebrow">04 / CERTIFICADOS</p><span>Formação e aprendizado contínuo.</span></div>
        <div className="learning-layout">
          <div className="certificate-intro"><h2>Aprender<br/><em>faz parte.</em></h2><p>Certificados e cursos que complementam minha formação em Engenharia de Software e minha trajetória em tecnologia.</p><span className="certificate-count">05 <span>certificados</span></span></div>
          <div className="certificate-list">{certificates.map((certificate, index) => <article className="certificate-card" key={certificate.title}>
            <div className={`certificate-mark ${certificate.logo ? `certificate-mark-brand certificate-mark-${certificate.issuer === 'Fundação Bradesco' ? 'bradesco' : 'unipe'}` : ''}`} aria-hidden="true">{certificate.logo ? <img src={certificate.logo} alt={certificate.logoAlt} loading="lazy"/> : certificate.issuer === 'Microsoft' ? <span className="ms-mark"><i/><i/><i/><i/></span> : <Award size={23} strokeWidth={1.5}/>}</div>
            <div className="certificate-details"><span className="certificate-index">0{index + 1} / {certificate.issuer}</span><h3>{certificate.title}</h3><p className="certificate-date">Emitido em {certificate.date}{certificate.expiry ? ` · Válido até ${certificate.expiry}` : ''}</p>
              {certificate.skills.length > 0 && <div className="certificate-skills"><strong>Competências</strong>{certificate.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div>}
              {certificate.credential && <p className="certificate-credential">Código da credencial <code>{certificate.credential}</code></p>}
            </div>
          </article>)}</div>
        </div>
      </section>
      <section className="contact" id="contato"><img className="contact-landscape" src={mountain} alt="" loading="lazy"/><div className="contact-shade"/><div className="contact-panel glass"><p className="eyebrow">O PRÓXIMO PASSO COMEÇA COM UM OLÁ.</p><h2>Boas conexões.<br/><em>Novas possibilidades.</em></h2><p className="contact-intro">Uma oportunidade, um projeto ou uma boa conversa.<br/>Vou gostar de ouvir você.</p><div className="contact-buttons"><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Conversar no WhatsApp <ArrowUpRight size={18}/></a><a className="button button-outline" href={`mailto:${email}`}><Mail size={18}/> Enviar e-mail</a></div><div className="contact-socials" aria-label="Redes profissionais"><a href={github} target="_blank" rel="noreferrer"><GithubMark/> GitHub <ArrowUpRight size={15}/></a><a href={linkedin} target="_blank" rel="noreferrer"><LinkedinMark/> LinkedIn <ArrowUpRight size={15}/></a></div><div className="email-row"><a href={`mailto:${email}`}>{email}</a><button onClick={copyEmail} aria-label="Copiar endereço de e-mail">{copyState === 'E-mail copiado!' ? <Check size={16}/> : <Copy size={16}/>}</button></div><span role="status" className="copy-status">{copyState}</span><span className="phone">(83) 98851-9664</span></div></section>
    </main>
    <footer><a href="#inicio" className="brand">ryan<span>falcão.</span></a><span>© {new Date().getFullYear()} Ryan Falcão</span><span className="photo-credits">Fotos: <a href="https://unsplash.com/photos/hrHsSoY4lWY" target="_blank" rel="noreferrer">Rajesh Kavasseri</a> · <a href="https://unsplash.com/photos/RsFO5OG0rjA" target="_blank" rel="noreferrer">Toan Chu</a> / Unsplash</span><a href="#inicio">Voltar ao topo ↑</a></footer>
  </>
}
createRoot(document.getElementById('root')).render(<App />)
