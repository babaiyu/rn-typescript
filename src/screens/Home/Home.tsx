import React from 'react';
import { Text, View, Button, ScrollView, Image } from 'react-native';
import { Props, State } from './types';
import styles from './styles';

const { container, img } = styles;

// Screen Home
class Home extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: 'Selamat Datang di Websiteku',
      user: 'ChatBot',
      timestamp: new Date().getTime()
    };
  }

  componentDidMount() {
    const { message, user } = this.state;
    this.actionSendMessage(user, message);
  }

  // Function
  moveAbout = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate('About');
  };

  // Action Local
  actionSendMessage = (user: string, message: string) => {
    const { sendMessage } = this.props; // Destruct Assigment the props
    const { timestamp } = this.state;

    sendMessage({ user, message, timestamp }); // Action from Redux
  };

  // Main Render
  render() {
    const {
      chat: { messages }
    } = this.props;
    return (
      <ScrollView>
        <View style={container}>
          <Image
            source={require('../../assets/img/punipun.jpg')}
            style={img}
            resizeMode="cover"
          />
          <Text>Home</Text>
          <Button title="About" onPress={this.moveAbout} />
          <Text>{JSON.stringify(messages)}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Home;
