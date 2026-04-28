function trocarVideo(elemento) {
    // 1. Pega o endereço (src) do vídeo que está dentro da miniatura clicada
    const novoVideoSrc = elemento.querySelector('video').getAttribute('src');
    
    // 2. Pega o texto (título) que está dentro do item clicado
    const novoTitulo = elemento.querySelector('.info p').innerText;
    
    // 3. Seleciona o player principal e o título da tela
    const videoPrincipal = document.getElementById('video-display');
    const tituloPrincipal = document.getElementById('titulo-display');
    
    // 4. Adiciona uma classe de animação para dar um efeito de transição (opcional)
    videoPrincipal.classList.add('trocando');
    
    // 5. Troca o vídeo e o título
    videoPrincipal.src = novoVideoSrc;
    tituloPrincipal.innerText = novoTitulo;
    
    // 6. Dá o play automaticamente no novo vídeo
    videoPrincipal.play();
    
    // Remove a classe de animação após 0.5s para poder usar de novo na próxima troca
    setTimeout(() => {
        videoPrincipal.classList.remove('trocando');
    }, 500);
}
