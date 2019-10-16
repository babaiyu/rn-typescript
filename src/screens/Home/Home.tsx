import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Props } from './interface';

// Screen Home
export default class Home extends React.PureComponent<Props, object> {

    moveAbout = () => {
        const { navigate } = this.props.navigation
        navigate('About')
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Button title="About" onPress={this.moveAbout} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})