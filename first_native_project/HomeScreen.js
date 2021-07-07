import React from 'react';

import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>This is my Home Screen</Text>
            <Button
                title="Go to your Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    )
}

export default HomeScreen;