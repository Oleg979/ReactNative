import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Title,
  Button,
  Spinner
} from "native-base";

export default class App extends React.Component {
  state = {
    isReady: false,
    dialogs: [
      {
        name: "Карина Дементьева",
        avatar:
          "https://pp.userapi.com/c841325/v841325797/7e4cb/coM8-FMJNIM.jpg",
        text: "Lorem Ipsum dolor sir amet te omnis cezarus..",
        time: "3:43 pm"
      },
      {
        name: "Карина Дементьева",
        avatar:
          "https://pp.userapi.com/c841325/v841325797/7e4cb/coM8-FMJNIM.jpg",
        text: "Lorem Ipsum dolor sir amet te omnis cezarus..",
        time: "3:43 pm"
      },
      {
        name: "Карина Дементьева",
        avatar:
          "https://pp.userapi.com/c841325/v841325797/7e4cb/coM8-FMJNIM.jpg",
        text: "Lorem Ipsum dolor sir amet te omnis cezarus..",
        time: "3:43 pm"
      },
      {
        name: "Карина Дементьева",
        avatar:
          "https://pp.userapi.com/c841325/v841325797/7e4cb/coM8-FMJNIM.jpg",
        text: "Lorem Ipsum dolor sir amet te omnis cezarus..",
        time: "3:43 pm"
      },
      {
        name: "Карина Дементьева",
        avatar:
          "https://pp.userapi.com/c841325/v841325797/7e4cb/coM8-FMJNIM.jpg",
        text: "Lorem Ipsum dolor sir amet te omnis cezarus..",
        time: "3:43 pm"
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
        <Container>
          <StatusBar hidden={true} />
          <Header noLeft>
            <Left>
              <Button transparent />
            </Left>
            <Body>
              <Title>My messages</Title>
            </Body>
            <Right>
              <Button transparent>
                <Text>Logout</Text>
              </Button>
            </Right>
          </Header>
          <Content>
            <List>
              {this.state.dialogs.map((dialog, idx) => (
                <ListItem avatar key={idx}>
                  <Left>
                    <Thumbnail
                      source={{
                        uri: dialog.avatar
                      }}
                    />
                  </Left>
                  <Body>
                    <Text>{dialog.name}</Text>
                    <Text note>{dialog.text}</Text>
                  </Body>
                  <Right>
                    <Text note>{dialog.time}</Text>
                  </Right>
                </ListItem>
              ))}
            </List>
          </Content>
        </Container>
      );
  }
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
