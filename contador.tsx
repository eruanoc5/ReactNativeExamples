import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {

  const [contador, setContador] = useState(0);

  useEffect(() => {
    
    console.log("El contador cambió:", contador);

  }, [contador]);

  return (
    <View style={styles.container}>

      <Text style={styles.numero}>
        {contador}
      </Text>

      <Button
        title="Incrementar"
        onPress={() => setContador(contador + 1)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  numero: {
    fontSize: 40,
    marginBottom: 20,
  },
});
