import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
import { Stack } from "expo-router";
import { FlatList } from "react-native";

const ListOrders = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Orders" }} />
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} key={item.id} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </>
  );
};

export default ListOrders;
