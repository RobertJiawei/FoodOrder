import { useAuth } from "@/src/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { session } = useAuth();

  // if user is sign in, app will redirect to the home screen
  if (session) return <Redirect href={"/"} />;

  return <Stack />;
}
