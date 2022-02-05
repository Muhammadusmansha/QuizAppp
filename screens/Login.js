import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

const LoginScreen = ({ navigation }) => {
    return (

        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
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

            <Image
                style={{
                    width: "80%",
                    height: "50%",
                    marginTop: -60,
                }}
                source={require('../src/Im10.png')} />
            <View
                style={{
                    width: "90%",
                    height: "65%",
                    marginTop: -60,
                    backgroundColor: "white",
                    borderRadius: 20,
                    alignItems: "center"
                }}
            >
                <Text
                    style={{
                        color: "#2d435b",
                        marginTop: 15,
                        fontSize: 15,
                        fontWeight: "400"



                    }}
                >
                    LOGIN WITH YOU ACCOUNT
                </Text>
                <Text
                    style={{
                        fontSize: 20,
                        color: "white",
                        color: "#2d435b"
                    }}
                >
                    ----------
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 5,
                        borderStyle: "solid",
                        borderColor: "#2d435b",
                        borderWidth: 1,
                        borderRadius: 30,
                        width: "90%",
                        alignItems: "center"
                    }}
                >
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            marginLeft: 20
                        }}
                        source={require('../src/Img11.png')}
                    />
                    <TextInput
                        style={{
                            color: "black",
                            fontWeight: "500",
                            marginLeft: 20
                        }}
                    >

                        Enter your email
                    </TextInput>

                </View>


                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 15,
                        borderStyle: "solid",
                        borderColor: "#2d435b",
                        borderWidth: 1,
                        borderRadius: 30,
                        width: "90%",
                        alignItems:"center"
                    }}
                >
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            marginLeft: 20
                        }}
                        source={require('../src/Img12.png')}
                    />

                    <TextInput
                        style={{
                            color: "black",
                            fontWeight: "500",
                            marginLeft:20
                        }}
                    >

                        Password
                    </TextInput>

                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Main')}
                    style={{
                        flexDirection: "row",
                        backgroundColor: "#2d435b",
                        width: "90%",
                        height: "15%",
                        marginTop: 30,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: "white"
                        }}
                    >
                        SIGN IN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Forget')}

                >
                    <Text
                        style={{
                            fontSize: 15,
                            color: "white",
                            color: "#2d435b",
                            marginTop: 110
                        }}
                    >
                        Forget password ?
                    </Text>
                </TouchableOpacity>
                



            </View>
        </View>


    );


}
export default LoginScreen;