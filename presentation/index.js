// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Segment,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  bawdoghouse: require("../assets/Drawing-Dog-House-Coloring-Pages.jpg"),
  bdp: require("../assets/black-diamond-plate.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  option1: "red",
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgImage={images.bawdoghouse} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="option1">
            Doghouse Dodger
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Taking care of the thought for a thoughtful man!
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="tertiary">
          <Heading size={2} textColor="option1">Why Doghouse Dodger?</Heading>
          <Heading size={5} textColor="primary">Do these questions sound familiar?</Heading>
            <Appear><Text size={6} textColor="primary">Do you know what today is?</Text></Appear>
            <Appear><Text size={6} textColor="primary">What do you want to eat?</Text></Appear>
            <Appear><Text size={6} textColor="primary">"You don't remember when my birthday is?"</Text></Appear>
            <Appear><Text size={6} textColor="primary">"What's my favorite color?"</Text></Appear>
            <Appear><Text size={6} textColor="primary">"You don't remember when our first date was?"</Text></Appear>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="tertiary">
          <Heading size={3} textColor="option1">What can Doghouse Dodger do?</Heading>
            <Appear><Text size={6} textColor="primary">Keep information secure with login</Text></Appear>
            <Appear><Text size={6} textColor="primary">Create multiple relationships</Text></Appear>
            <Appear><Text size={6} textColor="primary">Record all personal information</Text></Appear>
            <Appear><Text size={6} textColor="primary">Record restraunts, date activities, goals</Text></Appear>
            <Appear><Text size={6} textColor="primary">Links to all restraunts, date activities, goals</Text></Appear>
            <Appear><Text size={6} textColor="primary">Random Date Generator</Text></Appear>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="tertiary">
          <Heading size={3} textColor="option1">Technologies used</Heading>
            <Appear><Text size={6} textColor="primary">Tech 1</Text></Appear>
            <Appear><Text size={6} textColor="primary">Tech 2</Text></Appear>
            <Appear><Text size={6} textColor="primary">Tech 3</Text></Appear>
            <Appear><Text size={6} textColor="primary">Tech 4</Text></Appear>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="tertiary">
          <Heading size={3} textColor="option1">Obstacles Overcomed</Heading>
            <Appear><Text size={6} textColor="primary">Obstacle 1</Text></Appear>
            <Appear><Text size={6} textColor="primary">Obstacle 2</Text></Appear>
            <Appear><Text size={6} textColor="primary">Obstacle 3</Text></Appear>
            <Appear><Text size={6} textColor="primary">Obstacle 4</Text></Appear>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>Design Team</Heading>
          <Text size={6} textColor="primary">Team Photo</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
