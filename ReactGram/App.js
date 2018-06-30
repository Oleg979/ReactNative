import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  Left,
  Body,
  Right,
  Text,
  Title,
  Button,
  Spinner,
  Footer,
  FooterTab,
  StyleProvider
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import PhotoCard from "./PhotoCard";
import getTheme from "./native-base-theme/components";
import commonColor from "./native-base-theme/variables/commonColor";

export default class App extends React.Component {
  state = {
    isReady: false,
    dialogs: [
      {
        name: "Карина Дементьева",
        avatar:
          "https://pp.userapi.com/c841527/v841527277/693cf/SXBar3EZdZo.jpg",
        text: "Lorem Ipsum dolor sir amet te omnis cezarus..",
        time: "3:43 pm",
        likes: "15"
      },
      {
        name: "Карина Дементьева",
        avatar:
          "https://pp.userapi.com/c841527/v841527277/693cf/SXBar3EZdZo.jpg",
        text: "Lorem Ipsum dolor sir amet te omnis cezarus..",
        time: "3:43 pm",
        likes: "15"
      },
      {
        name: "Карина Дементьева",
        avatar:
          "https://pp.userapi.com/c841527/v841527277/693cf/SXBar3EZdZo.jpg",
        text: "Lorem Ipsum dolor sir amet te omnis cezarus..",
        time: "3:43 pm",
        likes: "15"
      },
      {
        name: "Карина Дементьева",
        avatar:
          "https://pp.userapi.com/c841527/v841527277/693cf/SXBar3EZdZo.jpg",
        text: "Lorem Ipsum dolor sir amet te omnis cezarus..",
        time: "3:43 pm",
        likes: "15"
      },
      {
        name: "Карина Дементьева",
        avatar:
          "https://pp.userapi.com/c841527/v841527277/693cf/SXBar3EZdZo.jpg",
        text: "Lorem Ipsum dolor sir amet te omnis cezarus..",
        time: "3:43 pm",
        likes: "15"
      }
    ]
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady)
      return <Spinner color="blue" style={styles.spinner} />;
    else
      return (
        <StyleProvider style={getTheme(commonColor)}>
          <Container>
            <StatusBar hidden={true} />
            <Header noLeft>
              <Left>
                <Button transparent />
              </Left>
              <Body>
                <Title>My feed</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Text>New post</Text>
                </Button>
              </Right>
            </Header>
            <Content>
              <List>
                {this.state.dialogs.map((dialog, idx) => (
                  <PhotoCard {...dialog} key={idx} />
                ))}
              </List>
            </Content>
            <Footer>
              <FooterTab>
                <Button>
                  <Icon style={styles.activeIcon} name="th-large" />
                </Button>
                <Button>
                  <Icon style={styles.icon} name="user" />
                </Button>
                <Button>
                  <Icon style={styles.icon} name="camera" />
                </Button>
                <Button>
                  <Icon style={styles.icon} name="gears" />
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        </StyleProvider>
      );
  }
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: 22,
    color: "#fff"
  },
  activeIcon: {
    fontSize: 17,
    color: "#999da1"
  }
});
