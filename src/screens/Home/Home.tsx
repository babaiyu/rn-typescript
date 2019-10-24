import React from 'react';
import { Text, View, Button } from 'react-native';
import { Props, State } from './types';
import styles from './styles';

const { container } = styles;

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

  actionSendMessage = (user: string, message: string) => {
    const { sendMessage } = this.props;
    const { timestamp } = this.state;
    sendMessage({ user, message, timestamp });
  };

  // Main Render
  render() {
    const {
      chat: { messages }
    } = this.props;
    return (
      <View style={container}>
        <Text>Home</Text>
        <Button title="About" onPress={this.moveAbout} />
        <Text>{JSON.stringify(messages)}</Text>
      </View>
    );
  }
}

export default Home;
