import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

const CreateAccountScreen = ({ navigation }) => {
    return (

        <View
            style={{
                flex: 1,
                alignItems: "center",
                backgroundColor:"black"
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
            <Text
            style={{
                fontSize:20,
                fontWeight:"600",
                color:"white",
                marginTop:60
            }}
            >
                Create New Account
            </Text>
           
            
                    <View
                    style={{
                        flexDirection: "row",
                        marginTop: 16,
                        borderStyle: "solid",
                        borderColor: "#2d435b",
                        borderWidth: 1,
                        borderRadius: 30,
                        width: "90%",
                        alignItems: "center",
                        backgroundColor: "white"
                    }}
                >
                    <Image
                        style={{
                            width: 30,
                            height: 40,
                            marginLeft: 20
                        }}
                        source={require('../src/Img17.png')}
                    />
                    <TextInput
                        style={{
                            color: "black",
                            fontWeight: "500",
                            marginLeft: 10,
                        }}
                    >

                        Your Name
                    </TextInput>

                </View>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 20,
                        borderStyle: "solid",
                        borderColor: "#2d435b",
                        borderWidth: 1,
                        borderRadius: 30,
                        width: "90%",
                        alignItems: "center",
                        backgroundColor: "white"
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
                        marginTop: 20,
                        borderStyle: "solid",
                        borderColor: "#2d435b",
                        borderWidth: 1,
                        borderRadius: 30,
                        width: "90%",
                        alignItems: "center",
                        backgroundColor: "white"
                    }}
                >
                    <Image
                        style={{
                            width: 30,
                            height: 40,
                            marginLeft: 20
                        }}
                        source={require('../src/Img15.png')}
                    />
                    <TextInput
                        style={{
                            color: "black",
                            fontWeight: "500",
                            marginLeft: 10
                        }}
                    >

                        Password
                    </TextInput>

                </View>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 20,
                        borderStyle: "solid",
                        borderColor: "#2d435b",
                        borderWidth: 1,
                        borderRadius: 30,
                        width: "90%",
                        alignItems: "center",
                        backgroundColor: "white"
                    }}
                >
                    <Image
                        style={{
                            width: 30,
                            height: 30,
                            marginLeft: 20
                        }}
                        source={require('../src/Img13.png')}
                    />
                    <TextInput
                        style={{
                            color: "black",
                            fontWeight: "500",
                            marginLeft: 10
                        }}
                    >

                        Enter your email
                    </TextInput>

                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: "70%",
                        height: "8%",
                        marginTop: 30,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: "#2d435b"
                        }}
                    >
                        Create Account
                    </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "white",
                            fontWeight:"600",
                            marginTop:110

                        }}
                    >
                        Or create account using social media
                    </Text>
                    <View
                    style={{
                    flexDirection:"row",
                    
                }}>
                        <TouchableOpacity
                        style={{
                            width:"25%",
                            height:"25%",
                        }}                    
                        >
                            <Image
                            style={{
                                width:"100%",
                                height:"100%",
                            }}
                            source={require('../src/Img21.png')}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{
                            width:"25%",
                            height:"25%",
                            marginLeft:-40
                        }}                    
                        >
                            <Image
                            style={{
                                width:"100%",
                                height:"100%",
                            }}
                            source={require('../src/Img22.png')}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{
                            width:"25%",
                            height:"25%",
                            marginLeft:-35
                        }}                    
                        >
                            <Image
                            style={{
                                width:"100%",
                                height:"100%",
                            }}
                            source={require('../src/Img23.png')}
                            />

                        </TouchableOpacity>
                        
                    </View>
                



            </View>
            


    );


}
export default CreateAccountScreen;