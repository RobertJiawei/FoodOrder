import { Stack } from "expo-router";

const Menustack = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Menu" }} />
    </Stack>
  );
};
export default Menustack;
