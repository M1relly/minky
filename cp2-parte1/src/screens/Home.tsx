import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  function irTarefas() {
    navigation.navigate('Tarefas');
  }

  return (

    <View style={styles.container}>

      <Image
        style={styles.topRamo}
        source={require('../../assets/topRamo.png')}
      />

      <View style={styles.containerGeral}>
        <Text style={styles.bemvindo}>Bem-vindo(a)</Text>
        <Text style={styles.minky}>ao Minky</Text>

        <TouchableOpacity
          style={styles.iniciar}
          onPress={irTarefas}>
          <Text style={styles.textoIniciar}>Iniciar</Text>
        </TouchableOpacity>
      </View>

      <Image
        style={styles.bottomRamo}
        source={require('../../assets/bottomRamo.png')}
      />

      <View style={styles.containerInformacoes}>
        <Text style={styles.nome}>Mirelly R. Azevedo</Text>
        <Text style={styles.rm}>RM98672</Text> 
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerGeral: {
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center'
  },

  bemvindo: {
    width: 253,
    height: 51,
    flexShrink: 0,
    fontSize: 30,
    fontWeight: 400,
    color: '#000',
    textAlign: 'center',
    fontFamily: "Life Savers",
    fontStyle: 'normal',
    lineHeight: 'normal',
  },

  minky: {
    width: 253,
    height: 51,
    flexShrink: 0,
    fontSize: 30,
    fontWeight: 700,
    color: '#000',
    textAlign: 'center',
    fontFamily: "Life Savers",
    fontStyle: 'normal',
    lineHeight: 'normal'
  },

  iniciar: {
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    marginTop: 10,
    width: 194,
    height: 65,
    flexShrink: 1,
    borderRadius: 15,
    backgroundColor: '#c2858c',
  },

  textoIniciar: {
    flexShrink: 1,
    paddingTop: 10,
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    fontFamily: "Life Savers",
    fontStyle: 'normal',
    lineHeight: 'normal'
  },

  topRamo: {
    top: 0,
    left: 0,
    height: 175,
    width: 150,
    flexShrink: 1,
    position: 'absolute',
  },

  bottomRamo: {
    bottom: 0,
    right: 0,
    height: 175,
    width: 150,
    flexShrink: 1,
    position: 'absolute',
  },

  containerInformacoes: {
    bottom: 5,
    left: 2,
    paddingLeft: 10,
    paddingBottom: 10,
    position: 'absolute',
  },

  nome: {
    fontSize: 15,
    fontWeight: 400,
    color: '#000',
    fontFamily: 'Life Savers',
    fontStyle: 'normal',
    lineHeight: 'normal',
    marginLeft: 0
  },

  rm: {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 'normal',
    color: '#000',
    fontFamily: 'Life Savers',
    fontStyle: 'normal',
    marginLeft: 0
  },
});