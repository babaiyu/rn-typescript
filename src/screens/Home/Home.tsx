import React from 'react';
import { Text, View, Button } from 'react-native';
import { Props } from './interface';
import styles from './styles';

// Screen Home
class Home extends React.PureComponent<Props, object> {

    moveAbout = () => {
        const { navigate } = this.props.navigation
        navigate('About')
    }
    
    // Main Render
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Button title="About" onPress={this.moveAbout} />
            </View>
        )
    }
}

export default Home;
