import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from "../styles/pages/home";

import primeiro from '../assets/camisetas/1.png';
import segundo from '../assets/camisetas/2.png';
import terceiro from '../assets/camisetas/3.png';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={primeiro} width={520} height={480} alt="" />
        
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={segundo} width={520} height={480} alt="" />
        
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={terceiro} width={520} height={480} alt="" />
        
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={terceiro} width={520} height={480} alt="" />
        
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
