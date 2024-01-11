import { View, Text, Pressable } from "react-native";

import { Feather } from "@expo/vector-icons";
import { styles } from "../styles";

export default function ProductItem({ props }) {
  const { item, Products, setProducts } = props;
  return (
    <View style={styles.containerItem}>
      <View>
        <Text style={styles.textItem}>{item.name}</Text>
        <Text
          style={{
            fontSize: 15,
            padding: 10,
            color: "rgb(108, 117, 125)",
            fontWeight: "bold",
          }}
        >
          Qty : {item.qty}
        </Text>
      </View>
      <Pressable
        onPress={() => {
          setProducts(Products.filter((Product) => Product.id !== item.id));
        }}
      >
        <Feather
          style={{ paddingHorizontal: 10 }}
          name="trash-2"
          size={24}
          color="black"
        />
      </Pressable>
    </View>
  );
}
