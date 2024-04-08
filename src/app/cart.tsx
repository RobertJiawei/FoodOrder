import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import CartListItem from "../components/CartListItem";
import { useCart } from "../providers/CartProvider";

const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <Text style={{ marginTop: 20, fontSize: 30, fontStyle: "italic" }}>
        Total: ${total}
      </Text>
      <Button text="Checkout" />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};
export default CartScreen;
const styles = StyleSheet.create({});
