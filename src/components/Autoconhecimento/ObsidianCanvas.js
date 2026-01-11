import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Brain,
  Heart,
  ShieldCheck,
  Users,
  GitPullRequest,
  BookOpen,
  X,
  Maximize2,
  Share2,
  Code,
} from "lucide-react";
import "./ObsidianCanvas.css";

const getCanvasData = () => ({
  core: {
    id: "core",
    title: "AUTOCONHECIMENTO",
    subtitle: "No Desenvolvimento de Software",
    description:
      "Capacidade de compreender minhas emoções, atitudes e reações enquanto construo um software de gestão de projetos (PBL).",
    icon: Brain,
  },
  blocks: [
    {
      id: "b1",
      title: "1. Reconhecimento Emocional",
      question: "Como eu me sinto em cada fase do desenvolvimento?",
      evidences: [
        "Identifico frustração ao lidar com bugs",
        "Reconheço estresse em prazos curtos",
        "Percebo motivação ao resolver problemas",
        "Ajusto meu ritmo quando necessário",
      ],
      impact: "Mais equilíbrio, menos impulsividade e melhor foco.",
      icon: Heart,
      accent: "red",
    },
    {
      id: "b2",
      title: "2. Autoconfiança Técnica",
      question: "Em quais habilidades eu confio hoje?",
      evidences: [
        "Uso prático de FlutterFlow",
        "Integração com Firebase",
        "Criação de fluxos do sistema",
        "Ensino de colegas",
      ],
      impact: "Tomada de iniciativa, segurança nas decisões e participação ativa.",
      icon: ShieldCheck,
      accent: "blue",
    },
    {
      id: "b3",
      title: "3. Impacto do Comportamento",
      question: "Como minha postura afeta a equipe?",
      evidences: [
        "Organização de tarefas no backlog",
        "Comunicação clara de bloqueios",
        "Apoio técnico proativo",
        "Liderança em momentos-chave",
      ],
      impact: "Mais engajamento, melhor clima e aumento da produtividade.",
      icon: Users,
      accent: "green",
    },
    {
      id: "b4",
      title: "4. Influência do Outro",
      question: "Como o grupo afeta minhas emoções?",
      evidences: [
        "Recepção de Feedbacks (Code review)",
        "Adaptação a estilos diferentes de trabalho",
        "Resolução de conflitos de merge/ideias",
        "Trabalho colaborativo (Pair programming)",
      ],
      impact: "Mais empatia, maior adaptação e maturidade emocional.",
      icon: GitPullRequest,
      accent: "yellow",
    },
    {
      id: "b5",
      title: "5. Aprender Ensinando",
      question: "Como ensinar fortalece meu aprendizado?",
      evidences: [
        "Explicação de conceitos",
        "Ajuda a colegas",
        "Troca de conhecimento",
        "Aprendizado contínuo",
      ],
      impact: "Consolidação do conhecimento, liderança e crescimento pessoal.",
      icon: BookOpen,
      accent: "cyan",
    },
  ],
  connections: [
    { from: "Reconhecimento emocional", to: "Comunicação", label: "melhora" },
    { from: "Autoconfiança", to: "Liderança", label: "fortalece" },
    { from: "Liderança", to: "Clima do grupo", label: "impacta" },
    { from: "Clima do grupo", to: "Emoções", label: "influencia" },
    { from: "Emoções equilibradas", to: "Desempenho técnico", label: "melhoram" },
  ],
});

function DetailModal({ block, onClose }) {
  if (!block) return null;
  const Icon = block.icon;

  return (
    <div className="canvas-modal">
      <div className="canvas-modal__backdrop" onClick={onClose} />
      <div className="canvas-modal__dialog" role="dialog" aria-modal="true">
        <div className="canvas-modal__header">
          <div className="canvas-modal__title">
            <span className={`canvas-icon-badge canvas-icon-badge--${block.accent}`}>
              <Icon size={20} />
            </span>
            <h3>{block.title}</h3>
          </div>
          <button className="canvas-modal__close" type="button" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div className="canvas-modal__body">
          <div className="canvas-modal__card">
            <p className="canvas-modal__label">Pergunta-Chave</p>
            <p className="canvas-modal__question">"{block.question}"</p>
          </div>
          <div className="canvas-modal__section">
            <p className="canvas-modal__label">Evidências no Projeto</p>
            <ul className="canvas-modal__list">
              {block.evidences.map((evidence) => (
                <li key={evidence}>
                  <span aria-hidden>•</span> {evidence}
                </li>
              ))}
            </ul>
          </div>
          <div className="canvas-modal__card canvas-modal__card--impact">
            <p className="canvas-modal__label">Impacto Gerado</p>
            <p className="canvas-modal__impact">{block.impact}</p>
          </div>
        </div>
        <div className="canvas-modal__footer">
          <button className="canvas-modal__button" type="button" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ObsidianCanvas() {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const canvasData = useMemo(getCanvasData, []);
  const CoreIcon = canvasData.core.icon;
  const desktopPositions = ["top-left", "top-right", "bottom-right", "bottom-left", "bottom-center"];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="canvas-page">
      <Helmet>
        <title>Canvas de Autoconhecimento | Thássio Silva</title>
        <meta
          name="description"
          content="Mapa visual conectando autoconhecimento e prática técnica no desenvolvimento de software."
        />
      </Helmet>

      <div className="canvas-dot-pattern" aria-hidden />

      <header className="canvas-header">
        <div className="canvas-header__titles">
          <h1>
            <Code size={24} aria-hidden /> Autoconhecimento
          </h1>
          <p>Thássio Gomes Silva · Knowledge Graph EMBRAPII</p>
        </div>
        <div className="canvas-header__pill">Knowledge Graph</div>
      </header>

      <main className="canvas-main">
        <section className="canvas-overview">
          <h2>Visão Geral</h2>
          <p>
            Este canvas, no estilo Knowledge Graph, mostra como desenvolvi a competência de Inteligência
            Emocional (Autoconhecimento) durante o projeto de um software de gestão, usando PBL.
          </p>
        </section>
        {isMobile ? (
          <section className="canvas-mobile">
            <div className="canvas-mobile__core">
              <span className="canvas-icon-badge canvas-icon-badge--purple">
                <CoreIcon size={28} />
              </span>
              <h2>{canvasData.core.title}</h2>
              <p className="canvas-mobile__subtitle">{canvasData.core.subtitle}</p>
              <p className="canvas-mobile__description">{canvasData.core.description}</p>
            </div>

            <div className="canvas-mobile__label">Blocos de Desenvolvimento</div>

            <div className="canvas-mobile__grid">
              {canvasData.blocks.map((block) => {
                const Icon = block.icon;
                return (
                  <button
                    key={block.id}
                    type="button"
                    className={`canvas-card canvas-card--${block.accent}`}
                    onClick={() => setSelectedBlock(block)}
                  >
                    <div className="canvas-card__heading">
                      <span className={`canvas-icon-badge canvas-icon-badge--${block.accent}`}>
                        <Icon size={20} />
                      </span>
                      <h3>{block.title}</h3>
                      <Maximize2 size={16} aria-hidden className="canvas-card__expand" />
                    </div>
                    <p className="canvas-card__preview">{block.evidences[0]}</p>
                  </button>
                );
              })}
            </div>

            <div className="canvas-connections">
              <h3>
                <Share2 size={16} aria-hidden /> Conexões do Sistema
              </h3>
              <ul>
                {canvasData.connections.map((connection) => (
                  <li key={`${connection.from}-${connection.to}`}>
                    <span>{connection.from}</span> →{" "}
                    <strong>{connection.label}</strong> → <span>{connection.to}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : (
          <section className="canvas-desktop">
            <svg className="canvas-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <marker id="canvas-arrow" markerWidth="4" markerHeight="3" refX="3" refY="1.5" orient="auto">
                  <polygon points="0 0, 4 1.5, 0 3" fill="#7c7fff" />
                </marker>
              </defs>
              <line x1="50" y1="50" x2="20" y2="20" />
              <line x1="50" y1="50" x2="80" y2="20" />
              <line x1="50" y1="50" x2="80" y2="80" />
              <line x1="50" y1="50" x2="20" y2="80" />
              <line x1="50" y1="50" x2="50" y2="90" />
              <path d="M 18 25 Q 50 8 82 25" markerEnd="url(#canvas-arrow)" />
              <path d="M 82 28 Q 92 55 82 82" markerEnd="url(#canvas-arrow)" />
            </svg>

            <div className="canvas-core">
              <div className="canvas-core__card">
                <span className="canvas-icon-badge canvas-icon-badge--purple">
                  <CoreIcon size={30} />
                </span>
                <h2>{canvasData.core.title}</h2>
                <p className="canvas-core__subtitle">{canvasData.core.subtitle}</p>
                <p className="canvas-core__description">{canvasData.core.description}</p>
              </div>
            </div>

            {canvasData.blocks.map((block, index) => {
              const Icon = block.icon;
              const positionClass = desktopPositions[index] || "top-left";
              return (
                <button
                  key={block.id}
                  type="button"
                  className={`canvas-node canvas-node--${positionClass} canvas-node--${block.accent}`}
                  onClick={() => setSelectedBlock(block)}
                >
                  <div className="canvas-node__content">
                    <div className="canvas-node__icons">
                      <span className={`canvas-icon-badge canvas-icon-badge--${block.accent}`}>
                        <Icon size={20} />
                      </span>
                      <Maximize2 size={14} className="canvas-node__expand" aria-hidden />
                    </div>
                    <h3>{block.title}</h3>
                    <p>"{block.question}"</p>
                  </div>
                </button>
              );
            })}

            <div className="canvas-legend">Clique nos cards para expandir</div>
          </section>
        )}
      </main>

      <footer className="canvas-footer">
        🎯 Desenvolvimento emocional conectado à prática técnica (PBL).
      </footer>

      <DetailModal block={selectedBlock} onClose={() => setSelectedBlock(null)} />
    </div>
  );
}
