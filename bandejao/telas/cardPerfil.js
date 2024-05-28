// UserCard.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const UserCard = ({ nome, cpf, curso, matricula, cafe, almoco, janta }) => {
  return (
    <ScrollView>
      <View>
        <Text style={[styles.label, {fontSize: 40}]}>Olá</Text>
        <Text style={[styles.text, {fontSize: 30}, {color: "#003249"}]}>{nome}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Seus Dados</Text>
        <Text style={styles.label}>CPF:</Text>
        <Text style={styles.text}>{cpf}</Text>
        <Text style={styles.label}>Curso:</Text>
        <Text style={styles.text}>{curso}</Text>
        <Text style={styles.label}>Matrícula:</Text>
        <Text style={styles.text}>{matricula}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Saldo do Restaurante Universitário</Text>
        <Text style={styles.label}>Tickets para Café:</Text>
        <Text style={styles.text}>{cafe}</Text>
        <Text style={styles.label}>Tickets para Almoço:</Text>
        <Text style={styles.text}>{almoco}</Text>
        <Text style={styles.label}>Tickets para Janta:</Text>
        <Text style={styles.text}>{janta}</Text>
      </View>

      <View>
        <Text style={[styles.label, {fontSize: 25}]}>Cartões Cadastrados</Text>
        <View style={[styles.card, {backgroundColor: "#E18451"}, {paddingBottom: 40}]}>
          <Text style={[styles.label, {color: "#fff"}]}>**** **** **** 3456</Text>
        </View>
      </View>
      <View>
        <View style={[styles.card, {backgroundColor: "#9400D3"}, {paddingBottom: 40}]}>
          <Text style={[styles.label, {color: "#fff"}]}>**** **** **** 4556</Text>
        </View>
      </View>
      <View>
        <View style={[styles.card, {backgroundColor: "#ff0000"}, {paddingBottom: 40}]}>
          <Text style={[styles.label, {color: "#fff"}]}>**** **** **** 6786</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#003249",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    paddingBottom: 0
  },
  label: {
    color: "#007ea7",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 16,
  },
});

export default UserCard;
