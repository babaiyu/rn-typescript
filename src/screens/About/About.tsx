import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { Props } from './types';
import styles from './styles';

// Styles
const { container } = styles;

// Screen About
class About extends React.PureComponent<Props, object> {
  componentDidMount() {
    this.localGetUser();
  }

  // Local Function
  localGetUser = () => {
    const { getUserAction } = this.props; // Destructing Assigment for more concise
    getUserAction(); // Action from Redux
  };

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

  keyExtractor = (item: any, index: number) => index.toString();

  render() {
    const { isLoading, user } = this.props;
    return (
      <View style={container}>
        <Text>About</Text>
        <Button title="Home" onPress={this.moveHome} />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={user}
          renderItem={this.renderItem}
        />
        {isLoading ? <Text>Loading...</Text> : null}
      </View>
    );
  }
}

export default About;
