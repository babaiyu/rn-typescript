import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { Props, State } from './types';
import styles from './styles';

// Styles
const { container } = styles;

// Screen About
class About extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      nullArray: new Array(0)
    };
  }

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
    // const {
    //   getUser: { usersJSON, fetchingUser }
    // } = this.props;
    // const { nullArray } = this.state;
    return (
      <View style={container}>
        <Text>About</Text>
        <Button title="Home" onPress={this.moveHome} />
        {/* <FlatList
          data={fetchingUser ? nullArray : usersJSON}
          renderItem={this.renderItem}
        /> */}
      </View>
    );
  }
}

export default About;
