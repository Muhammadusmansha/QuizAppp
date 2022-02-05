import React from "react";
import { View,Text,TouchableOpacity,Image,TextInput } from "react-native";

const CredentialScreen=({navigation})=>{
return(
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
                    width: 130,
                    height: 130,
                    marginTop: 50

                }}
                source={require('../src/Img14.png')}
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
                    NEW{"\n"}CREDENTIALS
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 15,
                        color:"white"
                    }}
                >
                    Your identity has been Verified!{"\n"}set your new password
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
                        width: 30,
                        height: 30,
                        marginLeft: 10
                    }}
                    source={require('../src/Img15.png')}
                />
                <TextInput
                    style={{
                        color: "#262b41",
                        marginLeft: 15,
                        fontSize: 15

                    }}
                >
                    New Password
                </TextInput>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: "#e6e8ef",
                    borderRadius: 10,
                    alignItems: "center",
                    marginTop: 10,
                    width: "90%",
                    height: "9%"
                }}
            >
                <Image
                    style={{
                        width: 30,
                        height: 30,
                        marginLeft: 10
                    }}
                    source={require('../src/Img15.png')}
                />
                <TextInput
                    style={{
                        color: "#262b41",
                        marginLeft: 15,
                        fontSize: 15

                    }}
                >
                    Conform Password
                </TextInput>
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('Update')}
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
                    UPDATE
                </Text>

            </TouchableOpacity>

        </View>
)
}
export default CredentialScreen;