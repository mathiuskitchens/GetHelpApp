import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import * as React from "react";

export const HomeScreen = ({navigation}) => {

    const [text, setText] = useState("");

    const handleInputChange = (value) => {
      setText(value);
    };
  


  return (
    <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
          }}
        >
          Search for a passage
        </Text>
        <TextInput
          borderColor="black"
          placeholder="Type Something!"
          style={{
            padding: 10,
            fontSize: 20,
            borderWidth: 2,
            margin: 8,
          }}
          onChangeText={handleInputChange}
          value={text}
        />
        <Button
          color="#900788"
          title="Click!"
          onPress={() => {
            alert("You tapped a button!");
          }}
          style={{}}
          />
          <Button
              title="Go to Profile"
              onPress={() => {
                navigation.navigate('Profile', {name: 'Kourt'})
              }}
          />

        <StatusBar style="auto" />
      </View>
  )
}

const Profile = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

