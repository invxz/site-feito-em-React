import Cabeca from "../Cabeca"
import Rodape from "../Rodape"

function Sobre(){
    return(
        <div className="site">
            <Cabeca/>
            <div className="conteudosobre">
                <div className="conts">
                    <div className="txts">
                        <h2>Sobre nós</h2>
                        <p className="ps">Bem-vindo à Ferrou! Somos a sua loja de ferramentas especializada, dedicada a fornecer as melhores soluções para todas as suas necessidades de projetos e reparos. Seja você um profissional habilidoso ou um entusiasta do faça-você-mesmo, estamos aqui para ajudá-lo a ter sucesso em todas as suas empreitadas.

Na Ferrou, acreditamos que ter as ferramentas certas faz toda a diferença. É por isso que nos esforçamos para oferecer uma seleção abrangente de ferramentas de alta qualidade, das marcas mais confiáveis do mercado. Nossa equipe está sempre pronta para ajudá-lo a encontrar a ferramenta perfeita para o trabalho, seja ela uma ferramenta elétrica, manual, de medição ou qualquer outra.

Nosso compromisso vai além de fornecer produtos excepcionais. Valorizamos a sua experiência de compra e nos esforçamos para oferecer um atendimento personalizado e amigável. Nossa equipe possui amplo conhecimento e está pronta para oferecer orientação e conselhos especializados. Queremos que você se sinta confiante e capacitado ao escolher suas ferramentas.</p>
                    </div>
                    <div className="imgs">
                        <img src="https://thumbs.dreamstime.com/b/homem-consertando-cadeira-na-sala-o-que-conserta-172858818.jpg" alt="" />
                    </div>   
                </div>

                <div className="conts2">
                    <div className="imgs">
                        <img src="https://i1.sndcdn.com/artworks-d2Fyw0XiU6sCgTf9-Pm1O3g-t500x500.jpg" alt="" />
                    </div>   
                    <div className="txts2">
                        <h2>Mais curiosidades!</h2>
                        <p className="ps">Estamos comprometidos em fornecer um excelente serviço pós-venda. Se surgir alguma dúvida ou problema, estamos aqui para ajudar. Nossa equipe de suporte técnico está pronta para fornecer assistência e orientação, garantindo que você tenha uma experiência tranquila e satisfatória.

A Ferrou também valoriza a sua segurança. Estamos comprometidos em fornecer produtos de qualidade que atendam aos mais altos padrões de segurança. Queremos que você tenha confiança em suas ferramentas e possa executar seus projetos com tranquilidade.

Na Ferrou, a paixão por ferramentas é o que nos impulsiona. Nosso objetivo é fornecer a você as ferramentas certas para realizar qualquer tarefa, desde projetos domésticos até empreendimentos profissionais. Queremos ser o seu parceiro confiável e ajudá-lo a alcançar resultados excepcionais.

Então, se você está em busca de ferramentas duráveis, de qualidade e confiança, visite a Ferrou hoje mesmo! Estamos ansiosos para ajudá-lo a encontrar as ferramentas perfeitas para seus projetos e necessidades. Junte-se a nós e descubra o incrível mundo das ferramentas na Ferrou!</p>
                    </div>
                </div>
            </div>
            <Rodape/>
        </div>
    )
}

export default Sobre