import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";


const MainScreen = ({ navigation }) => {
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
            source={require('../src/Img20.png')}
            />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: "18%",
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity>
          <Image
            style={{
              width: 60,
              height: 60,
              marginLeft: 20,
              marginTop: 40
            }}
            source={require('../src/Im1.png')}
          />
        </TouchableOpacity>


        <Text
          style={{
            fontSize: 30,
            fontWeight: "500",
            marginTop: 45,
            marginLeft: 35,
            color:"#e9097e"
          }}
        >
          Quiz Vista
        </Text>

        <TouchableOpacity>
          <Image
            style={{
              width: 50,
              height: 50,
              marginLeft: 40,
              marginTop: 45
            }}
            source={require('../src/Im2.png')}
          />
        </TouchableOpacity>

      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
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
            alignItems: "center",
            color:"#e9097e"
          }}
        >
          <Text
          style={{
            color:"#e9097e"
          }}
          >
            Correct Answer
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "500",
              color:"#e9097e"
            }}
          >
            230
          </Text>
        </View>
        <Image
          style={{
            height: 65,
            width: 6,
            justifyContent: "center",
            marginLeft: 30
          }}
          source={require('../src/Im4.png')}
        />
        <View
          style={{
            marginLeft: 40,
            justifyContent: "center",
            alignItems: "center",
            color:"#e9097e"
          }}
        >
          <Text
          style={{
            color:"#e9097e"
          }}
          >
            Your Score
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "500",
              color:"#e9097e"
            }}
          >
            1250
          </Text>
        </View>

      </View>
      <TouchableOpacity
      onPress={() => navigation.navigate('Level')}
        style={{
          flexDirection: "row",
          backgroundColor: "white",
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
            marginLeft: 20,
            color:"#e9097e"
          }}
        >
          Graphics Designing
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
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
            marginLeft: 20,
            color:"#e9097e"
          }}
        >
          Web Development
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Snques')}
        style={{
          flexDirection: "row",
          backgroundColor: "white",
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
            marginLeft: 20,
            color:"#e9097e"
          }}
        >
          Android Development
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
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
            color:"#e9097e"

          }}
        >
          Digital Marketing
        </Text>


      </View>
      <TouchableOpacity
      onPress={() => navigation.navigate('Result')}
        style={{
          flexDirection: "row",
          backgroundColor: "white",
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
            color: "#e9097e",

          }}
        >
          UPGRADE
        </Text>

      </TouchableOpacity>



    </View>
  );
}
export default MainScreen;
