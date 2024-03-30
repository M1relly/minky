import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';


export default function estatisticasScreen() {

  return (
    <View style={styles.containerEstatisticas}>

      <Text style={styles.tituloEstatisticas}>Estatisticas</Text>

      <Image
        style={styles.estatisticas}
        source={require('../../assets/estatisticas.png')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  containerEstatisticas: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#fff'
  },

  tituloEstatisticas: {
    color: '#000', 
    textAlign: 'center',
    fontFamily: "Life Savers",
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal'
  },

  estatisticas:{
    height: 400,
    width: 400
  }
});