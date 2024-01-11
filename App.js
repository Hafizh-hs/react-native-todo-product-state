import { useState } from "react";

import { View, SafeAreaView } from "react-native";

import ProductList from "./components/ProductList";
import InputProduct from "./components/InputProduct";

import { styles } from "./styles";

export default function App() {
  const [Products, setProducts] = useState([]);
  const [Product, setProduct] = useState({});

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <InputProduct props={{ Product, setProduct, Products, setProducts }} />
        <ProductList props={{ Products, setProducts }} />
      </View>
    </SafeAreaView>
  );
}
