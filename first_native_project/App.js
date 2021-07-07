import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

// NavigationContainer-> manages our navigation tree 
import { NavigationContainer } from '@react-navigation/native';
// createStackNavigator -> Screen, Navigator
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

import globalStyles from './globalstyles';

const Stack = createStackNavigator();

/*

  <Route path="/profile" render={() =>
    <Profile user={this.state.user} />
  } />
*/

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "CaseyBook" }}/>
        <Stack.Screen name="Profile">
          { props => <ProfileScreen {...props} username="CRHarding" /> }
        </Stack.Screen>
      </Stack.Navigator>
      <View style={styles.container}>
        <Text>This is my first react-native application!</Text>
        <Image source={{ 
            uri: "https://www.androidauthority.com/wp-content/uploads/2016/09/react-native-logo.jpg"
          }}
          style={{ width: 200, height: 200 }}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'tomato',
            borderWidth: 5
          }}
          defaultValue="You can type in me"
        />
        <View style={styles.header}>
          <Text>This is a second area of text!</Text>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 15,
    fontColor: 'lemonchiffon',
  }
});
