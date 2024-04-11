import { useAdminOrderList } from "@/app/api/orders";
import OrderListItem from "@/components/OrderListItem";
import { ActivityIndicator, FlatList, Text } from "react-native";

const ListArchiveOrders = () => {
  const {
    data: orders,
    isLoading,
    error,
  } = useAdminOrderList({ archived: true });

  if (isLoading) return <ActivityIndicator />;

  if (error) return <Text>Failed to fetch</Text>;

  return (
    <>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} key={item.id} />}
        contentContainerStyle={{ gap: 10, padding: 5 }}
      />
    </>
  );
};

export default ListArchiveOrders;
