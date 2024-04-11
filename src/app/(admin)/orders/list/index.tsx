import { useAdminOrderList } from "@/app/api/orders";
import OrderListItem from "@/components/OrderListItem";
import { ActivityIndicator, FlatList, Text } from "react-native";

const ListOrders = () => {
  const {
    data: orders,
    isLoading,
    error,
  } = useAdminOrderList({ archived: false });

  if (isLoading) return <ActivityIndicator />;

  if (error) return <Text>Failed to fetch</Text>;

  return (
    <>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} key={item.id} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </>
  );
};

export default ListOrders;
