import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";

const CodeScreen = ({navigation}) => {
    return (
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
                marginLeft:20
            }}
            >


                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: "500",
                        color:"white"
                    }}
                >
                    ENTER 4 DIGIT CODE
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        color:"white"
                    }}
                >
                    Enter the 4 digit code that you recevied on{'\n'}your email
                </Text>

            </View>
            <View
                style={{
                    flexDirection: "row",
                    
                    
                }}
            >
            
                <TextInput
                    style={{
                        color: "#262b41",
                        backgroundColor: "#e6e8ef",
                    borderRadius: 10,
                    alignItems: "center",
                    marginTop: 50,
                    width: "15%",
                    height: "60%",
                    

                    }}
                >
                </TextInput>
                <TextInput
                    style={{
                        color: "#262b41",
                        backgroundColor: "#e6e8ef",
                    borderRadius: 10,
                    alignItems: "center",
                    marginTop: 50,
                    width: "15%",
                    height: "60%",
                    marginLeft:10

                    }}
                >
                </TextInput>
                <TextInput
                    style={{
                        color: "#262b41",
                        backgroundColor: "#e6e8ef",
                    borderRadius: 10,
                    alignItems: "center",
                    marginTop: 50,
                    width: "15%",
                    height: "60%",
                    marginLeft:10

                    }}
                >
                </TextInput>
                <TextInput
                    style={{
                        color: "#262b41",
                        backgroundColor: "#e6e8ef",
                    borderRadius: 10,
                    alignItems: "center",
                    marginTop: 50,
                    width: "15%",
                    height: "60%",
                    marginLeft:10

                    }}
                >
                </TextInput>
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('Credentals')}
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
                    fontSize:20
                }}
                >
                    CONTINUE
                </Text>

            </TouchableOpacity>

        </View>
    )
}
export default CodeScreen;