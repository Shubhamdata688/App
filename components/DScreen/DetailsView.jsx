import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import useRoute hook from React Navigation


const DetailsViewScrFun = () => {
  const route = useRoute(); // Use the useRoute hook to access navigation parameters
  const itemId = route.params?.itemId; // Get the itemId parameter from navigation

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text> {/* Display the itemId parameter */}
    </View>
  );
};

export default DetailsViewScrFun;

