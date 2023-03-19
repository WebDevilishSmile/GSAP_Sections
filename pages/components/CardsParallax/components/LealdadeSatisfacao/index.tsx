import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import {
  Container,
  GroupCards,
  GroupCardsLeft,
  GroupCardsRight,
  Card
} from "./styles";

interface LealdadeSatisfacaoProps {
  children?: ReactNode;
}

function LealdadeSatisfacao({}: LealdadeSatisfacaoProps) {
  gsap.registerPlugin(ScrollTrigger);

  // Cards
  let cardRef0 = useRef();
  let cardRef1 = useRef();
  let cardRef2 = useRef();
  let cardRef3 = useRef();
  let cardRef4 = useRef();

  if (typeof window !== "undefined") {
    useEffect(() => {
      gsap.to(cardRef0?.current, {
        willChange: "scroll-position, transform",
        y: -830,
        scrollTrigger: {
          trigger: cardRef0?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef1?.current, {
        willChange: "scroll-position, transform",
        y: -1030,
        scrollTrigger: {
          trigger: cardRef1?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef2?.current, {
        willChange: "scroll-position, transform",
        y: -1390,
        scrollTrigger: {
          trigger: cardRef2?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef3?.current, {
        willChange: "scroll-position, transform",
        y: -1510,
        scrollTrigger: {
          trigger: cardRef3?.current,
          scrub: 4
        }
      });
      gsap.to(cardRef4?.current, {
        willChange: "scroll-position, transform",
        y: -830,
        scrollTrigger: {
          trigger: cardRef4?.current,
          scrub: 4
        }
      });

      return () => {
        gsap.killTweensOf(cardRef0);
        gsap.killTweensOf(cardRef1);
        gsap.killTweensOf(cardRef2);
        gsap.killTweensOf(cardRef3);
        gsap.killTweensOf(cardRef4);
      };
    }, []);
  }

  return (
    <Container>
      <GroupCards>
        <GroupCardsLeft>
          <Card ref={cardRef0} id="cardRef0">
            <h4>Ouça seu cliente e avalie seus comentários sobre sua marca</h4>

            <p>
              Aplique pesquisas de satisfação, como NPS (Net Promoter Score®), e
              descubra o sentimento dos seus clientes depois de um atendimento
              ou de uma compra.
            </p>
            <p>
              {" "}
              Tenha novas ideias sobre melhorias em produtos e serviços,
              qualidade no atendimento, sucesso de suporte e em todas as outras
              fases da jornada.
            </p>
          </Card>

          <Card ref={cardRef1} id="cardRef1">
            <h4>Avalie a reputação da sua empresa</h4>

            <p>
              Por meio de soluções como acompanhamento em redes sociais,
              descubra o que falam de você, acompanhe críticas e elogios nas
              mídias, analise concorrentes e descubra os detratores e promotores
              da sua marca.
            </p>
          </Card>
        </GroupCardsLeft>

        <GroupCardsRight>
          <Card ref={cardRef2} id="cardRef2">
            <h4>
              Envie mensagens automáticas por whatsapp e cultive relacionamentos
            </h4>

            <p>
              Envie mensagens personalizadas e aproxime-se ainda mais do seu
              cliente.
            </p>
            <p>
              Recados de boas-vindas, feliz aniversário, parabéns por comprar um
              produto, serviço ou assinatura, datas comemorativas e outras
              interações.
            </p>
          </Card>

          <Card ref={cardRef3} id="cardRef3">
            <h4>Acompanhe o histórico de cada consumidor</h4>

            <p>
              Saiba há quanto tempo ele não compra com você, ofereça ofertas e
              cupons exclusivos, dentre outras ações para manter ou resgatar
              este cliente.
            </p>
          </Card>

          <Card ref={cardRef4} id="cardRef3">
            <h4>Tenha uma visão 360º das suas ações</h4>

            <p>
              Acompanhe o seu desempenho em cada etapa do atendimento, com
              acesso a relatórios avançados.
            </p>
            <p>
              Visão completa sobre atuação dos agentes, sentimentos e emoções
              dos consumidores, interações nas mídias sociais e muito mais.
            </p>
            <p>
              {" "}
              Entenda o que deu certo e o que também não deu certo, para assim
              saber como fazer nas próximas vezes.
            </p>
          </Card>
        </GroupCardsRight>
      </GroupCards>
    </Container>
  );
}

export default LealdadeSatisfacao;
