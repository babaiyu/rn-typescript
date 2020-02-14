import React, {useEffect, useState} from 'react';
import {Text, View, Button, FlatList, Alert} from 'react-native';
import {Props} from './types';
import styles from './styles';

// Styles
const {container} = styles;

// Screen About
const About = (props: Props) => {
  // Props
  const {isLoading, user} = props;

  // State
  const [loadFirst, setLoadFirst] = useState(true);

  // Local Function
  const localGetUser = () => {
    const {getUserAction} = props; // Destructing Assigment for more concise
    getUserAction().then((res: any) => {
      Alert.alert('Alert', JSON.stringify(res));
    });
    setLoadFirst(false);
  };

  // Function
  const moveHome = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };

  // Flatlist
  const renderItem = ({item, index}: any) => (
    <View key={index}>
      <Text>{item.name}</Text>
    </View>
  );
  const keyExtractor = (item: any, index: number) => index.toString();

  // As COMPONENTDIDMOUNT
  useEffect(() => {
    if (loadFirst) {
      localGetUser();
    }
  });

  // Main Render
  return (
    <View style={container}>
      <Text>About</Text>
      <Button title="Home" onPress={moveHome} />
      <FlatList
        keyExtractor={keyExtractor}
        data={user}
        renderItem={renderItem}
      />
      {isLoading ? <Text>Loading...</Text> : null}
    </View>
  );
};

export default About;
