export const Main = () => {
    return (
        <main className="p-8 max-w-5xl m-auto">
            <section className="h-screen ">
                <div className="flex items-center flex-col justify-center h-full m-auto">
                    <div className="flex items-center flex-col h-2/3 justify-around text-white">
                        <h1 className="text-7xl mb-8">Olá! Eu sou o <span className="text-yellow-200 text-">Luis Filipe!</span></h1>

                        <p className="text-2xl">Como um desenvolvedor front-end que vive e respira código, estou constantemente em busca da próxima grande aventura no mundo da programação. Com habilidades que abrangem desde JavaScript e Typescript nos frameworks React e Angular, além de todas aquelas bibliotecas e ferramentas que mantêm nosso ritmo no desenvolvimento moderno. Eu tenho um amor especial por manter meu código limpo e organizado, chega a tranquilizar a mente. Quando não estou imerso no código, estou dedicado a melhorar a comunicação da equipe e sempre buscando aprender novas tecnologias.</p>

                        <p className="text-2xl">
                            O Luis que vai além da programação é uma pessoa que gosta desafios, independente de quais sejam, gosta de rir, estar com os amigos, treinar pesado, jogar xadrez, de passar tempo com seus cachorros e sua esposa. É também uma pessoa super competitiva, daquelas que perde as estribeiras jogando War (não me orgulho disto kkkk mas é a vida) e que também tenta levar a vida de maneira leve, fazendo piadas com as situações para evitar que o clima pese.   
                        </p>
                    </div>
                    <div>
                        <img className="rounded-3xl mt-8" src="./src/assets/praia2.png" width={620} alt="Fotinha" title="Fotinha"/>
                    </div>
                </div>
            </section>
        </main>
    )
}