import Button from "@/src/components/Button";
import { defaultImageUri } from "@/src/components/ProductListItem";
import Colors from "@/src/constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const validateInput = () => {
    setErrors("");
    if (!name) {
      setErrors("Name is required");
      return false;
    }
    if (!price) {
      setErrors("Price is required");
    }
    if (isNaN(parseFloat(price))) {
      setErrors("Price is not a number");
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    isUpdating ? onUpdate() : onCreate();
  };

  const onUpdate = () => {
    if (!validateInput()) return;
    resetFields();
  };

  const onCreate = () => {
    if (!validateInput()) return;
    resetFields();
  };

  const onDelete = () => {
    console.log("item delete");
  };

  const confirmDelete = () => {
    Alert.alert("Confirm", "Are you sure you want to delete this product", [
      {
        text: "Cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: onDelete,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: isUpdating ? "Update Product" : " Create Product" }}
      />
      <Image source={{ uri: image || defaultImageUri }} style={styles.image} />
      <Text style={styles.selectText} onPress={pickImage}>
        Select Image
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.errorsText}>{errors}</Text>
      <Button text={isUpdating ? "Update" : "Create"} onPress={onSubmit} />
      {isUpdating && (
        <Text onPress={confirmDelete} style={styles.deleteText}>
          Delete
        </Text>
      )}
    </View>
  );
};
export default CreateProductScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  errorsText: {
    color: "red",
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  selectText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
  deleteText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "red",
    marginVertical: 10,
  },
});
