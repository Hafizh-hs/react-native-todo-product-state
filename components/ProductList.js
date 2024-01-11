import { FlatList } from "react-native";
import ProductItem from "./ProductItem";

export default function ProductList({ props }) {
  const { Products, setProducts } = props;
  return (
    <FlatList
      data={Products}
      renderItem={({ item }) => (
        <ProductItem props={{ item, Products, setProducts }} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
