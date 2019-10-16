import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Screen About
export default class About extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text>About</Text>
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