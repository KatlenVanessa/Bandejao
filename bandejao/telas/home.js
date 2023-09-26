import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useCart } from "./CartContext";

const TicketSelection = () => {
  const { cart, setCart } = useCart();
  const [tickets, setTickets] = useState({
    cafe: 0,
    almoco: 0,
    janta: 0,
  });

  const prices = {
    cafe: 0.75,
    almoco: 1.5,
    janta: 1.5,
  };

  const handleIncrement = (type) => {
    setTickets({ ...tickets, [type]: tickets[type] + 1 });
  };

  const handleDecrement = (type) => {
    if (tickets[type] > 0) {
      setTickets({ ...tickets, [type]: tickets[type] - 1 });
    }
  };

  const calculateTotal = () => {
    let total = 0;
    for (const type in tickets) {
      total += tickets[type] * prices[type];
    }
    return total.toFixed(2);
  };

  const addToCart = () => {
    const updatedCart = { ...cart };
    for (const type in tickets) {
      updatedCart[type] += tickets[type];
    }
    setCart(updatedCart);

    // Limpe os tickets selecionados após adicioná-los ao carrinho
    setTickets({ cafe: 0, almoco: 0, janta: 0 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a quantidade de tickets:</Text>
      {Object.keys(tickets).map((type) => (
        <View key={type} style={styles.ticketContainer}>
          <Text>{type.charAt(0).toUpperCase() + type.slice(1)}:</Text>
          <Text>R$ {prices[type].toFixed(2)}</Text>
          <Text>Quantidade: {tickets[type]}</Text>
          <Button title="+" onPress={() => handleIncrement(type)} />
          <Button title="-" onPress={() => handleDecrement(type)} />
        </View>
      ))}
      <Text style={styles.total}>Total: R$ {calculateTotal()}</Text>
      <Button title="Adicionar ao Carrinho" onPress={addToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ticketContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default TicketSelection;
