import React from 'react';
import { Text, View, Button } from 'react-native';
import { Props, State } from './types';
import styles from './styles';

// Styles
const { container } = styles;

// Screen About
class About extends React.PureComponent<Props, State> {
  // Function
  moveHome = () => {
    const {
      navigation: { goBack }
    } = this.props;
    goBack();
  };

  // Flatlist
  renderItem = ({ item, index }: any) => (
    <View key={index}>
      <Text>{item.name}</Text>
    </View>
  );

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
