import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Amenities = () => {
  const services = [
    {
      id: "0",
      name: "Room Service",
    },
    {
      id: "2",
      name: "Free WiFi",
    },
    {
      id: "3",
      name: "Family Rooms",
    },
    {
      id: "4",
      name: "Free Parking",
    },
    {
      id: "5",
      name: "Swimming Pool",
    },
    {
      id: "6",
      name: "Restaurant",
    },
    {
      id: "7",
      name: "Fitness Center",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Most Popular Facilities</Text>
      <View style={styles.servicesContainer}>
        {services.map((item, index) => (
          <View style={styles.serviceItem} key={index}>
            <Text style={styles.serviceText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  servicesContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  serviceItem: {
    margin: 8,
    backgroundColor: "#007FFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  serviceText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Amenities;
