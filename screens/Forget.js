import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";

const ForgetpasScreen = ({navigation}) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#262b41",
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
                    width: 150,
                    height: 150,
                    marginTop: 50

                }}
                source={require('../src/Im7.png')}
            />
            <View>


                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "500",
                        color:"white"
                    }}
                >
                    FORGET{"\n"}PASSWORD
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 15,
                        color:"white"
                    }}
                >
                    Provide your's account email for which you want{"\n"}to reset your password!
                </Text>

            </View>
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: "#e6e8ef",
                    borderRadius: 10,
                    alignItems: "center",
                    marginTop: 50,
                    width: "90%",
                    height: "9%"
                }}
            >
                <Image
                    style={{
                        width: 20,
                        height: 20,
                        marginLeft: 10
                    }}
                    source={require('../src/Img11.png')}
                />
                <TextInput
                    style={{
                        color: "#262b41",
                        marginLeft: 15,
                        fontSize: 15

                    }}
                >
                    Email
                </TextInput>
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('Selection')}
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
                    NEXT
                </Text>

            </TouchableOpacity>

        </View>
    )
}
export default ForgetpasScreen;