import { ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import {
  Container,
  GroupCards,
  GroupCardsLeft,
  GroupCardsRight,
  Card,
  Texts
} from "./styles";

interface AtracaoProps {
  children?: ReactNode;
}

function Atracao({}: AtracaoProps) {
  gsap.registerPlugin(ScrollTrigger);

  // Texts fixed
  let textFixed = useRef();

  // Cards
  let cardRef0 = useRef();
  let cardRef1 = useRef();
  let cardRef2 = useRef();
  let cardRef3 = useRef();

  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      gsap.to(cardRef0?.current, {
        y: -1830,
        scrollTrigger: {
          trigger: cardRef0?.current,
          scrub: 3
        }
      });
      gsap.to(cardRef1?.current, {
        y: -1430,
        scrollTrigger: {
          trigger: cardRef1?.current,
          scrub: 3
        }
      });
      gsap.to(cardRef2?.current, {
        y: -1790,
        scrollTrigger: {
          trigger: cardRef2?.current,
          scrub: 3
        }
      });
      gsap.to(cardRef3?.current, {
        y: -1910,
        scrollTrigger: {
          trigger: cardRef3?.current,
          scrub: 3
        }
      });

      return () => {
        gsap.killTweensOf(cardRef0?.current);
        gsap.killTweensOf(cardRef1?.current);
        gsap.killTweensOf(cardRef2?.current);
        gsap.killTweensOf(cardRef3?.current);
      };
    }, []);
  }

  return (
    <Container>
      <GroupCards>
        <GroupCardsLeft>
          <Card ref={cardRef0} id="cardRef0">
            <h4>Envie mensagens em massa</h4>

            <p>
              Dispare envios automáticos em massa pelo seu WhatsApp utilizando
              uma plataforma que é parceira oficial.
            </p>
            <p>
              Divulgue as novidades sobre seus produtos, serviços, ofertas,
              eventos, dentre outros.
            </p>
          </Card>

          <Card ref={cardRef1} id="cardRef1">
            <h4>Automação na qualificação de novos clientes</h4>

            <p>
              Direcione novos clientes ao seu time de vendas ou registre no seu
              CRM para um contato futuro.
            </p>
            <p>
              Aplique uma estratégia de publicações em redes sociais para
              acelerar a captura de novos clientes pela plataforma.
            </p>
          </Card>
        </GroupCardsLeft>
        {/* <Texts ref={(el) => (textFixed = el)}>
          <h1>Atração</h1>
          <p>
            Qualifique novos clientes, acompanhe a sua marca nas mídias e se
            diferencie no mercado.
          </p>
        </Texts> */}
        <GroupCardsRight>
          <Card ref={cardRef2} id="cardRef2">
            <h4>Transforme curiosos em verdadeiros interessados</h4>

            <p>
              Inicie conversas automaticamente com clientes pelo bot assim que o
              usuário visitar o seu site ou quando realizar alguma ação.
            </p>
            <p>
              Indique produtos, desconto de boas-vindas ou direcione seu cliente
              para outros conteúdos dentro do site.
            </p>
          </Card>

          <Card ref={cardRef3} id="cardRef3">
            <h4>Acompanhe o seu mercado e identifique oportunidades</h4>

            <p>
              Entenda comportamentos, sentimentos e saiba quais são os termos
              mais comentados nas mídias sociais.
            </p>
            <p>
              Análise a concorrência, acesse relatórios avançados, obtenha novas
              ideias e gere diferenciação.
            </p>
            <p>
              Siga as reações e comentários e engaje nas tendências para motivar
              potenciais consumidores.
            </p>
          </Card>
        </GroupCardsRight>
      </GroupCards>
    </Container>
  );
}

export default Atracao;
