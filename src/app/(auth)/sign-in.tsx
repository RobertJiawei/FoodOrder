import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import { supabase } from "@/lib/supabase";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const signInWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign in" }} />
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

      <Button
        text={loading ? "Sign in..." : "Sign in"}
        onPress={signInWithEmail}
        disabled={loading}
      />
      <Link href="/sign-up" style={styles.linkText}>
        Create an account
      </Link>
    </View>
  );
};
export default SignInScreen;

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
