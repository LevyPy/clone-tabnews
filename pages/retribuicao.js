// pages/agradecimento.jsx
import Image from "next/image";

export default function Agradecimento() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#f4f4f8",
      }}
    >
      <h1 style={{ color: "#333" }}>
        Obrigado Filipe, veja como fiquei feliz em fazer todos os passos:
      </h1>

      <div style={{ margin: "30px 0" }}>
        <Image
          src="/images/ChatGPT Image Apr 10, 2025, 10_26_31 AM.webp"
          alt="Filipe feliz"
          width={300}
          height={300}
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      <p style={{ fontSize: "1.1em", color: "#555" }}>
        Pedi uma ajuda ao <strong>Epilif GPT</strong> pra fazer esse
        agradecimento, meio diferenciado 😄
      </p>
      <p style={{ fontSize: "1em", color: "#777", marginTop: "40px" }}>
        Se chegou até aqui, pode deixar um comentário lá no commit:
        <br />
        <a
          href="https://github.com/LevyPy/clone-tabnews/commit/5bd8a4ad1eb1b6386a25fd324b1236f0947f7376"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0070f3", textDecoration: "none" }}
        >
          github.com/LevyPy/clone-tabnews/commit/5bd8a4ad1eb1b6386a25fd324b1236f0947f7376
        </a>
      </p>
    </div>
  );
}
