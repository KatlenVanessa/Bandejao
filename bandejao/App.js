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
  const [matricula, setmatricula] = useState(null); // Novo estado para o matricula

  const handleLogin = (loginSuccessful, usermatricula) => {
    if (loginSuccessful) {
      setIsAuthenticated(true);
      setmatricula(usermatricula); // Defina o matricula aqui
    }
  };

  return isAuthenticated ? (
    <NavigationContainer>
      <CartProvider>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={TicketSelection}
            options={
              {
                headerShown: false,
              }
            }
          />
          <Tab.Screen
            name="Pedidos"
            component={() => <Carrinho matricula={matricula} />}
            options={
              {
                headerShown: false,
              }
            }
          />
          <Tab.Screen name="Perfil" component={() => <Perfil matricula={matricula} />} 
            options={
              {
                headerShown: false,
              }
            }
          />
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
