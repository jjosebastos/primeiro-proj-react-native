import react from "react";
import { Text } from "react-native";


function PrimeiroComponente(){
    return (
        <Text> PrimeiroComponente </Text>
    )
}

function SegundoComponente(){
    return(
        <Text>
            Meu segundo Componente
        </Text>
    )
}  

function TerceiroComponente(){
    return(
        <Text>
            Meu terceiro Componente
        </Text>
    )

}

export {SegundoComponente,TerceiroComponente}  ;

export default PrimeiroComponente;
