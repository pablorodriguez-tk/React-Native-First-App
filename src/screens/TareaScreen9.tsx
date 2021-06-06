import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen9 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    top: 100,
  },
  cajaNaranja: {
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    left: 100,
  },
  cajaAzul: {
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});
