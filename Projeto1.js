const perguntas = [
    {
        pergunta: 'Qual é o nome do mapa mais jogado competitivamente no CS:GO?',
        respostas: [
            'Dust 2',
            'Inferno',
            'Mirage'
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é o nome da arma inicial padrão dos contra-terroristas?',
        respostas: [
            'AK-47',
            'M4A4',
            'P2000'
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a sigla para os contra-terroristas no CS:GO?',
        respostas: [
            'CT',
            'T',
            'CIA'
        ],
        correta: 0
    },
    {
        pergunta: 'Quantos jogadores estão em cada equipe no CS:GO?',
        respostas: [
            '6',
            '5',
            '4'
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o nome do modo de jogo em que os terroristas devem plantar a bomba e os contra-terroristas devem impedir?',
        respostas: [
            'Deathmatch',
            'Competitivo',
            'Desarme/Plantação de Bomba'
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é o nome do famoso torneio anual de CS:GO organizado pela Valve?',
        respostas: [
            'CS:GO Majors',
            'ESL One',
            'DreamHack'
        ],
        correta: 0
    },
    
    {
        pergunta: ' Qual é o nome do modo de jogo em que os jogadores só podem comprar uma arma por rodada?',
        respostas: [
            'Freeze time',
            'Pause break',
            'ECO'
        ],
        correta: 0
    },
    {
        pergunta: ' Qual é o nome do modo de jogo em que os jogadores só podem comprar uma arma por rodada?',
        respostas: [
            'Surf',
            'ECO',
            'Forçado'
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o nome do jogador profissional de CS:GO que é conhecido como "Coldzera"?',
        respostas: [
            'Fernando Alvarenga',
            'Gabriel Toledo',
            'Marcelo David'
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é o nome do desenvolvedor do CS:GO?',
        respostas: [
            'Eletronic Arts',
            'Blizzard Entertainment',
            'Valve Corporation'
        ],
        correta: 2
    }
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for( const item of perguntas){

    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)

        dt.querySelector('span').textContent = resposta        
        dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estacorreta = event.target.value == item.correta  
           corretas.delete(item)
            if(estacorreta){
                corretas.add(item)
            }
           mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)

}
 quizItem.querySelector('dl dt').remove()
quiz.appendChild(quizItem)
}

