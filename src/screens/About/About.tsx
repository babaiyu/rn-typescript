import React from 'react';
import { Text, View, Button, FlatList, Alert } from 'react-native';
import { Props, State } from './types';
import styles from './styles';
import { awokAxios } from '../../services/apis';

// Styles
const { container } = styles;

// Screen About
class About extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      nullArray: []
    };
  }

  componentDidMount() {
    awokAxios()
      .then(res => {
        const person = res;
        // Alert.alert('Alert', person);
        this.setState({ nullArray: person });
      })
      .catch(err => {
        Alert.alert('Alert', err.message);
      });
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

  keyExtractor = (item: any, index: number) => index.toString();

  render() {
    const { nullArray } = this.state;
    return (
      <View style={container}>
        <Text>About</Text>
        <Button title="Home" onPress={this.moveHome} />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={nullArray}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default About;
