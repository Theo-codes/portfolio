import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Design To Front-end
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experienced with <br />
          React.js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experienced with <br />
          Figma and Adobe Xd
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experienced with <br />
          React.js
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
