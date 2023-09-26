import TicketSelection from "./telas/home";
import Carrinho from "./telas/carrinho";
import Perfil from "./telas/perfil";
import Login from "./telas/login";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from "./telas/CartContext";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cpf, setCpf] = useState(null); // Novo estado para o CPF

  const handleLogin = (loginSuccessful, userCpf) => {
    if (loginSuccessful) {
      setIsAuthenticated(true);
      setCpf(userCpf); // Defina o CPF aqui
    }
  };

  return isAuthenticated ? (
    <NavigationContainer>
      <CartProvider>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={TicketSelection}
          />
          <Tab.Screen name="Carrinho" component={() => <Carrinho cpf={cpf} />} />
          <Tab.Screen name="Perfil"  component={() => <Perfil cpf={cpf} />} />
        </Tab.Navigator>
      </CartProvider>
    </NavigationContainer>
  ) : (
    // Componente de login quando o usuário não está autenticado
    <CartProvider>
      <Login onLogin={handleLogin} />
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
