import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! My name is <br />
        Theophilus Tena Gopregha
      </SectionTitle>
      <SectionText>
        I specialize in designing and developing user interfaces and digital
        products. The fine blend of design and development is where I excel.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Hire me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
