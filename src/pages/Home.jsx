import Cabeca from "../Cabeca"
import Rodape from "../Rodape"
import Carousel from 'react-bootstrap/Carousel';
import Produtos from "../Produtos";


function Home(){
    return(
        <div className="site">
            <Cabeca/>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s2-g1.glbimg.com/56vdja0cxdCoUPWP7eehjSZgTmg=/0x0:1400x788/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/t/f/ZBcMRsSkOA0FB8TfRrfw/saiba-quais-sao-as-ferramentas-que-nao-podem-faltar-na-sua-casa.png"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://brasmetal.com/wp-content/uploads/2021/09/dicas-para-a-correta-manutencao-de-ferramentas-brasmetal-equipamentos.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://5139028l.ha.azioncdn.net/img/2023/03/blog/7859/bancada-com-varios-tipos-de-ferramentas-manuais.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr />
    <h2 className="text-center">Produtos</h2>
    <div className="produtocont">
      <Produtos image="https://images.tcdn.com.br/img/img_prod/633548/broca_concreto_widea_10_0mm_x160_sds_plus_irwin_1929947_1651_1_0110ae9308e56b53c2a2cad3bb3c49fa.jpg" preco="6,99"/>
      <Produtos image="https://tezbgl.vteximg.com.br/arquivos/ids/157084-1000-1000/Martelo-de-Unha-27mm-Tramontina-34021-2.png?v=637438893348170000" preco="49,99"/>
      <Produtos image="https://static.casadoeletricistasc.com.br/public/casadoeletricista/imagens/produtos/chave-fenda-9x200mm-tramontina-pro-713.png" preco="29,99"/>
      <Produtos image="https://cdn.leroymerlin.com.br/products/chave_de_boca_12x13mm_tramontina_90779346_0004_300x300.jpg" preco="10,99"/>
    </div>
    <Rodape/>
        </div>
    )
}

export default Home