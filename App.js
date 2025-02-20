import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimeiroComponent, { SegundoComponente, TerceiroComponente } from "./Components/VariosComponents";
import Estilo from "./Components/Estilo"; 
import PrimeiroComponente, { SegundoComponent, TerceiroComponent } from "./Components/VariosComponents";


function App(){
  return(
    <SafeAreaView style={Estilo.container}>
      <Text style={Estilo.textoPadrao}> José Bezerra</Text>  
      <PrimeiroComponente />
      <SegundoComponente /> 
      <TerceiroComponente />
    </SafeAreaView>
  )
}
export default App