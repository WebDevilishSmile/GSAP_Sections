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

interface AtendimentoProps {
  children?: ReactNode;
}

function Atendimento({}: AtendimentoProps) {
  gsap.registerPlugin(ScrollTrigger);

  // Cards
  let cardRef0 = useRef();
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
          scrub: 2
        }
      });
      gsap.to(cardRef2?.current, {
        y: -1390,
        scrollTrigger: {
          trigger: cardRef2?.current,
          scrub: 2
        }
      });
      gsap.to(cardRef3?.current, {
        y: -1510,
        scrollTrigger: {
          trigger: cardRef3?.current,
          scrub: 2
        }
      });
      gsap.to(cardRef4?.current, {
        y: -830,
        scrollTrigger: {
          trigger: cardRef4?.current,
          scrub: 2
        }
      });
      gsap.to(cardRef5?.current, {
        y: -1430,
        scrollTrigger: {
          trigger: cardRef5?.current,
          scrub: 2
        }
      });
      gsap.to(cardRef6?.current, {
        y: -1390,
        scrollTrigger: {
          trigger: cardRef6?.current,
          scrub: 2
        }
      });
      gsap.to(cardRef7?.current, {
        y: -910,
        scrollTrigger: {
          trigger: cardRef7?.current,
          scrub: 2
        }
      });
      gsap.to(cardRef8?.current, {
        y: -830,
        scrollTrigger: {
          trigger: cardRef8?.current,
          scrub: 2
        }
      });
      gsap.to(cardRef9?.current, {
        y: -1430,
        scrollTrigger: {
          trigger: cardRef9?.current,
          scrub: 2
        }
      });
      gsap.to(cardRef10?.current, {
        y: -1390,
        scrollTrigger: {
          trigger: cardRef10?.current,
          scrub: 2
        }
      });

      return () => {
        gsap.killTweensOf(cardRef0);
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
            <h4>Disponibilidade em tempo integral (24x7)</h4>

            <p>Esteja sempre disponível com um atendimento automatizado.</p>
            <p>
              {" "}
              Evite prolongar a jornada de trabalho da sua equipe e diminua
              custos.
            </p>
            <p>
              Mais agilidade para seu cliente resolver solicitações simples sem
              precisar de um atendente, na hora que quiser e no canal que
              preferir.
            </p>
          </Card>

          <Card ref={cardRef2} id="cardRef2">
            <h4>Automação + Integrações</h4>

            <p>
              Automatize o envio de respostas para as perguntas mais frequentes
              recebidas sobre sua marca, preços, produtos e serviços.
            </p>
            <p>
              Seu cliente pode solicitar e acessar automaticamente boletos,
              códigos de rastreio, status de pedido, sugestão de meios de
              pagamento, dentre outras resoluções rápidas.
            </p>
          </Card>

          <Card ref={cardRef3} id="cardRef3">
            <h4>Mais escala, menos gastos</h4>

            <p>
              Nossa plataforma permite que sua operação seja escalável, evitando
              ampliação de equipe ou mais estrutura para suportar maiores
              volumes de atendimentos.
            </p>
            <p>
              Atenda tranquilamente nos períodos de sazonalidade, como datas
              comemorativas ou em épocas de matrículas.
            </p>
          </Card>

          <Card ref={cardRef4} id="cardRef3">
            <h4>Bot não resolveu? Direcione-o para um atendente</h4>

            <p>
              Continue a conversa com o cliente por chat com um dos atendentes,
              tanto no WhatsApp quanto em outros canais.
            </p>
            <p>
              {" "}
              Direcionamento fácil ideal para clientes que preferem uma atenção
              especial ou querem ser atendidos por um humano.
            </p>
          </Card>

          <Card ref={cardRef5} id="cardRef5">
            <h4>Envie mensagens automáticas via WhatsApp</h4>

            <p>
              Programe envios automáticos para seus clientes: lembretes,
              confirmação de consultas, pesquisas de satisfação, avisos de
              vencimentos de faturas, dentre outros.
            </p>
            <p>
              Enviar lembretes e avisos podem fazer com que seu cliente se sinta
              querido, importante e muito grato.
            </p>
          </Card>
        </GroupCardsLeft>

        <GroupCardsRight>
          <Card ref={cardRef6} id="cardRef6">
            <h4>Visualize todas as interações em uma única plataforma</h4>

            <p>
              Tenha fácil acesso ao histórico integrado da jornada do consumidor
              e ofereça um atendimento personalizado.
            </p>
            <p>
              {" "}
              Tenha uma visão completa dos canais onde seu consumidor interage,
              veja diálogos de bot, chat, e-mail, redes sociais, reviews e Net
              Promoter Score® e integre a outros sistemas da sua empresa.
            </p>
          </Card>

          <Card ref={cardRef7} id="cardRef7">
            <h4>Seu cliente não precisa mais repetir informações</h4>

            <p>
              Acesso fácil às informações de cada cliente, em tempo real,
              possibilitando retomar o seu histórico e realizar um atendimento
              personalizado.
            </p>
            <p>
              {" "}
              Confira a situação financeira, notas de satisfação do cliente,
              status de pedidos, redes sociais e muito mais.
            </p>
          </Card>

          <Card ref={cardRef8} id="cardRef8">
            <h4>@SeuCliente vai curtir você</h4>

            <p>
              Interaja com seu público nas suas redes sociais, em uma única
              plataforma, atendendo comentários e menções para sua marca.
            </p>
            <p>Seja uma marca ativa nas redes sociais.</p>
            <p>
              {" "}
              Isso torna você mais engajado e dedicado a agradar pessoas,
              estando atento ao que acontece e participando de conversas.
            </p>
          </Card>

          <Card ref={cardRef9} id="cardRef9">
            <h4>Gerencie tickets e organize seus atendimentos</h4>

            <p>
              Controle as solicitações vindas de site, e-mail, chat e redes
              sociais.
            </p>
            <p>
              {" "}
              Registre comentários privados enquanto interage em um ticket de
              atendimento com seus clientes.
            </p>
          </Card>

          <Card ref={cardRef10} id="cardRef10">
            <h4>Entenda o comportamento do seu consumidor</h4>

            <p>
              Saiba quais os horários que o consumidor mais busca pelo seu
              atendimento e nunca deixe ele na mão, sendo retornar a ele no dia
              seguinte ou oferecer um atendimento em tempo real (24x7)
            </p>
          </Card>
        </GroupCardsRight>
      </GroupCards>
    </Container>
  );
}

export default Atendimento;
