import Button from "@/components/Button";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";
import { Link, Redirect } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

const index = () => {
  //return <Redirect href={"/sign-in"} />;
  const { session, loading, isAdmin } = useAuth();

  if (loading) return <ActivityIndicator />;

  if (!session) return <Redirect href={"/sign-in"} />;
  //if (!isAdmin) return <Redirect href={"/"} />;

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href={"/(user)"} asChild>
        <Button text="User" />
      </Link>
      <Link href={"/(admin)"} asChild>
        <Button text="Admin" />
      </Link>
      {!session && (
        <Link href={"/sign-in"} asChild>
          <Button text="Sign in" />
        </Link>
      )}
      <Button
        text="Sign out"
        onPress={async () => await supabase.auth.signOut()}
      />
    </View>
  );
};

export default index;
