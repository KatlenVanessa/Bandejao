import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";

const Perfil = ({cpf}) => {
  const [userData, setUserData] = useState(null);
  

  useEffect(() => {
    // Função para buscar os dados do usuário no backend pelo CPF
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/perfil.php?cpf=${cpf}`
        );
        setUserData(response.data); // Supondo que o backend retorna os dados do usuário em um objeto
      } catch (error) {
        console.error("Erro na solicitação HTTP:", error);
      }
    };

    if (cpf) {
      fetchUserData();
    }
  }, [cpf]);

  return (
    <View style={styles.container}>
      {userData ? (
        <View>
          <Text style={styles.label}>Olá </Text>
          <Text style={styles.text}>{userData.nome}</Text>
          <Text style={styles.label}>Seus Dados </Text>
          <Text style={styles.label}>CPF:</Text>
          <Text style={styles.text}>{userData.cpf}</Text>
          <Text style={styles.label}>Tickets para Café:</Text>
          <Text style={styles.text}>{userData.cafe}</Text>
          <Text style={styles.label}>Tickets para Almoço:</Text>
          <Text style={styles.text}>{userData.almoco}</Text>
          <Text style={styles.label}>Tickets para Janta:</Text>
          <Text style={styles.text}>{userData.janta}</Text>
          {/* Outras informações do usuário */}
        </View>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
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
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default Perfil;
