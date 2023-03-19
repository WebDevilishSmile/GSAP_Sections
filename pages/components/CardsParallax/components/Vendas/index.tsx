import { ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import {
  Container,
  GroupCards,
  GroupCardsLeft,
  GroupCardsRight,
  Card
} from "./styles";

interface VendasProps {
  children?: ReactNode;
}

function Vendas({}: VendasProps) {
  gsap.registerPlugin(ScrollTrigger);

  // Cards
  let cardRef0 = useRef();
  let cardRef1 = useRef();
  let cardRef2 = useRef();
  let cardRef3 = useRef();
  let cardRef4 = useRef();
  let cardRef5 = useRef();
  let cardRef6 = useRef();
  let cardRef7 = useRef();
  let cardRef8 = useRef();
  let cardRef9 = useRef();
  let cardRef10 = useRef();

  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      gsap.to(cardRef0?.current, {
        y: -830,
        scrollTrigger: {
          trigger: cardRef0?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef1?.current, {
        y: -1030,
        scrollTrigger: {
          trigger: cardRef1?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef2?.current, {
        y: -1390,
        scrollTrigger: {
          trigger: cardRef2?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef3?.current, {
        y: -1510,
        scrollTrigger: {
          trigger: cardRef3?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef4?.current, {
        y: -830,
        scrollTrigger: {
          trigger: cardRef4?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef5?.current, {
        y: -1430,
        scrollTrigger: {
          trigger: cardRef5?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef6?.current, {
        y: -1390,
        scrollTrigger: {
          trigger: cardRef6?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef7?.current, {
        y: -910,
        scrollTrigger: {
          trigger: cardRef7?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef8?.current, {
        y: -830,
        scrollTrigger: {
          trigger: cardRef8?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef9?.current, {
        y: -1430,
        scrollTrigger: {
          trigger: cardRef9?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef10?.current, {
        y: -1390,
        scrollTrigger: {
          trigger: cardRef10?.current,
          scrub: 4
        }
      });

      return () => {
        gsap.killTweensOf(cardRef0);
        gsap.killTweensOf(cardRef1);
        gsap.killTweensOf(cardRef2);
        gsap.killTweensOf(cardRef3);
        gsap.killTweensOf(cardRef4);
        gsap.killTweensOf(cardRef5);
        gsap.killTweensOf(cardRef6);
        gsap.killTweensOf(cardRef7);
        gsap.killTweensOf(cardRef8);
        gsap.killTweensOf(cardRef9);
        gsap.killTweensOf(cardRef10);
      };
    }, []);
  }

  return (
    <Container>
      <GroupCards>
        <GroupCardsLeft>
          <Card ref={cardRef0} id="cardRef0">
            <h4>Automatize suas vendas e escale mais</h4>

            <p>
              Envio automático de catálogos, ofertas e outras mensagens pelo
              WhatsApp.
            </p>
            <p>
              Bot disponível para responder dúvidas a qualquer momento,
              inclusive nos feriados e fins de semana.
            </p>
            <p>
              {" "}
              Automatize com chatbot e direcione o cliente ao chat humano quando
              necessário.
            </p>
          </Card>

          <Card ref={cardRef1} id="cardRef1">
            <h4>Venda em qualquer canal e em tempo real.</h4>

            <p>Tenha controle multicanal de todas as suas interações</p>
            <p>
              {" "}
              Ofereça a possibilidade de o seu cliente comprar com você em
              qualquer canal, obtendo o direcionamento certo.
            </p>
          </Card>

          <Card ref={cardRef2} id="cardRef2">
            <h4>1 número = vários profissionais no WhatsApp</h4>

            <p>Escale suas vendas mantendo apenas 1 número no WhatsApp.</p>
            <p>
              Uso de API oficial para mais segurança e estabilidade para o seu
              negócio não parar.
            </p>
          </Card>

          <Card ref={cardRef3} id="cardRef3">
            <h4>Recuperação de carrinho abandonado</h4>

            <p>
              Pare de perder vendas por abandono de carrinho. Motive seu
              potencial cliente a retornar à compra, por meio de envio de
              mensagens via WhatsApp. Ofereça algo especial, como um cupom de
              desconto, para que ele possa retomar e concluir sua compra.
            </p>
          </Card>

          <Card ref={cardRef4} id="cardRef4">
            <h4>Siga os passos e ações do seu cliente.</h4>

            <p>Veja quais foram os pontos de interação com a sua marca.</p>
            <p>
              Tenha uma visualização simplificada de todos os contatos do
              cliente em um único lugar.
            </p>
          </Card>
        </GroupCardsLeft>

        <GroupCardsRight>
          <Card ref={cardRef5} id="cardRef5">
            <h4>Geolocalização para levar o cliente à loja física</h4>

            <p>
              Oriente de forma automatizada o seu novo cliente ou um cliente já
              conhecido a encontrar a loja mais próxima ao endereço dele.
            </p>
          </Card>

          <Card ref={cardRef6} id="cardRef6">
            <h4>Comunique a disponibilidade dos seus produtos</h4>

            <p>
              Informe seu cliente avisos de reposição no estoque, novidades que
              chegaram no catálogo, dentre outras atualizações.
            </p>
          </Card>

          <Card ref={cardRef7} id="cardRef7">
            <h4>Agilize respostas para dúvidas frequentes </h4>

            <p>
              Mantenha visível as dúvidas e respostas mais frequentes dos
              consumidores e acelere a tomada de decisão.
            </p>
          </Card>

          <Card ref={cardRef8} id="cardRef8">
            <h4>Gerencie conversas entre vendedores e clientes</h4>

            <p>
              Direcione o cliente de forma automática para o departamento
              adequado e ofereça atendimento personalizado.
            </p>
          </Card>

          <Card ref={cardRef9} id="cardRef9">
            <h4>Vitrine com avaliações sobre seus produtos</h4>

            <p>
              Disponibilize comentários e avaliações sobre experiências
              anteriores com seus produtos para ajudar ainda mais na conversão.
            </p>
            <p>
              Ofereça mais segurança para novos consumidores ao expor
              experiências anteriores dos seus atuais clientes.
            </p>
          </Card>

          <Card ref={cardRef10} id="cardRef10">
            <h4>Indicação de produtos no momento certo</h4>

            <p>
              Sugira produtos complementares de forma automática, colaborando
              para mais compras e que se complementam.
            </p>
            <p>
              Entenda as preferências do seu consumidor e ofereça produtos de
              forma mais assertiva.
            </p>
          </Card>
        </GroupCardsRight>
      </GroupCards>
    </Container>
  );
}

export default Vendas;
