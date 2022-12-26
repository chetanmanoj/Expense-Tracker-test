import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function Calendar(){
    return(
        
        <LinearGradient colors ={['#67E2EA','#0CDDEB', ]} style = {styles.background}>
          
        </LinearGradient>
        
    )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      width:'100%',
      height:'100%',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });