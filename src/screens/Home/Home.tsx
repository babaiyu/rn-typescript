import React from 'react';
import { Text, View, Button } from 'react-native';
import { Props } from '../../util/interfaces';
import styles from './styles';

const { container } = styles;

// Screen Home
class Home extends React.PureComponent<Props, object> {
  moveAbout = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate('About');
  };

  // Main Render
  render() {
    return (
      <View style={container}>
        <Text>Home</Text>
        <Button title="About" onPress={this.moveAbout} />
      </View>
    );
  }
}

export default Home;
