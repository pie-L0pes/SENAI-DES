const inputBusca = document.getElementById('busca');
const container = document.getElementById('grid-musicas');
const player = document.getElementById('audio-player');
const trackInfo = document.getElementById('track-info');

inputBusca.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        const termo = inputBusca.value;
        if(termo) buscarMusica(termo);
    }
});
// function buscarMusica(termo){
    // const antigo = document.getElementById("itunes-script");
    // if(antigo) antigo.remove();

    // const script = document.createElement('script');
    // script.id = "itunes-script";

    // script.src = `https://itunes.apple.com/search?term=${termo}&media=music&limit=15&callback=processarResposta`;
// }
   
    async function buscarMusica(termo) {
        try{
            const response = await fetch(`https://itunes.apple.com/search?term=${termo}&media=music&limit=15`);
            const data = await response.json();
            exibirResultados(data.results);
        }
        catch(error){
            console.error("Erro ao buscar músicas:", error);
        }
       
    }
function exibirResultados(musicas){
    container.innerHTML = '';
   
    musicas.forEach(musica => {
        const card = document.createElement('div');
        card.className = 'card-music';

        const capaUrl = musica.artworkUrl100.replace('100x100', '400x400');

        card.innerHTML = `
        <img src = "${capaUrl}" alt="${musica.trackName}">
        <h3>${musica.trackName}</h3>
        <p>${musica.artistName}</p>
        `;

        card.onclick = () => {
            player.src = musica.previewUrl;
            player.play();
            trackInfo.innerHTML = `Tocando ${musica.trackName}`;
        };
        container.appendChild(card);

    });
}
