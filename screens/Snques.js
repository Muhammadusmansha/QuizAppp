import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";


const SnquesScreen =() =>{
  return(
    <View
    style={{
      flex:1,
    }}
    >
      <Image
            style={{
                width:"100%",
                height:"100%",
                position:"absolute"
                
            }}
            source={require('../src/Img20.png')}
            />
<View
style={{
  flexDirection:"row",
  backgroundColor:"#2d435b",
  width:"100%",
  height:"15%"
}}
>
  <Image 
  style={{
    width:30,
    height:30,
    marginLeft:20,
    marginTop:32
  }}
  source={require('../src/Im5.png') }
  />
  <Text
  style={{
    fontSize:22,
    fontWeight:"500",
    marginTop:35,
    marginLeft:20
  }}
  >
        Science And Nature
  </Text>
  <Image 
  style={{
    width:20,
    height:20,
    marginLeft:50,
    marginTop:43
  }}
  source={require('../src/Im8.png') }
  />
</View>

<View
style={{
  width:"100%",
  height:"20%",
  marginTop:60
}}
>
  <View
  style={{
    flexDirection:"row"
  }}
  >
  <Text
  style={{
    fontSize:18,
    marginLeft:20
  }}
  >
Quiz : 60
  </Text>
  <Text
  style={{
    fontSize:18,
    marginLeft:"48%"
  }}
  >
03:00 min
  </Text>
  </View>
  
  <View>
  <Image 
  style={{
width:"98%",
height:"8%",
marginLeft:10,


  }}
  source={require('../src/Im9.png')}
  />

  <Text
  style={{
    fontSize:17.5,
    marginLeft:20,
    marginTop:30,
  }}
  >
1. What space agency has decided to carry out first all-female spacewalk at the international space station (ISS)?
  </Text>
</View>
</View>
<TouchableOpacity
style={{
  flexDirection:"row",
  backgroundColor:"#cadae7",
  width:"90%",
  height:"8%",
  marginTop:15,
  marginLeft:20,
  borderRadius:50
}}
>  
<Text
 style={{
  borderRadius:50,
  backgroundColor:"#e9822e",
  width:40,
  height:40,
  marginLeft:5,
  marginTop:5,
  fontSize:30,
  fontWeight:"500",
  alignItems:"center"
}}
  >
    
  </Text>

  <Text
  style={{
    color:"black",
    marginTop:13,
    marginLeft:10,
    fontSize:17
  }}
  >
    Roscosmos
  </Text>

</TouchableOpacity>
<TouchableOpacity
style={{
  flexDirection:"row",
  backgroundColor:"#e9822e",
  width:"90%",
  height:"8%",
  marginTop:15,
  marginLeft:20,
  borderRadius:50
}}
>
<Text
  style={{
    color:"black",
    marginTop:13,
    marginLeft:55,
    fontSize:17
  }}
  >
    Nasa
  </Text>

<Text
 style={{
  borderRadius:50,
  backgroundColor:"#cadae7",
  width:40,
  height:40,
  marginLeft:180,
  marginTop:5,
  fontSize:30,
  fontWeight:"500",
  alignItems:"center"
}}
  >
    
  </Text>

  
</TouchableOpacity>
<TouchableOpacity
style={{
  flexDirection:"row",
  backgroundColor:"#cadae7",
  width:"90%",
  height:"8%",
  marginTop:15,
  marginLeft:20,
  borderRadius:50
}}
>  
<Text
 style={{
  borderRadius:50,
  backgroundColor:"#e9822e",
  width:40,
  height:40,
  marginLeft:5,
  marginTop:5,
  fontSize:30,
  fontWeight:"500",
  alignItems:"center"
}}
  >
    
  </Text>

  <Text
  style={{
    color:"black",
    marginTop:13,
    marginLeft:10,
    fontSize:17
  }}
  >
    ISRO
  </Text>

</TouchableOpacity>
<TouchableOpacity
style={{
  flexDirection:"row",
  backgroundColor:"#cadae7",
  width:"90%",
  height:"8%",
  marginTop:15,
  marginLeft:20,
  borderRadius:50
}}
>  
<Text
 style={{
  borderRadius:50,
  backgroundColor:"#e9822e",
  width:40,
  height:40,
  marginLeft:5,
  marginTop:5,
  fontSize:30,
  fontWeight:"500",
  alignItems:"center"
}}
  >
    
  </Text>

  <Text
  style={{
    color:"black",
    marginTop:13,
    marginLeft:10,
    fontSize:17
  }}
  >
    JAXA
  </Text>

</TouchableOpacity>

<TouchableOpacity
style={{
  flexDirection:"row",
  backgroundColor:"#e9822e",
  width:"90%",
  height:"7%",
  marginTop:40,
  marginLeft:20,
  borderRadius:12
}}
>
  <Text
  style={{
    fontSize:22,
    fontWeight:"500",
    marginTop:7,
    marginLeft:120,
    color:"white",
    
  }}
  >
    SUBMIT
  </Text>
  
</TouchableOpacity>






</View>
  );
}
export default SnquesScreen;
