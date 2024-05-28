import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import axios from "axios";
import { useCart } from "./CartContext";

const CartScreen = ({ matricula }) => {
  const { cart, clearCart } = useCart(); // Acesse o contexto do carrinho
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Novo estado

  const confirmPurchase = () => {
    setLoading(true);

    const total = calculateTotal();

    const data = {
      cart,
      total,
      matricula,
    };

    axios
      .post("http://localhost:8000/carrinho.php", data)
      .then((response) => {
        console.log(response.data)
        if (response.data.success) {
          console.log(response.data.message);
          setMessage("Compra realizada com sucesso!");
          //navigation.navigate('Home');
          clearCart();
          setShowSuccessMessage(true);
        } else {
          console.log(response.data.message);
          setMessage("Erro ao processar a compra");
          clearCart();
          setShowSuccessMessage(true); // Exibir mensagem de sucesso
        }
      })
      .catch((error) => {
        console.error("Erro na solicitação HTTP:", error);
        setMessage("Erro ao processar a compra. Tente novamente mais tarde.");
        setShowSuccessMessage(true); // Exibir mensagem de sucesso
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const calculateTotal = () => {
    let total = 0;
    for (const type in cart) {
      const price = getPriceByType(type);
      total += cart[type] * price;
    }
    return total.toFixed(2); 
  };

  const getPriceByType = (type) => {
    const prices = {
      cafe: 0.75,
      almoco: 1.5,
      janta: 1.5,
    };
    return prices[type] || 0;
  };

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { fontSize: 28 }, { color: "#597879" }]}>
        Pedidos
      </Text>
      <View style={styles.cartItems}>
        {Object.keys(cart).map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Text style={styles.refeicao}>
              {item.charAt(0).toUpperCase() + item.slice(1)}: {cart[item]}
            </Text>
          </View>
        ))}
      </View>
      <Text style={styles.total}>Total: R$ {calculateTotal()}</Text>
      <Button
        color={"#003249"}
        title={loading ? "Processando..." : "Confirmar Compra"}
        onPress={confirmPurchase}
        disabled={loading}
      />
      {showSuccessMessage && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cartItems: {
    marginBottom: 20,
  },
  cartItem: {
    marginBottom: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#003249"
  },
  message: {
    fontSize: 16,
    color: "red",
    marginTop: 10,
  },
  label: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  refeicao: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#007ea7",
  },
});

export default CartScreen;
