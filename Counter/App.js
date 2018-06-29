import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import {
  Container,
  Header,
  Body,
  Title,
  Text,
  Card,
  CardItem,
  Button,
  Content
} from "native-base";

export default class App extends React.Component {
  state = {
    count: 0,
    isReady: false
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isReady: true });
  }

  inc = () => this.setState({ count: this.state.count + 1 });
  dec = () => this.setState({ count: this.state.count - 1 });

  render() {
    if (!this.state.isReady) return <Expo.AppLoading />;
    else
      return (
        <Container>
          <StatusBar hidden={true} />
          <Header>
            <Body>
              <Title style={styles.title}>Counter</Title>
            </Body>
          </Header>
          <Content>
            <Card>
              <CardItem>
                <Body>
                  <Text style={styles.text}>
                    Number of clicks: {this.state.count}
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Button danger onPress={() => this.dec()}>
                  <Text>-</Text>
                </Button>
                <Text> </Text>
                <Button success onPress={() => this.inc()}>
                  <Text>+</Text>
                </Button>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
  }
}

const styles = StyleSheet.create({
  title: {
    color: "#fff"
  },
  header: {
    backgroundColor: "#2980b9"
  },
  text: {
    fontSize: 25
  }
});
