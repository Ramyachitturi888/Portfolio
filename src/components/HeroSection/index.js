import React from "react";
import HeroImg from '../../images/HeroImage.png'
import { Bio } from '../../data/constants';
import HeroBgAnimation from '../HeroBgAnimation';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, SubTitle, ResumeButton } from './HeroStyle';

export const Herosection=()=>{
    return( <
        div id="about">
        <HeroContainer>
        <HeroBg>
        <HeroBgAnimation/>
        </HeroBg>
       <HeroInnerContainer>
       <HeroLeftContainer id="Left">
       <Title> Hi, I am <br/> {Bio.name}</Title>
       <TextLoop>
       <typewriter options={{
        strings:Bio.roles,
        autoStart:true,
        loop:true,
       }}
       />
       </TextLoop>
       <SubTitle>{Bio.description}</SubTitle>
       <ResumeButton href={Bio.resume} target='display'> Check Resume</ResumeButton>
       </HeroLeftContainer>
       <HeroRightContainer id="Right" >
       <Img src={HeroImg} alt="hero-image" />
       </HeroRightContainer>
       </HeroInnerContainer>
        </HeroContainer>
        </div>);

};

export default Herosection