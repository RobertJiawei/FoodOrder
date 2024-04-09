import Colors from "@/src/constants/Colors";
import { Link, useSegments } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { Product } from "../types";

export const defaultImageUri =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png";

type ProductListItemProps = {
  product: Product;
};

type Segments = "(admin)" | "(user)";

const ProductListItem = ({ product }: ProductListItemProps) => {
  const segments = useSegments()[0] as Segments;
  return (
    <Link href={`/${segments}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultImageUri }}
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
