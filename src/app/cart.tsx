import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import CartListItem from "../components/CartListItem";
import { useCart } from "../providers/CartProvider";

const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <Text style={styles.totalPriceText}>Total: ${total}</Text>
      <Button text="Checkout" />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};
export default CartScreen;
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  totalPriceText: {
    fontSize: 20,
    marginTop: 20,
    fontStyle: "italic",
  },
});
