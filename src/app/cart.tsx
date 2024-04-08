import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import CartListItem from "../components/CartListItem";
import { useCart } from "../providers/CartProvider";

const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};
export default CartScreen;
const styles = StyleSheet.create({});
