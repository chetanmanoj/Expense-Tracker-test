import { StyleSheet, Text, View } from "react-native";
export default function YearMonth(){
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const m = new Date().getMonth();
      let month = months[m];
      const year = new Date().getFullYear();
      const YeMon = month +  " " + year.toString();
    return(
        <Text style = {styles.text}>{YeMon}</Text>
    )

}

const styles = StyleSheet.create({
    text: {
      fontSize:27,
      
    },
  });