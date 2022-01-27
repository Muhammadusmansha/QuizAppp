import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";


const MainScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#262b41"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: "18%",
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
          backgroundColor: "#2d435b",
        }}
      >
        <TouchableOpacity>
          <Image
            style={{
              width: 30,
              height: 30,
              marginLeft: 20,
              marginTop: 50
            }}
            source={require('../src/Im1.png')}
          />
        </TouchableOpacity>


        <Text
          style={{
            fontSize: 30,
            fontWeight: "500",
            marginTop: 45,
            marginLeft: 65
          }}
        >
          Quiz App
        </Text>

        <TouchableOpacity>
          <Image
            style={{
              width: 50,
              height: 50,
              marginLeft: 50,
              marginTop: 45
            }}
            source={require('../src/Im2.png')}
          />
        </TouchableOpacity>

      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#e78230",
          width: "90%",
          height: "10%",
          marginTop: 40,
          marginLeft: 20,
          borderRadius: 10
        }}
      >
        <View
          style={{
            marginLeft: 30,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>
            Correct Answer
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "500"
            }}
          >
            230
          </Text>
        </View>
        <Image
          style={{
            height: 80,
            width: 3,
            justifyContent: "center",
            marginLeft: 40
          }}
          source={require('../src/Im4.png')}
        />
        <View
          style={{
            marginLeft: 30,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>
            Your Score
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "500"
            }}
          >
            1250
          </Text>
        </View>

      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#2d435b",
          width: "90%",
          height: "11%",
          marginTop: 15,
          marginLeft: 20,
          borderRadius: 10
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            marginLeft: 20,
            marginTop: 10
          }}
          source={require('../src/Im3.png')}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "500",
            marginTop: 16,
            marginLeft: 20
          }}
        >
          Art And Literature
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#2d435b",
          width: "90%",
          height: "11%",
          marginTop: 12,
          marginLeft: 20,
          borderRadius: 10
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            marginLeft: 20,
            marginTop: 10
          }}
          source={require('../src/Im6.png')}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "500",
            marginTop: 16,
            marginLeft: 20
          }}
        >
          General Knowledge
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Result')}
        style={{
          flexDirection: "row",
          backgroundColor: "#2d435b",
          width: "90%",
          height: "11%",
          marginTop: 12,
          marginLeft: 20,
          borderRadius: 10
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            marginLeft: 20,
            marginTop: 10
          }}
          source={require('../src/Im5.png')}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "500",
            marginTop: 16,
            marginLeft: 20
          }}
        >
          Science & Nature
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#2d435b",
          width: "90%",
          height: "11%",
          marginTop: 12,
          marginLeft: 20,
          borderRadius: 10
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            marginLeft: 20,
            marginTop: 10
          }}
          source={require('../src/Im7.png')}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "500",
            marginTop: 16,
            marginLeft: 20,

          }}
        >
          Technology
        </Text>


      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: "#cadae7",
          width: "90%",
          height: "9%",
          marginTop: 15,
          marginLeft: 20,
          borderRadius: 10
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "500",
            marginTop: 16,
            marginLeft: 110,
            color: "black",

          }}
        >
          UPGRADE
        </Text>

      </TouchableOpacity>



    </View>
  );
}
export default MainScreen;
