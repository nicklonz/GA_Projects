import React from 'react';

import { View, Text } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>This is my Profile Screen</Text>
            <Text onPress={() => navigation.navigate("Home")}>GO HOME</Text>
        </View>
    )
}

export default ProfileScreen;