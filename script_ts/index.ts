const html = document.documentElement as HTMLHtmlElement
const avatar = document.querySelector("#avatar") as HTMLImageElement
const alternar_modo = document.querySelector("#alternar_modo") as HTMLButtonElement

// Cria os elementos do switch (botão e pino)
const switchContainer = document.querySelector("#sp_simu") as HTMLDivElement;
const switchButton = document.querySelector("#btn_modo") as HTMLButtonElement;

// Lógica de alternância de tema
alternar_modo.addEventListener("click", () => {
    // Alterna a classe 'claro' no <html>
    html.classList.toggle("claro");
    
    // Atualiza a imagem do avatar de acordo com o tema
    // Você precisa ter 'avatar-c.svg' (claro) e 'avatar-e.svg' (escuro) na pasta 'imagens'
    if (html.classList.contains("claro")) {
        // Tema claro ativado
        avatar.setAttribute("src", "svg/avatar-a.svg"); // Mude para o nome correto da sua imagem CLARA
    } else {
        // Tema escuro ativado
        avatar.setAttribute("src", "svg/avatar-a.svg"); // Mantenha o nome original da sua imagem ESCURA
    }
});