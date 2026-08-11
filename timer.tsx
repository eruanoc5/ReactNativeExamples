import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {

  return Contador();
}

function Contador() {
  const [segundos, setSegundos] = useState(0);

  const limite = 10; // límite configurable

  useEffect(() => {
    const id = setInterval(() => {
      setSegundos(valorActual => {
        if (valorActual >= limite) {
          clearInterval(id);
          return valorActual;
        }

        return valorActual + 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.numero}>
        {segundos} / {limite} segundos
      </Text>
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
