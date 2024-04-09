import orders from "@/assets/data/orders";
import OrderItemListItem from "@/src/components/OrderItemListItem";
import OrderListItem from "@/src/components/OrderListItem";
import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

const OrderDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const order = orders.find((p) => p.id.toString() === id);
  if (!order) return <Text>Order not found</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order #${id}` }} />
      <OrderListItem order={order} />
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => (
          <OrderItemListItem item={item} key={item.id} />
        )}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </View>
  );
};
export default OrderDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
});
