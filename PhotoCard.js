import React from "react";
import {
  Image,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity
} from "react-native";
import { Card, CardItem, Left, Thumbnail, Body, Text } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

export default class PhotoCard extends React.Component {
  state = {
    liked: false,
    timer: null
  };

  like = () => {
    const now = new Date().getTime();

    if (this.state.timer && now - this.state.timer < 1000) {
      this.setState({ liked: !this.state.liked, timer: null });
    } else {
      this.setState({ timer: now });
    }
  };

  render() {
    return (
      <Card style={{ elevation: 3 }} key={this.props.idx}>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: this.props.avatar }} />
            <Body>
              <Text>{this.props.name}</Text>
              <Text note>{this.props.time}</Text>
            </Body>
          </Left>
        </CardItem>
        <TouchableWithoutFeedback onPress={() => this.like()}>
          <CardItem cardBody>
            <Image
              onPress={() => this.like()}
              style={{ height: 250, flex: 1 }}
              source={{ uri: this.props.avatar }}
            />
          </CardItem>
        </TouchableWithoutFeedback>
        <CardItem
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              onPress={() => this.like()}
              name="heart"
              style={
                this.state.liked
                  ? { color: "#ED4A6A", fontSize: 27 }
                  : { color: "#777b7e", fontSize: 27 }
              }
            />
            <Text
              style={
                this.state.liked
                  ? { color: "#ED4A6A", fontSize: 20, marginLeft: 5 }
                  : { color: "#777b7e", fontSize: 20, marginLeft: 5 }
              }
            >
              {+this.props.likes + (this.state.liked ? 1 : 0)}
            </Text>
          </View>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                onPress={() => this.like()}
                name="comment"
                style={{ color: "#777b7e", fontSize: 27 }}
              />
              <Text style={{ marginLeft: 10, fontSize: 20, color: "#777b7e" }}>
                Show comments
              </Text>
            </View>
          </TouchableOpacity>
        </CardItem>
      </Card>
    );
  }
}
