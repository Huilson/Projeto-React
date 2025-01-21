const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: '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' });

export async function geradorNPC(npcName: string) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
                {
                    "role": "user",
                    "content": "Estou fazendo um app onde o usuario entrará com um evento e quero um nome para NPCs de RPG, onde informo a raça e um caracteristica, e você retorna um nome e uma brefe descrição do individuo."
                },
                {
                    "role": "assistant",
                    "content": "Que ideia divertida!"
                },
                {
                    "role": "user",
                    "content": "quero te enviar o evento e você irá me responder somente o nome e descrição do individuo, o nome deve estar separado por **Nome** e a descrição por **Descrição**"
                },
                {
                    "role": "assistant",
                    "content": "Envie o evento e eu responderei!"
                },                
                {
                    "role": "user",
                    "content": npcName
                },
            ],
            "model": "llama-3.1-70b-versatile",
            "temperature": 1,
            "max_tokens": 1024,
        });

        return chatCompletion.choices[0]?.message.content;
    } catch (error) {

        const desculpas = [
            "Poxa, justo hoje meu hamster ficou doente...",
            "Sabe o que é... Um alienígena sequestrou meu celular!",
            "Meu vizinho está fazendo uma festa de karaokê e preciso vigiar o volume",
            "Meu gato deletou minha agenda sem querer",
            "Estou em uma missão secreta para salvar o mundo",
            "Estou treinando uma equipe de formigas para o circo",
            "Minha sombra decidiu tirar um dia de folga",
            "Preciso meditar com meus cactos para melhorar sua autoestima",
            "Meu guarda-roupa está em greve e não libera minhas roupas",
            "Estou ensinando matemática avançada pro meu papagaio",
            "Minha conexão com a realidade está instável hoje",
            "Preciso resolver uma disputa territorial entre meus travesseiros",
            "Meu relógio decidiu contar o tempo de trás pra frente",
            "Estou em negociação com extraterrestres sobre o preço do pão de queijo",
            "Minha geladeira está tendo um ataque de ciúmes do micro-ondas",
            "Preciso participar de uma reunião urgente com meus amigos imaginários",
            "Meu espelho está refletindo uma versão alternativa de mim mesmo",
            "Estou catalogando os diferentes tipos de silêncio em casa",
            "Minha escova de dentes declarou independência",
            "Preciso ajudar meu café a superar o medo de altura",
            "Minha porta está num momento filosófico e não quer abrir",
            "Estou desenvolvendo um algoritmo para entender por que o chinelo sempre some",
            "Minha calculadora está tendo um colapso emocional",
            "Preciso mediar uma discussão entre meu sofá e minha poltrona"]

        return desculpas[Math.floor(Math.random() * desculpas.length)]
    }
}




