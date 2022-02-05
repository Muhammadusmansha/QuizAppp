import React from "react";
import { View,Text, Image,TextInput,TouchableOpacity } from "react-native";

const UpdateScreen=({navigation})=>{
return(
    <View
            style={{
                flex: 1,
                backgroundColor: "#262b41",
                alignItems: "center",
                justifyContent:"center"
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
                alignItems: "center",

            }}
            >


                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "500",
                        color:"white"
                    }}
                >
                    PASSWORD{"\n"}UPDATED
                </Text>
                <Image
                style={{
                    width: 130,
                    height: 130,
                    marginTop: 10

                }}
                source={require('../src/Img16.png')}
            />
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 15,
                        color:"white"
                    }}
                >
                    Your password has been updated!
                </Text>

            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
                backgroundColor: "#e78230",
                    borderRadius: 5,
                    justifyContent: "center",
                    marginTop: 20,
                    width: "90%",
                    height: "8%",
                    alignItems:"center"
            }}
            >
                
                <Text
                style={{
                    color: "white",
                    fontSize:15
                }}
                >
                    LOGIN
                </Text>

            </TouchableOpacity>

        </View>
)
}
export default UpdateScreen;