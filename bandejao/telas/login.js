import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');


  const handleLogin = () => {
    setLoading(true);

    // Enviar solicitação de login para o servidor PHP
    axios
      .post("http://localhost:8000/login.php", { cpf, senha })
      .then((response) => {
        if (response.data.success) {
          // Login bem-sucedido, chame a função de retorno no pai
          onLogin(true, cpf); // Passar o CPF para o componente pai
          console.log(response.data.message);
        } else {
          // Login falhou, exiba uma mensagem de erro
          onLogin(false, null); // Passar null para o CPF em caso de falha
          console.log(response.data.message);
          setMessage("CPF ou Senha Inválidos")
        }
      })
      .catch((error) => {
        console.error("Erro na solicitação HTTP:", error);
        setMessage("Erro Interno")
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça login</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        onChangeText={(text) => setCpf(text)}
        value={cpf}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setSenha(text)}
        value={senha}
        secureTextEntry
      />
      <View style={styles.message}>
        {message !== "" && <Text style={styles.message}>{message}</Text>}
      </View>
      <Button
        title={loading ? "Entrando..." : "Entrar"}
        onPress={handleLogin}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  message: {
    paddingBottom: 5,
    fontSize: 16,
    color: "red",
    marginTop: 10,
  },
});

export default Login;