const lista = document.getElementById ("lista-filmes");
const form = document.getElementById("form-filme");

let filmes = [...filmesIniciais];

function renderFilmes(){
    lista.innerHTML = "";
    filmes.forEach((f) =>{
        const card = document.createElement("div");
        card.className="card";

        card.innerHTML =`
        <div class ="media-container"> 
        <img src = "${f.capa}" alt="${f.nome}"class="poster">
        </div>
        <h3>${f.nome}</h3>
        <p><strong>categoria</strong> ${f.categoria}</p>
        <p class ="estrelas">${"★".repeat(f.estrelas)}${"☆".repeat(5-f.estrelas)}</p>
        `;
        const mediaContainer = card.querySelector(".media-container");

        card.addEventListener("mouseenter", () => {
            if(f.trailer) {
                mediaContainer.innerHTML =`
                <iframe
                width="100%"
                height="300"
                src="${f.trailer}?autoplay=1& mute=1"
                flameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen>
                </iframe>
                `
            }
        });

        card.addEventListener("mouseleave",()=>{
            mediaContainer.innerHTML = `<img src="${f.capa}"alt=${f.capa}"alt="${f.nome}"class="poster">`;
        });
        lista.appendChild(card);
    });
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const novoFilme = {
        capa: document.getElementById("capa").value.trim(),
        nome:document.getElementById("nome").value.trim(),
        ano:parseInt(document.getElementById("ano").value),
        categoria: document.getElementById("categoria").value.trim(),
        estrelas: parseInt(document.getElementById("estrelas").value),
        trailer:document.getElementById("trailer").value.trim()
    };
    filmes.push(novoFilme);
    renderFilmes();
    form.reset();
});

renderFilmes();