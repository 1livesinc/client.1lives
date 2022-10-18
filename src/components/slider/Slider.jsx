import { useState } from "react";
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import styled from "styled-components";
import SlideData from '../../data/SlideData'
// import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

 
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 3;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  
  transform: translateX(${(props) => props.swipeSlide * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
 
  flex: 1;
  display:flex;
  align-items:center;
  position:relative;

  &:after{
    content:'';
    position:absolute;
    background-color:rgba(0, 0, 0, 0.4);
    top:0;
    bottom:0;
    left:0;
    right:0;

  }
 
`;

const Image = styled.img`
 width:100%;
  display:block;
`;

const InfoContainer = styled.div`
color:#fff;

width:100%;
padding:11rem;
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
z-index:2;
`;

const Title = styled.h1`
  font-size: 37px;
  text-align:center;
`;

const Desc = styled.div`
  margin: 50px 0px;
  font-size: 20px;
  text-align:center;
  font-weight: 500;
  letter-spacing: 3px;


  ul{

    li{
      list-style-type:none;
    }
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  color:white;
  background-color: green;
  font-weight:500;
  cursor: pointer;
`;

const Slider = () => {
  const [swipeSlide, setSwipeSlide] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSwipeSlide(swipeSlide > 0 ? swipeSlide-1 : 2);
    } else {
      setSwipeSlide(swipeSlide < 2 ? swipeSlide+1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <MdArrowLeft />
      </Arrow>
      <Wrapper swipeSlide={swipeSlide}>
        {SlideData.map((e) => (
          <Slide bg={e.bg} key={e.id}>
            <ImgContainer>
              <Image src={e.slideimage} />
              <InfoContainer>
              <Title>{e.title}</Title>
              <Desc>
                <ul>
                  <li>{e.desc.li1}</li>
                  <li>{e.desc.li2}</li>
                  <li>{e.desc.li3}</li>
                </ul>
                
              </Desc>
              <Button>Request A Quote</Button>
              </InfoContainer>
            </ImgContainer>
            
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <MdArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
