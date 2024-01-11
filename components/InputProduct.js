import { View, Text, Button, TextInput } from "react-native";
import { styles } from "../styles";

export default function InputProduct({ props }) {
  const { Products, setProducts, Product, setProduct } = props;
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 3, paddingRight: 10 }}>
          <Text style={styles.judul}>Produk</Text>
          <TextInput
            placeholder="Input Produk"
            style={styles.textInput}
            onChangeText={(value) => setProduct({ ...Product, name: value })}
            value={Product}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.judul}>Qty</Text>
          <TextInput
            placeholder="Input Qty"
            style={styles.textInput}
            onChangeText={(value) => setProduct({ ...Product, qty: value })}
            value={Product}
          />
        </View>
      </View>
      <View style={styles.containerButton}>
        <Button
          title="Tambah"
          onPress={() => {
            if (Product) {
              setProducts([
                ...Products,
                { id: +new Date(), name: Product.name, qty: Product.qty },
              ]);
              setProduct("");
            } else {
              alert("Product tidak boleh kosong");
            }
          }}
        />
      </View>
    </>
  );
}
