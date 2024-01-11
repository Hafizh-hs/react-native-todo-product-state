import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Button,
  FlatList,
  Pressable,
} from "react-native";

import { Feather } from "@expo/vector-icons";

export default function App() {
  const [Products, setProducts] = useState([]); //menampung data lebih dari satu
  const [Product, setProduct] = useState(""); // menyimpan inputan user
  const [QtyProduct, setQtyProduct] = useState(""); // menyimpan inputan user

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <View>
            <Text style={styles.judul}>Input Product</Text>
            <TextInput
              placeholder="Input Product"
              style={styles.textInputProduct}
              onChangeText={(value) => setProduct(value)}
              value={Product}
            />
          </View>
          <View>
            <Text style={styles.judul}>Input QTY</Text>
            <TextInput
              placeholder="Input Qty"
              style={styles.textInputProduct}
              onChangeText={(value) => setQtyProduct(value)}
              value={QtyProduct}
            />
          </View>
        </View>
        <View style={styles.containerButton}>
          <Button
            title="Tambah"
            onPress={() => {
              setProducts([
                ...Products,
                { id: +new Date(), nama: Product, Qty: QtyProduct },
              ]);
              setProduct("");
              setQtyProduct("");
            }}
          />
        </View>
        <FlatList
          data={Products}
          renderItem={({ item }) => {
            return (
              <View style={styles.containerItem}>
                <View>
                  <Text style={styles.textItem}>{item.nama}</Text>
                  <Text
                    style={{
                      fontSize: 15,
                      padding: 10,
                      color: "rgb(108, 117, 125)",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Qty: {item.Qty}
                  </Text>
                </View>

                <Pressable
                  onPress={() => {
                    setProducts(
                      Products.filter((product) => product.id !== item.id)
                    );
                  }}
                >
                  <Feather name="trash-2" size={24} color="black" />
                </Pressable>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    padding: 10,
  },
  judul: {
    fontSize: 25,
  },
  textInputProduct: {
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 10,
  },
  containerButton: {
    marginTop: 10,
  },
  textItem: {
    fontSize: 20,
    marginVertical: 5,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  containerItem: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});
