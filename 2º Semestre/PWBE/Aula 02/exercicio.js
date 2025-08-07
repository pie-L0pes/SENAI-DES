const times = [
    {
       "Time": "Sao Paulo",
       "Estado": "Sao Paulo",
       "Fudação": "25 de janeiro de 1930",
       "Diretor": "Julio Casares",
       "Brasão": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.m.wikipedia.org%2Fwiki%2FFicheiro%3ABrasao_do_Sao_Paulo_Futebol_Clube.svg&psig=AOvVaw2FdEYkIR83JpI-K-xkArY6&ust=1754661800559000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjk7aLv-I4DFQAAAAAdAAAAABAE",
       "Vitorias": 6,
       "Derrotas": 5,
       "Empates": 7
    },
    {
       "Time": "Palmeiras",
       "Estado": "Sao Paulo",
       "Fudação": "26 de agosto de 1914",
       "Diretor": "Anderson Barros",
       "Brasão": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.palmeiras.com.br%2Fescudos%2F&psig=AOvVaw0NG-bHzF8N_cDHiJJxoH-V&ust=1754661836541000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOC1r7Tv-I4DFQAAAAAdAAAAABAE",
       "Vitorias": 10,
       "Derrotas": 3,
       "Empates": 3
    },
    {
       "Time": "Corinthians",
       "Estado": "Sao Paulo",
       "Fudação": "1 de setembro de 1910",
       "Diretor": "Fabinho Soldado",
       "Brasão": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2Ffind-hd-corinthians-logo-ndash-escudo-logodownloadorg-sport-club-corinthians-paulista-hd-png-download-to-search-and--719309371728158475%2F&psig=AOvVaw1ZBmbMAVXqO9i_2UiqA4rq&ust=1754661878603000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLDL68nv-I4DFQAAAAAdAAAAABAE",
       "Vitorias": 5,
       "Derrotas": 6,
       "Empates": 7
    }
];


times.forEach((time)=> {
    if(time.Time === "Palmeiras"){
        console.log((time.Vitorias * 3) + time.Empates);
    }
}
);