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
  height: "100vh"
  },
  pt: {
    fontSize: "50",
    padding: "20px",
    color: "white",
  },
  pt2: {
    fontSize: "45",
    padding: "15px",
    color: "white",
  },
  pt3: {
    fontSize: "55",
    padding: "5px",
    color: "white",
  }
};

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/logoandtag.jpg"),
  markdown: require("../assets/markdown.png"),
  bawdoghouse: require("../assets/Drawing-Dog-House-Coloring-Pages.jpg"),
  bdp: require("../assets/black-diamond-plate-dark.jpg"),
  josie: require("../assets/josie.jpg"),
  keveren: require("../assets/keveren2.jpg"),
  scott: require("../assets/scott2.jpg"),
  doug: require("../assets/doug2.jpg"),
  select: require("../assets/relationship_selector.png"),
  relationship_info: require("../assets/relationship_info.png"),
  food: require("../assets/food.png"),
  bucketlist: require("../assets/bucketlist.png"),
  date_activity: require("../assets/date_activity.png"),
  random_date: require("../assets/random_date.png"),

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
        <Slide transition={["zoom"]} bgImage={images.bdp} bgColor="primary">
          <Image src={images.logo}  height="300px"/>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="tertiary">
          <div style={ styles.bg }>
            <Heading size={2} textColor="option1">Why Doghouse Dodger?</Heading>
            <Heading size={4} textColor="tertiary">Do these questions sound familiar?</Heading>
            <Text style={styles.pt}>Do you know what today is?</Text>
            <Text style={styles.pt}>What do you want to eat?</Text>
            <Text style={styles.pt}>"You don't remember when my birthday is?"</Text>
            <Text style={styles.pt}>"What's my favorite color?"</Text>
            <Text style={styles.pt}>"Do you remember when our first date was?"</Text>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="tertiary">
          <div style={ styles.bg }>
            <Heading size={2} textFont="primary" textColor="option1">What can Doghouse Dodger do?</Heading>
            <Text style={styles.pt2} >Tracks multiple relationships (Wife, Mom, etc.)</Text>
            <Text style={styles.pt2}>Record all personal information</Text>
            <Text style={styles.pt2}>Record restaurants, date activities, goals</Text>
            <Text style={styles.pt2}>Links to all restaurants, date activities, goals</Text>
            <Text style={styles.pt2}>Random Date Generator</Text>
          </div>
        </Slide>
        <Slide transition={["zoom"]} bgImage={images.bdp} bgColor="primary">
          <Heading size={2} textColor="option1">Select a Relationship</Heading>
          <Image src={images.select}  height="500px"/>
        </Slide>
        <Slide transition={["zoom"]} bgImage={images.bdp} bgColor="primary">
          <Heading size={2} textColor="option1">Relationship Info</Heading>
          <Image src={images.relationship_info}  height="500px"/>
        </Slide>
        <Slide transition={["zoom"]} bgImage={images.bdp} bgColor="primary">
          <Heading size={2} textColor="option1">Food/Restaurant</Heading>
          <Image src={images.food}  height="500px"/>
        </Slide>
        <Slide transition={["zoom"]} bgImage={images.bdp} bgColor="primary">
          <Heading size={2} textColor="option1">Date Activities</Heading>
          <Image src={images.date_activity}  height="500px"/>
        </Slide>
          <Slide transition={["zoom"]} bgImage={images.bdp} bgColor="primary">
          <Heading size={2} textColor="option1">Random Date Selector</Heading>
        <Image src={images.random_date}  height="500px"/>
        </Slide>
        <Slide  transition={["slide"]} bgImage={images.bdp} bgColor="tertiary">
          <div style={ styles.bg }>
          <Heading size={1} textFont="primary"  textColor="option1">Technologies used</Heading>
            <Text style={styles.pt3}>React</Text>
            <Text style={styles.pt3}>Redux</Text>
            <Text style={styles.pt3}>Ruby/Rails</Text>
            <Text style={styles.pt3}>HTML/CSS</Text>
            <Text style={styles.pt3}>Semantic-UI-React</Text>
            <Text style={styles.pt3}>JavaScript</Text>
            <Text style={styles.pt3}>PostgresQL</Text>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="tertiary">
          <div style={ styles.bg }>
            <Heading size={2} textFont="primary" textColor="option1">Challenges</Heading>
              <Text style={styles.pt}> Race Conditions</Text>
              <Text style={styles.pt}> Carrying relationship Ids through different components</Text>
              <Text style={styles.pt}> Breaking code when different team members merge</Text>
              <Text style={styles.pt}> Cross Browser/Platform Compatibility</Text>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bdp} bgColor="tertiary">
          <div style={ styles.bg }>
            <Heading size={2} textFont="primary" textColor="option1">Upcoming Features for Doghouse Dodger?</Heading>
            <Text style={styles.pt2} >Chat group</Text>
            <Text style={styles.pt2}>Text reminders of important dates</Text>
            <Text style={styles.pt2}>Integrate with Google Calendar</Text>
            <Text style={styles.pt2}>Emergency button </Text>
            <Text style={styles.pt2}>Gift tracker</Text>
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
                         <Image src={images.doug} margin="80px 20px 0px 0px" height="300px" />
                       </TableItem>
                       <TableItem>
                         <Image src={images.josie} margin="80px 20px 0px 20px" height="300px" />
                       </TableItem>
                       <TableItem>
                         <Image src={images.keveren} margin="80px 20px 0px 20px" height="300px" />
                       </TableItem>
                       <TableItem>
                         <Image src={images.scott} margin="80px 20px 0px 20px" height="300px" />
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
            <Quote textSize={200} textColor="primary">Happy Wife,</Quote><Quote textSize={200} textColor="option1"> Happy Life</Quote>
            <Cite textSize={75}> The Doghouse Dodger</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
