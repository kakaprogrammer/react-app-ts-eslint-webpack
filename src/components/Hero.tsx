import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
const HeroSection = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 1100px;
  overflow: hidden; //Khi chiều cao của box không đủ chứa text, thì text bị tràn sẽ được dấu đi.
  position: relative;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    bottom: 0;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: calc(100% - 100px);
  color: #fff;
  //background-color: yellow;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 0.8rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Arrow = styled(IoMdArrowForward)`
  margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const arrowButton = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background-color: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background-color: #cd853f;
    transform: scale(1.05);
  }
`;

const PreArrow = styled(IoArrowBack)`
  ${arrowButton}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButton}
`;

export type HeroItem = {
  title: string;
  price: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  path: string;
  label: string;
  alt: string;
};

export type HeroProps = {
  slides: HeroItem[];
};

const Hero: React.FC<HeroProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const preSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((item, index) => (
          <HeroSlide key={index}>
            {index === current && (
              <HeroSlider>
                <HeroImage src={item.image} alt={item.alt} />

                <HeroContent>
                  <h1>{item.title}</h1>
                  <p>{item.price}</p>
                  <Button
                    // css={`
                    //   max-width: 100px;
                    // `}
                    style={{ maxWidth: "160px" }}
                    primary={true}
                    to={item.path}
                  >
                    {item.label}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <PreArrow onClick={preSlide}/>
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
