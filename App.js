import React, { Image, SafeAreaView, View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style.js';
import { useState } from 'react';

function App() {
  const [cep, setCep] = useState("");
  const [resultado, setResultado] = useState("");

  async function ConsultarCep() {
    console.log(cep);

    const request = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
    const retorno = await request.json();

    setResultado("Endereço: " + retorno.logradouro);
    
    console.log(retorno);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Image 
        style={styles.img} 
        source={{ uri: "https://www.climba.com.br/blog/wp-content/uploads/2016/08/Mudan%C3%A7as-no-PAc-dos-Correios-Idealize-Tecnologia-1.png" }} 
      />
      <Text style={styles.titulo}>Consulta CEP</Text>

      <View style={styles.form}> 
        <TextInput 
          placeholder="Digite o CEP..." 
          style={styles.TextInput} 
          onChangeText={texto => setCep(texto)}
        /> 
        
        <TouchableOpacity style={styles.btn} onPress={ConsultarCep}> 
          <Text style={styles.btnText}>Consultar</Text> 
        </TouchableOpacity>     
      </View>

      <View style={styles.form}>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
