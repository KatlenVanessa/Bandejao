import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import UserCard from "./cardPerfil";

const Perfil = ({ matricula }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/perfil.php?matricula=${matricula}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Erro na solicitação HTTP:", error);
      }
    };

    const pollingInterval = setInterval(() => {
      fetchUserData();
    }, 1000);

    return () => clearInterval(pollingInterval);
  }, [matricula]);

  return (
    <View style={styles.container}>
      {userData ? (
        <UserCard 
          nome={userData.nome}
          cpf={userData.cpf}
          curso={userData.curso}
          matricula={userData.matricula}
          cafe={userData.cafe}
          almoco={userData.almoco}
          janta={userData.janta}
        />
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
});

export default Perfil;
