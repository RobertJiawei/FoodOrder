import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign Up" }} />
      <Text style={styles.text}>Email</Text>
      <TextInput
        placeholder="abc@email.com"
        style={styles.textInput}
        onChangeText={setEmail}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        placeholder="*********"
        style={styles.textInput}
        onChangeText={setPassword}
      />

      <Button text="Create account" />
      <Link href="/sign-in" style={styles.linkText}>
        Sign in
      </Link>
    </View>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  text: {
    color: "gray",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  linkText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
