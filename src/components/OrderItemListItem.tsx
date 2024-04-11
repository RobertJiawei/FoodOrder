import { Tables } from "@/database.types";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { defaultImageUri } from "./ProductListItem";
import RemoteImage from "./RemoteImage";

type OrderItemListItemProps = {
  item: { products: Tables<"products"> } & Tables<"order_items">;
};

const OrderItemListItem = ({ item }: OrderItemListItemProps) => {
  return (
    <View style={styles.container}>
      <RemoteImage
        path={item.products.image}
        fallback={defaultImageUri}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.productContainer}>
        <Text style={styles.title}>{item.products.name}</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.price}>${item.products.price}</Text>
          <Text>Size: {item.size}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>
    </View>
  );
};
export default OrderItemListItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  productContainer: {
    flex: 1,
  },
  detailContainer: {
    flexDirection: "row",
    gap: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 10,
    marginRight: 5,
  },
  image: {
    width: 75,
    aspectRatio: 1,
    alignSelf: "center",
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    marginTop: 5,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  quantity: {
    fontWeight: "500",
    fontSize: 18,
  },
});
