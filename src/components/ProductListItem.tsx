import Colors from "@/constants/Colors";
import { Tables } from "@/database.types";
import { Link, useSegments } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import RemoteImage from "./RemoteImage";

export const defaultImageUri =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png";

type ProductListItemProps = {
  product: Tables<"products">;
};

type Segments = "(admin)" | "(user)";

const ProductListItem = ({ product }: ProductListItemProps) => {
  const segments = useSegments()[0] as Segments;
  return (
    <Link href={`/${segments}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <RemoteImage
          fallback={defaultImageUri}
          path={product.image}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    maxWidth: "50%",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  price: {
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
