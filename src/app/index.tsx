import { Link, Redirect } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import Button from "../components/Button";
import { supabase } from "../lib/supabase";
import { useAuth } from "../providers/AuthProvider";

const index = () => {
  const { session, loading, isAdmin } = useAuth();

  if (loading) return <ActivityIndicator />;

  if (!session) return <Redirect href={"/sign-in"} />;

  if (!isAdmin) return <Redirect href={"/(user)"} />;

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href={"/(user)"} asChild>
        <Button text="User" />
      </Link>
      <Link href={"/(admin)"} asChild>
        <Button text="Admin" />
      </Link>
      <Link href={"/sign-in"} asChild>
        <Button text="Sign in" />
      </Link>
      <Button text="Sign out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
};

export default index;
