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
    setTickets({ cafe: 0, almoco: 0, janta: 0 });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: 28 }, {color: "#597879"}]}>
        Escolha a quantidade de tickets:
      </Text>
      {Object.keys(tickets).map((type) => (
        <View key={type} style={styles.ticketContainer}>
          <View>
            <Text style={textStyles.label}>
              {type.charAt(0) + type.slice(1)}:
            </Text>
            <Text style={textStyles.label}>R$ {prices[type].toFixed(2)}</Text>
          </View>
          <View>
            <Button
              color={"#003249"}
              title="+"
              onPress={() => handleIncrement(type)}
            />
            <Button
              color={"#003249"}
              title="-"
              onPress={() => handleDecrement(type)}
            />
          </View>
          <View>
            <Text style={textStyles.label}>Quantidade: {tickets[type]}</Text>
          </View>
        </View>
      ))}
      <Text style={[textStyles.label, {color: "#000"}]}>Total: R$ {calculateTotal()}</Text>
      <Button color={"#003249"} title="Adicionar ao Pedido" onPress={addToCart} />
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
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#007ea7",
    borderRadius: 6,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

const textStyles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 10,
  },
});

export default TicketSelection;
