import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";


const ResultScreen =() =>{
  return(
    <View
    style={{
      flex:1,
      backgroundColor:"#262b41"
    }}
    >
      <Image 
      style={{
        width:20,
        height:20,
        marginTop:30,
        marginLeft:310
      }}
      source={require('../src/Im8.png')}
      />
<View
style={{
  width:"85%",
  height:"60%",
  backgroundColor:"#cbdce6",
  marginLeft:28,
  marginTop:100,
  borderRadius:20
}}
>
  <Text
  style={{
    color:"black",
    fontSize:25,
    fontWeight:"500",
    marginLeft:"30%",
    marginTop:"30%"
  }}
  >
    Congrats!
  </Text>

  <Text
  style={{
    color:"green",
    fontSize:35,
    fontWeight:"700",
    marginLeft:"22%",
    marginTop:"3%"
  }}
  >
    90% Score
  </Text>

  <Text
  style={{
    color:"black",
    fontSize:18,
    fontWeight:"500",
    marginLeft:"11%",
    marginTop:"3%"
  }}
  >
    Quiz compeleted successfully.
  </Text>

  <Text
  style={{
    color:"black",
    fontSize:16,
    marginLeft:"14%",
    marginTop:"3%"
  }}
  >
    You attempt 60 questions and{"\n"}from that 55 answers is correct.
  </Text>


</View>


</View>
  );
}
export default ResultScreen;
