import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import YearMonth from "../components/YearMonth";

export default function Home() {
  

  return (
    <LinearGradient colors={["#67E2EA", "#0CDDEB"]} style={styles.background}>
      <View style={styles.topContainer}>
        <Text style = {{paddingTop: 40}}><YearMonth/></Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },
  topContainer: {
    width: "100%",
    height: 130,
    backgroundColor: "#B7E0E6",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
