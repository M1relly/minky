import React from 'react'
import { View, ScrollView, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';


export default function TarefasScreen() {
  
  const[nomeTarefa,setNomeTarefa]=useState('')
  const[descricaoTarefa,setDescricaoTarefa]=useState('')
  const[listaTarefas,setListaTarefas]=useState([])
  

  useEffect(()=>{
    listarDados()
  },[])


  async function salvar(){
    let tarefas = [];
    if (await AsyncStorage.getItem("TAREFAS") !== null) {
      tarefas = JSON.parse(await AsyncStorage.getItem("TAREFAS"));
    }

    tarefas.push({nome: nomeTarefa, descricao: descricaoTarefa})

    await AsyncStorage.setItem("TAREFAS",JSON.stringify(tarefas))
    alert("Tarefa salva")
    setNomeTarefa('');
    setDescricaoTarefa('');

  }


  async function listarDados(){
    const t = await AsyncStorage.getItem("TAREFAS")
    setListaTarefas(JSON.parse(t))
  }


  async function deletarTarefa(index){
    const tempDados = listaTarefas;
    const dados = tempDados.filter((item,ind)=>{
      return ind!=index
    })
    setListaTarefas(dados)
    await AsyncStorage.setItem("TAREFAS",JSON.stringify(dados))
        listarDados()
  }
  


  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.tituloTarefas}>Lista de Tarefas</Text>

        <TextInput 
          placeholder='   digite o nome...'
          style={styles.input}
          value={nomeTarefa}
          onChangeText={(value)=>setNomeTarefa(value)}
        />

        <TextInput 
          placeholder='   digite a descrição...' 
          style={styles.input}
          value={descricaoTarefa}
          onChangeText={(value)=>setDescricaoTarefa(value)}
        />

        <View style={styles.containerBotoes}>
          <TouchableOpacity style={styles.botao} onPress={salvar}>
            <Text style={{color:'white'}}>adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={listarDados}>
            <Text style={{color:'white'}}>listar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
            data={listaTarefas}
            renderItem={({item,index})=>{

              return(
                <View style={styles.listaRetorno}>

                  <View style={styles.textosRetorno}>
                    <Text style={styles.nome}>Nome: {item.nome}</Text>
                    <Text style={styles.descricao}>Descrição: {item.descricao}</Text>                
                  </View>

                  <TouchableOpacity style={styles.botaoDeletar} onPress={()=>{deletarTarefa(index)}}>
                    <Text style={styles.textoDeletar}>x</Text>
                  </TouchableOpacity>   

                </View>
              )
            }}
        />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  
  container: {
    flex: 1,
    gap: 10,
    verticalAlign: 'middle',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerBotoes: {
    paddingHorizontal: 20, 
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', 
    marginTop: 10,
    alignItems: 'center'
  },

  tituloTarefas: {
    fontWeight: 400,
    lineHeight: 'normal',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Life Savers',
    fontSize: 30,
    fontStyle: 'normal',
  },

  input: {
    borderWidth: 1,
    height: 50,
    width: 300,
    borderRadius: 15,
  },

  botao: {
    borderWidth: 1,
    height: 42,
    flexShrink: 0,
    width: 130,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#C2858C',
    justifyContent: 'center',
    alignItems: 'center',
  },

  listaRetorno: {
    width: 300,
    borderWidth: 1,
    borderRadius: 15,
    height: 80,
    marginVertical: 5,
    padding: 10,
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    },

    textosRetorno: {
      flex: 1
    },

    nome: {
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'Life Savers',
      marginLeft: 10, 
      marginRight: 10,
    },

    descricao: {
      fontSize: 15,
      fontFamily: 'Life Savers',
      marginTop: 5,
      marginLeft: 10, 
      marginRight: 10,
    },

    botaoDeletar: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center', 
      backgroundColor: '#C2858C',
      borderRadius: 12,
      width: 30,
      alignSelf: 'flex-end',
      height: 25,
      padding: 5,
    },
    
    textoDeletar: {
      fontSize: 15,
      fontFamily: 'Life Savers',
      textAlignVertical: 'center',
    } 
});





