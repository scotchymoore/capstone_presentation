// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  ComponentPlayground,
  Deck,
  Heading,
  ListItem,
  Image,
  List,
  Quote,
  Slide,
  Fill,
  Fit,
  Text,
  Table,
  TableHeaderItem,
  TableRow,
  TableItem,
  Layout,

} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";


// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const styles = {
  bg: {
  backgroundColor: "black",
  padding: "20px",
  }
};

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/logoandtag.jpg"),
  markdown: require("../assets/markdown.png"),
  bawdoghouse: require("../assets/Drawing-Dog-House-Coloring-Pages.jpg"),
  bdp: require("../assets/black-diamond-plate-dark.jpg"),
  josie: require("../assets/josie3.jpg"),
  keveren: require("../assets/keveren.png"),
  scott: require("../assets/scott.jpg"),
  doug: require("../assets/doug.jpg"),

};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "black",
  option1: "orange",
}, {
  primary: { name: "Bangers", googleFont: true },
  secondary: "Helvetica",
  option1: { name: "Bangers", googleFont: true }
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
        <Slide transition={["zoom"]} bgImage={images.bdp} bgColor="primary">
        <Image src={images.logo}  height="300px"/>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="tertiary">
          <div style={ styles.bg }>
          <Heading size={2} textColor="option1">Why Doghouse Dodger?</Heading>
          <Heading size={5} textColor="primary">Do these questions sound familiar?</Heading>
            <Appear><Text size={6} textColor="primary">Do you know what today is?</Text></Appear>
            <Appear><Text size={6} textColor="primary">What do you want to eat?</Text></Appear>
            <Appear><Text size={6} textColor="primary">"You don't remember when my birthday is?"</Text></Appear>
            <Appear><Text size={6} textColor="primary">"What's my favorite color?"</Text></Appear>
            <Appear><Text size={6} textColor="primary">"You don't remember when our first date was?"</Text></Appear>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="tertiary">
          <div style={ styles.bg }>
          <Heading size={3} textFont="primary" textColor="option1">What can Doghouse Dodger do?</Heading>
            <Appear><Text size={6} textColor="primary">Keep information secure with login</Text></Appear>
            <Appear><Text size={6} textColor="primary">Create multiple relationships</Text></Appear>
            <Appear><Text size={6} textColor="primary">Record all personal information</Text></Appear>
            <Appear><Text size={6} textColor="primary">Record restraunts, date activities, goals</Text></Appear>
            <Appear><Text size={6} textColor="primary">Links to all restraunts, date activities, goals</Text></Appear>
            <Appear><Text size={6} textColor="primary">Random Date Generator</Text></Appear>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="tertiary">
          <div style={ styles.bg }>
            <Heading size={3} textFont="primary" textColor="option1">Upcoming Features for Doghouse Dodger?</Heading>
              <Appear><Text size={6} textColor="primary">Chat group</Text></Appear>
              <Appear><Text size={6} textColor="primary">Text reminders a week out and day of important dates</Text></Appear>
              <Appear><Text size={6} textColor="primary">Intigrate important dates with Google Calendar</Text></Appear>
              <Appear><Text size={6} textColor="primary">Emergency button (Auto order flowers, chocolates, etc)</Text></Appear>
              <Appear><Text size={6} textColor="primary">Gift tracker</Text></Appear>
          </div>
        </Slide>
        <Slide  transition={["slide"]} bgImage={images.bdp} bgColor="tertiary">
          <div style={ styles.bg }>
          <Heading size={3} textFont="primary"  textColor="option1">Technologies used</Heading>
            <Text size={6} textColor="primary">React</Text>
            <Text size={6} textColor="primary">Redux</Text>
            <Text size={6} textColor="primary">Ruby/Rails</Text>
            <Text size={6} textColor="primary">HTML/CSS</Text>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="tertiary">
          <div style={ styles.bg }>
            <Heading size={3} textFont="primary" textColor="option1">Challenges</Heading>
              <Appear><Text size={6} textColor="primary">Routing</Text></Appear>
              <Appear><Text size={6} textColor="primary">Carrying relationship Ids through different components</Text></Appear>
              <Appear><Text size={6} textColor="primary">Breaking code when different team members merge</Text></Appear>
              <Appear><Text size={6} textColor="primary">Sticking to Agile/Scrum environment</Text></Appear>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="primary" textColor="tertiary">
        <Heading margin="20px" size={1} fit textColor="option1">
          The Doghouse Dodger Team
        </Heading>
             <Layout align="flex-start center">
               <Fill>
                 <Table margin="20px">
                   <TableRow>
                     <TableItem>
                       <Image src={images.doug} margin="80px 20px 0px 0px" height="200px"/>
                     </TableItem>
                     <TableItem>
                       <Image src={images.josie} margin="80px 20px 0px 20px" height="200px"/>
                     </TableItem>
                     <TableItem>
                       <Image src={images.keveren} margin="80px 20px 0px 20px" height="200px"/>
                     </TableItem>
                     <TableItem>
                       <Image src={images.scott} margin="80px 20px 0px 20px" height="200px"/>
                     </TableItem>
                   </TableRow>
                   <TableRow>
                     <TableItem>Doug</TableItem>
                     <TableItem>Josie</TableItem>
                     <TableItem>Keveren</TableItem>
                     <TableItem>Scott</TableItem>
                   </TableRow>
                 </Table>
               </Fill>
             </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textColor="primary">Happy Wife,</Quote><Quote textColor="option1"> Happy Life</Quote>
            <Cite>Author- The Doghouse Dodger</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
