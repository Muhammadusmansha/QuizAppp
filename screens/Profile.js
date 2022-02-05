import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

const LevelScreen = ({navigation}) => {
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Image
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute"

                }}
                source={require('../src/Img20.png')}
            />
            <Text
                style={{
                    fontSize: 42,
                    color: "white",
                    marginLeft: 20,
                    fontWeight: "600",
                    marginTop: 20
                }}
            >
                Let's Play
            </Text>
            <Text
                style={{
                    fontSize: 15,
                    fontWeight:"600",
                    color: "white",
                    marginLeft: 20
                }}
            >
                Be the Best!
            </Text>


            <TouchableOpacity
            onPress={() => navigation.navigate('Alques')}
                style={{
                    width: "90%",
                    height: "20%",
                    backgroundColor: "white",
                    borderRadius: 20,
                    marginLeft: 20,
                    marginTop: 30
                }}
            >
                <Image
                style={{
                    width: "60%",
                    height: "60%",
                    position: "absolute",
                    marginTop:30,
                    marginLeft:180

                }}
                source={require('../src/Img24.png')}
            />
                <Text
                    style={{
                        fontSize: 20,
                        color: "#f1087a",
                        marginLeft: 20,
                        marginTop: 20,
                        fontWeight: "500"
                    }}
                >
                Level 1
                </Text>
                <Text
                    style={{
                        fontSize: 32,
                        color: "#f1087a",
                        marginLeft: 20,
                        fontWeight: "600",
                    }}
                >
                    Basic
                </Text>


            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: "90%",
                    height: "20%",
                    backgroundColor: "white",
                    borderRadius: 20,
                    marginLeft: 20,
                    marginTop: 30
                }}
            >
                <Image
                style={{
                    width: "50%",
                    height: "50%",
                    position: "absolute",
                    marginTop:30,
                    marginLeft:190

                }}
                source={require('../src/Img25.png')}
            />
                <Text
                    style={{
                        fontSize: 20,
                        color: "#f1087a",
                        marginLeft: 20,
                        marginTop: 20,
                        fontWeight: "500"
                    }}
                >
                Level 2
                </Text>
                <Text
                    style={{
                        fontSize: 32,
                        color: "#f1087a",
                        marginLeft: 20,
                        fontWeight: "600",
                    }}
                >
                    Intermediate
                </Text>


            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: "90%",
                    height: "20%",
                    backgroundColor: "white",
                    borderRadius: 20,
                    marginLeft: 20,
                    marginTop: 30
                }}
            >
                <Image
                style={{
                    width: "60%",
                    height: "60%",
                    position: "absolute",
                    marginTop:30,
                    marginLeft:180

                }}
                source={require('../src/Img26.png')}
            />
                <Text
                    style={{
                        fontSize: 20,
                        color: "#f1087a",
                        marginLeft: 20,
                        marginTop: 20,
                        fontWeight: "500"
                    }}
                >
                Level 3
                </Text>
                <Text
                    style={{
                        fontSize: 32,
                        color: "#f1087a",
                        marginLeft: 20,
                        fontWeight: "600",
                    }}
                >
                    Advanced
                </Text>


            </TouchableOpacity>




        </View>

    );
}
export default LevelScreen;