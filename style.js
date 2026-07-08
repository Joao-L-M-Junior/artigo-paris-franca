/* ==========================================================================
   1. Mensagem de Boas-Vindas Dinâmica
   ========================================================================== */
// Altera o H1 dinamicamente para incluir uma saudação baseada no horário do usuário
document.addEventListener("DOMContentLoaded", () => {
    const hora = new Date().getHours();
    let saudacao = "";

    if (hora >= 5 && hora < 12) {
        saudacao = "Bonjour! Bom dia e bem-vindo à linda Paris";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde e bem-vindo à linda Paris";
    } else {
        saudacao = "Bonsoir! Boa noite e bem-vindo à linda Paris";
    }

    // Seleciona o título principal e atualiza o texto
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.innerText = `${saudacao}, capital da França`;
    }

    /* ==========================================================================
       2. Botão de Alternar Modo Escuro (A Cereja do Bolo!)
       ========================================================================== */
    // Cria um botão flutuante elegantemente via JS para ativar o Dark Mode
    const botaoDark = document.createElement("button");
    botaoDark.innerHTML = "🌙 Alternar Luzes";
    botaoDark.style.position = "fixed";
    botaoDark.style.bottom = "20px";
    botaoDark.style.right = "20px";
    botaoDark.style.padding = "10px 15px";
    botaoDark.style.backgroundColor = "#1a365d";
    botaoDark.style.color = "#fff";
    botaoDark.style.border = "none";
    botaoDark.style.borderRadius = "20px";
    botaoDark.style.cursor = "pointer";
    botaoDark.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    botaoDark.style.zIndex = "1000";
    botaoDark.style.transition = "transform 0.2s, background-color 0.3s";

    // Efeito de hover no botão
    botaoDark.onmouseenter = () => botaoDark.style.transform = "scale(1.05)";
    botaoDark.onmouseleave = () => botaoDark.style.transform = "scale(1)";

    document.body.appendChild(botaoDark);

    // Função que muda os estilos do corpo e do artigo para o modo escuro
    botaoDark.addEventListener("click", () => {
        const body = document.body;
        const article = document.querySelector("article");
        
        if (body.style.backgroundColor === "rgb(26, 32, 44)") {
            // Volta para o Modo Claro
            body.style.backgroundColor = "#f7f9fa";
            body.style.color = "#333333";
            if (article) article.style.backgroundColor = "#ffffff";
            botaoDark.innerHTML = "🌙 Apagar Luzes";
            botaoDark.style.backgroundColor = "#1a365d";
        } else {
            // Ativa o Modo Escuro (Paris à Noite)
            body.style.backgroundColor = "#1a202c";
            body.style.color = "#e2e8f0";
            if (article) article.style.backgroundColor = "#2d3748";
            botaoDark.innerHTML = "☀️ Acender Luzes";
            botaoDark.style.backgroundColor = "#ecc94b";
            botaoDark.style.color = "#1a202c";
        }
    });

    /* ==========================================================================
       3. Interatividade nas Atrações Turísticas
       ========================================================================== */
    // Adiciona um evento de clique para cada item da lista de atrações
    const atracoes = document.querySelectorAll("nave ul li");
    atracoes.forEach(item => {
        item.style.cursor = "pointer";
        item.addEventListener("click", () => {
            alert(`Magnifique! Você demonstrou interesse em visitar: ${item.innerText}. Prepare as malas!`);
        });
    });
});