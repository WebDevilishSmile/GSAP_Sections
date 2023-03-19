import { ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Atracao from "./components/Atracao";
import Vendas from "./components/Vendas";

import { Container, Texts } from "./styles";
import Atendimento from "./components/Atendimento";
import LealdadeSatisfacao from "./components/LealdadeSatisfacao";

interface CardsParallaxProps {
  children?: ReactNode;
}

function CardsParallax({}: CardsParallaxProps) {
  gsap.registerPlugin(ScrollTrigger);

  // Texts fixed
  let textFixed = useRef();
  let textFixed2 = useRef();
  let textFixed3 = useRef();
  let textFixed4 = useRef();

  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      gsap.to(textFixed.current, {
        scrollTrigger: {
          trigger: ".atracao",
          pin: true,
          start: "center 45%"
          // end: "bottom 0%",
        }
      });
      gsap.to(textFixed2.current, {
        scrollTrigger: {
          trigger: ".vendas",
          pin: true,
          start: "center 45%",
          end: "bottom 0%"
        }
      });
      gsap.to(textFixed3.current, {
        scrollTrigger: {
          trigger: ".atendimento",
          pin: true,
          start: "center 45%",
          end: "bottom -40%"
        }
      });
      gsap.to(textFixed4.current, {
        scrollTrigger: {
          trigger: ".lealdade-satisfacao",
          pin: true,
          start: "center 45%",
          end: "bottom 0%"
        }
      });

      return () => {
        gsap.killTweensOf(textFixed.current);
        gsap.killTweensOf(textFixed2.current);
        gsap.killTweensOf(textFixed3.current);
        gsap.killTweensOf(textFixed4.current);
      };
    }, []);
  }

  return (
    <Container id="atracao">
      <div className="atracao">
        <Texts ref={textFixed}>
          <h2>Atração</h2>
          <p>
            Qualifique novos clientes, acompanhe a sua marca nas mídias e se
            diferencie no mercado.
          </p>
        </Texts>
      </div>
      <Atracao />
      <div id="vendas" className="vendas">
        <Texts ref={textFixed2}>
          <h2>Vendas</h2>
          <p>
            Automatize sua operação, não perca oportunidades e escale mais suas
            vendas.
          </p>
        </Texts>
      </div>
      <Vendas />
      <div id="atendimento" className="atendimento">
        <Texts ref={textFixed3}>
          <h2>Atendimento</h2>
          <p>
            Esteja disponível para atender, interagir e solucionar quando o seu
            cliente precisar e onde ele estiver.
          </p>
        </Texts>
      </div>
      <Atendimento />
      <div id="lealdade-satisfacao" className="lealdade-satisfacao">
        <Texts ref={textFixed4}>
          <h2>Lealdadade e Satisfação</h2>
          <p>
            Acompanhe os comentários, escute os seus clientes e obtenha novas
            ideias para melhorar ainda mais a sua jornada.
          </p>
        </Texts>
      </div>
      <LealdadeSatisfacao />
    </Container>
  );
}

export default CardsParallax;
