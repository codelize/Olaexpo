import React, { useState } from 'react';
import { Image, SafeAreaView, View, Text, StatusBar, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { styles } from './style.js';

function App() {
  const [cep, setCep] = useState("");
  const [resultado, setResultado] = useState("");

  const ConsultarCep = async () => {
    Keyboard.dismiss();
    setResultado("");

    if (!/^\d{8}$/.test(cep)) {
      setResultado("CEP inválido");
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const { erro, logradouro, bairro, localidade, uf } = await response.json();

      setResultado(erro 
        ? "CEP não encontrado" 
        : `Endereço: ${logradouro}, ${bairro}, ${localidade} - ${uf}`
      );
    } catch {
      setResultado("Erro na consulta");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image 
        style={styles.img} 
        source={{ uri: "https://www.climba.com.br/blog/wp-content/uploads/2016/08/Mudan%C3%A7as-no-PAc-dos-Correios-Idealize-Tecnologia-1.png" }} 
      />
      <Text style={styles.titulo}>Consulta CEP</Text>

      <View style={styles.form}> 
        <TextInput 
          placeholder="Digite o CEP..." 
          style={styles.TextInput} 
          onChangeText={setCep}
          keyboardType="numeric"
          maxLength={8}
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
