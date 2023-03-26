import { Button, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder={"Email"}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title={"Sign Up"}
        onPress={() => {}}
        color="#007AFF"
      />
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#F5FCFF',
      flex: 1,
      justifyContent: 'center',
    },
    input: {
      height: 40,
      marginBottom: 10,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#ccc',
    },
});
