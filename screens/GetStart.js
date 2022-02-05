import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

const GetStartScreen = ({ navigation }) => {
    return (

        <View
            style={{
                flex: 1,
                
            }}
        >
            <Image
            style={{
                width:"100%",
                height:"100%",
                position:"absolute"
                
            }}
            source={require('../src/Img19.png')}
            />

            <Text
            style={{
                color:"white",
                fontSize:30,
                fontWeight:"700",
                marginLeft:80,
                marginTop:60
            }}
            >
                Hi, Welcome To
            </Text>
            <Image
                style={{
                    width: "90%",
                    height: "45%",
                    marginTop: 5,
                    marginLeft:30
                }}
                source={require('../src/Img18.png')} />

            <View
            style={{
                marginTop: 10,
                marginLeft:15,
                alignItems:"center"
                
            }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{
                        backgroundColor: "white",
                        width: "50%",
                        height: "20%",
                        borderRadius: 30,
                        alignItems:"center",
                        justifyContent:"center"
                        
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: "#242a40",
                            fontWeight:"700"
                        }}
                    >
                        LOG IN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CreateAccount')}
                    style={{
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "50%",
                        height: "20%",
                        borderRadius: 30,
                        alignItems:"center",
                        justifyContent:"center",
                        marginTop:20
                    
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: "#242a40",
                            fontWeight:"700"
                        }}
                    >
                        SIGN UP
                    </Text>
                </TouchableOpacity>
            </View>
            <View
            style={{
                marginTop:-80,
                alignItems:"center"
            }}
            >
                <Text
                style={{
                    color:"#d3cdd1",
                    fontSize:13,
                }}
                >
                    from
                </Text>
                <TouchableOpacity
                
                >
                    <Text
                    style={{
                        color:"white",
                        fontSize:15,
                    }}
                    >
                    Pixxel House
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>


    );


}
export default GetStartScreen;