const analitico = parseInt(localStorage.getItem("notaAnalitico")) || 0;
const social = parseInt(localStorage.getItem("notaSocial")) || 0;
const criativo = parseInt(localStorage.getItem("notaCriativo")) || 0;
const pratico = parseInt(localStorage.getItem("notaPratico")) || 0;
const empreendedor = parseInt(localStorage.getItem("notaEmpreendedor")) || 0;

let empreendedorScore = document.querySelector('#empreendedorScore');
let analiticoScore = document.querySelector('#analiticoScore');
let criativoScore = document.querySelector('#criativoScore');
let socialScore = document.querySelector('#socialScore');
let praticoScore = document.querySelector('#praticoScore');

console.log(criativo)

let nameElement = document.querySelector('#profileName');
let nickElement = document.querySelector('#nickname');
let descElement = document.querySelector('#description');
let compElement = document.querySelector('#compability');
let chr1Element = document.querySelector('#chr1');
let chr2Element = document.querySelector('#chr2');
let chr3Element = document.querySelector('#chr3');
let chr4Element = document.querySelector('#chr4');
let chr5Element = document.querySelector('#chr5');
let crs1Element = document.querySelector('#crs1');
let crs2Element = document.querySelector('#crs2');
let crs3Element = document.querySelector('#crs3');
let crs4Element = document.querySelector('#crs4');
let crs5Element = document.querySelector('#crs5');

let mainProfileScore = 0

const profiles = [
    {
        profileName: 'Analítico',
        nickname: 'O Solucionador de Problemas',
        description: 'Você tem uma mente analítica excepcional, capaz de decompor problemas complexos em partes menores e encontrar soluções lógicas. Sua capacidade de raciocínio crítico e atenção aos detalhes são seus pontos fortes.',
        chr1: 'Pensamento lógico e estruturado',
        chr2: 'Capacidade de resolver problemas complexos',
        chr3: 'Atenção aos detalhes e precisão',
        chr4: 'Habilidade com números e dados',
        chr5: 'Gosta de pesquisa e investigação',
        crs1: 'Desenvolvimento de Sofware Multiplataforma',
        crs2: 'Engenharia de Dados',
        crs3: 'Ciências Contábeis',
        crs4: 'Estatística',
        crs5: 'Administração',
        compability: analitico
    },

    {
        profileName: 'Social',
        nickname: 'O Conectador de Pessoas',
        description: 'Você tem um talento especial para entender e se conectar com pessoas. Sua empatia, habilidades de comunicação e desejo de ajudar outros fazem de você um profissional social excepcional.',
        chr1: 'Excelentes habilidades de comunicação',
        chr2: 'Empatia e compreensão interpessoal',
        chr3: 'Capacidade de trabalhar em equipe',
        chr4: 'Interesse em ajudar outras pessoas',
        chr5: 'Facilidade para resolver conflitos',
        crs1: 'Recursos Humanos',
        crs2: 'Serviço Social',
        crs3: 'Psicologia',
        crs4: 'Gestão Comercial',
        crs5: 'Marketing',
        compability: social
    },

    {
        profileName: 'Criativo',
        nickname: 'O Visionário Artístico',
        description: 'Sua criatividade e imaginação são suas maiores forças. Você vê o mundo de forma única e tem a habilidade de transformar ideias abstratas em realidade tangível através da arte e design.',
        chr1: 'Imaginação e criatividade abundantes',
        chr2: 'Senso estético apurado',
        chr3: 'Capacidade de inovar e criar',
        chr4: 'Habilidade para expressão artística',
        chr5: 'Pensamento não-linear',
        crs1: 'Design Gráfico',
        crs2: 'Publicidade e Propaganda',
        crs3: 'Arquitetura',
        crs4: 'Design de Interiores',
        crs5: 'Comunicação Visual',
        compability: criativo
    },

    {
        profileName: 'Empreendedor',
        nickname: 'O Líder Visionário',
        description: 'Você tem o espírito empreendedor natural, com visão de negócios, capacidade de liderança e coragem para assumir riscos calculados. Sua ambição e determinação são seus diferenciais.',
        chr1: 'Visão de negócios e oportunidades',
        chr2: 'Capacidade de liderança natural',
        chr3: 'Coragem para assumir riscos',
        chr4: 'Habilidade para tomar decisões',
        chr5: 'Ambição e determinação',
        crs1: 'Administração',
        crs2: 'Gestão Empresarial',
        crs3: 'Marketing',
        crs4: 'Comércio Exterior',
        crs5: 'Gestão Financeira',
        compability: empreendedor
    },

    {
        profileName: 'Prático',
        nickname: 'O Executor Habilidoso',
        description: 'Você tem habilidade natural para colocar a mão na massa e transformar teoria em prática. Sua capacidade de executar tarefas concretas, resolver problemas do mundo real e trabalhar com ferramentas e técnicas aplicadas fazem de você um profissional essencial em qualquer equipe.',
        chr1: 'Habilidade manual e técnica apurada',
        chr2: 'Foco em resultados tangíveis',
        chr3: 'Aprendizado por experiência',
        chr4: 'Capacidade de execução eficiente',
        chr5: 'Resolução prática de problemas',
        crs1: 'Mecânica',
        crs2: 'Logística',
        crs3: 'Mecatrônica Industrial',
        crs4: 'Engenharia Civil',
        crs5: 'Eletrônica Industrial',
        compability: pratico
    }
];

for (let i = 0; i < profiles.length; i++) {
    if (profiles[i].compability > mainProfileScore) {
        mainProfileScore = profiles[i].compability
    }
};

for (let i = 0; i < profiles.length; i++) {
    if (profiles[i].compability === mainProfileScore) {
        nameElement.innerHTML = `Perfil ${profiles[i].profileName}`;
        nickElement.innerHTML = `${profiles[i].nickname}`;
        descElement.innerHTML = `${profiles[i].description}`;
        chr1Element.innerHTML = `${profiles[i].chr1}`;
        chr2Element.innerHTML = `${profiles[i].chr2}`;
        chr3Element.innerHTML = `${profiles[i].chr3}`;
        chr4Element.innerHTML = `${profiles[i].chr4}`;
        chr5Element.innerHTML = `${profiles[i].chr5}`;
        crs1Element.innerHTML = `${profiles[i].crs1}`;
        crs2Element.innerHTML = `${profiles[i].crs2}`;
        crs3Element.innerHTML = `${profiles[i].crs3}`;
        crs4Element.innerHTML = `${profiles[i].crs4}`;
        crs5Element.innerHTML = `${profiles[i].crs5}`;
        compElement.innerHTML = `${profiles[i].compability}%`
    }
};

empreendedorScore.style.width = `${empreendedor}%`;
analiticoScore.style.width = `${analitico}%`;
criativoScore.style.width = `${criativo}%`;
socialScore.style.width = `${social}%`;
praticoScore.style.width = `${pratico}%`;