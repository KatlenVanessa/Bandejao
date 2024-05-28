import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [matricula, setmatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    setLoading(true);
    axios
      .post("http://localhost:8000/login.php", { matricula, senha })
      .then((response) => {
        console.log("matriculaaaaaaaa", matricula)
        if (response.data.success) {
          onLogin(true, matricula);
          console.log(response.data.message);
        } else {
          onLogin(false, null);
          console.log(response.data.message);
          setMessage("Matricula ou Senha Inválidos");
        }
      })
      .catch((error) => {
        console.error("Erro na solicitação HTTP:", error);
        setMessage("Erro Interno");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bandejão</Text>
      </View>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Matricula"
          onChangeText={(text) => setmatricula(text)}
          value={matricula}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
        />
        <Button
          color={"007ea7"}
          title={loading ? "Entrando..." : "Entrar"}
          onPress={handleLogin}
          disabled={loading}
        />

        <View style={styles.message}>
          {message !== "" && <Text style={styles.message}>{message}</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#007ea7",
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 300,
    marginTop: 100,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    color: "#ffffff",
  },
  message: {
    paddingBottom: 5,
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
  },
  card: {
    width: "110%",
    backgroundColor: "#003249",
    padding: 50,
    borderStartStartRadius: 100,
    borderTopRightRadius: 100,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
