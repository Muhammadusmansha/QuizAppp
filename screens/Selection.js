import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const SelectionScreen = ({navigation}) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#262b41",

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
                    marginLeft: 15,
                    marginTop: 40
                }}
            >
                <Text
                    style={{
                        fontSize: 35,
                        fontWeight: "500",
                        color: "white"
                    }}
                >
                    MAKE{"\n"}SELECTION
                </Text>
                <Text
                    style={{
                        fontSize: 15,
                        color: "white"
                    }}
                >
                    Select which contact detail should we use to{"\n"}reset your password?
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: "#f1f5f8",
                    width: "90%",
                    height: "20%",
                    marginTop: 20,
                    marginLeft: 15,
                    alignItems: "center"

                }}
            >
                <Image
                    style={{
                        width: "30%",
                        height: "30%"
                    }}
                    source={require('../src/Img13.png')}
                />
                <TouchableOpacity
                onPress={() => navigation.navigate('Code')}
                    style={{
                        width: "50%",
                        height: "100%",
                        justifyContent: "center"
                    }}
                >
                    <Text
                        style={{
                            color: "black"
                        }}
                    >
                        Via sms:
                    </Text>

                    <Text
                        style={{
                            color: "black",
                            fontSize: 20
                        }}
                    >
                        +923361185647
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: "#f1f5f8",
                    width: "90%",
                    height: "20%",
                    marginTop: 20,
                    marginLeft: 15,
                    alignItems: "center"

                }}
            >
                <Image
                    style={{
                        width: "30%",
                        height: "30%"
                    }}
                    source={require('../src/Img11.png')}
                />
                <TouchableOpacity
                onPress={() => navigation.navigate('Code')}
                    style={{
                        width: "60%",
                        height: "100%",
                        justifyContent: "center"
                    }}
                >
                    <Text
                        style={{
                            color: "black"
                        }}
                    >
                        Via email:
                    </Text>

                    <Text
                        style={{
                            color: "black",
                            fontSize: 20
                        }}
                    >
                        support@gmail.com
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
export default SelectionScreen;