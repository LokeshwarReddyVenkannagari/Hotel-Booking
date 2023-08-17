import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PropertyCard = ({
  rooms,
  adults,
  children,
  selectedDates,
  property,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Info", {
            name: property.name,
            rating: property.rating,
            oldPrice: property.oldPrice,
            newPrice: property.newPrice,
            photos: property.photos,
            availableRooms: property.rooms,
            adults: adults,
            children: children,
            rooms: rooms,
            selectedDates: selectedDates,
          })
        }
        style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
      >
        <View>
          <Image
            style={{ height: height / 3.5, width: width - 250 }}
            source={{ uri: property.image }}
          />
        </View>
        <View style={{ padding: 7 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 170 }}>{property.name}</Text>
            <AntDesign name="hearto" size={24} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              marginTop: 1,
            }}
          >
            <MaterialIcons name="stars" size={24} color="black" />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6CB4EE",
                paddingVertical: 2,
                borderRadius: 5,
                width: 100,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 14 }}
              >
                Genius Level
              </Text>
            </View>
          </View>
          <Text
            style={{
              width: 210,
              marginTop: 3,
              color: "gray",
              fontWeight: "bold",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>
          <Text style={{ marginTop: 2, fontSize: 15, fontWeight: "500" }}>
            Price for 1 Night {adults} adults
          </Text>
          <View
            style={{
              marginTop: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
            >
              {property.oldPrice * adults}
            </Text>
            <Text style={{ color: "black", fontSize: 16 }}>
              RS:{property.newPrice * adults}
            </Text>
          </View>
          <View style={{ marginTop: 3 }}>
            <Text style={{ fontSize: 16, color: "gray" }}>Delux Room</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              Hotel Room : 1bed
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#6082B6",
              paddingVertical: 2,
              borderRadius: 5,
              width: 150,
              paddingHorizontal: 3,
              marginTop: 1,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Limited Time deal
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
