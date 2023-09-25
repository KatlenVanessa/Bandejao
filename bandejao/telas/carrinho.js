import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const CartScreen = ({ navigation, route }) => {
  const { cart, total } = route.params;

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const confirmPurchase = () => {
    setLoading(true);

    const data = {
      cart,
      total,
    };

    axios
      .post('http://localhost:8000/teste.php', data)
      .then((response) => {
        if (response.data.success) {
          console.log(response.data);
          setMessage('Compra realizada com sucesso!');
          navigation.navigate('Home');
        } else {
          console.log(response.data);
          setMessage('Erro ao processar a compra: ' + response.data.message);
        }
      })
      .catch((error) => {
        console.error('Erro na solicitação HTTP:', error);
        setMessage('Erro ao processar a compra. Tente novamente mais tarde.');
      
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrinho de Compras</Text>
      <View style={styles.cartItems}>
        {Object.keys(cart).map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Text>{item}: {cart[item]}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.total}>Total: R$ {total}</Text>
      <Button
        title={loading ? 'Processando...' : 'Confirmar Compra'}
        onPress={confirmPurchase}
        disabled={loading}
      />
      {message !== '' && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },
});
export default CartScreen;
