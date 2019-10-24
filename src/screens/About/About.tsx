import React from 'react';
import { Text, View, Button } from 'react-native';
import { Props } from './types';
import styles from './styles';

// Styles
const { container } = styles;

// Screen About
class About extends React.PureComponent<Props, object> {
  moveHome = () => {
    const {
      navigation: { goBack }
    } = this.props;
    goBack();
  };

  render() {
    return (
      <View style={container}>
        <Text>About</Text>
        <Button title="Home" onPress={this.moveHome} />
      </View>
    );
  }
}

export default About;
