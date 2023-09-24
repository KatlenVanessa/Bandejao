import TicketSelection from "./telas/home";
import Carrinho from "./telas/carrinho";
import Perfil from "./telas/perfil";
import Login from "./telas/login";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (loginSuccessful) => {
    if (loginSuccessful) {
      setIsAuthenticated(true);
    }
  };

  return isAuthenticated ? (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TicketSelection} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    // Componente de login quando o usuário não está autenticado
    <Login onLogin={handleLogin} />
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
