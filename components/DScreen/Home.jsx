import { FlatList, Text, View, StyleSheet, Image } from 'react-native';

export default function HomeScrFun() {
  const data = [
    { id: 1, name: "shubham1" },
    { id: 2, name: "shubham2" },
    { id: 3, name: "shubham3" },
    { id: 4, name: "shubham4" },
    { id: 5, name: "shubham5" },
    { id: 6, name: "shubham6" },
    { id: 7, name: "shubham7" },
    { id: 8, name: "shubham8" },
    { id: 9, name: "shubham9" },
    { id: 11, name: "shubham1" },
    { id: 12, name: "shubham2" },
    { id: 13, name: "shubham3" },
    { id: 14, name: "shubham4" },
    { id: 15, name: "shubham5" },
    { id: 16, name: "shubham6" },
    { id: 17, name: "shubham7" },
    { id: 18, name: "shubham8" },
    { id: 19, name: "shubham9" },
    { id: 110, name: "shubham10" }
  ];
  const sortedData = data.slice().sort((a, b) => a.name.localeCompare(b.name));
  return (
    <FlatList
      data={sortedData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
});
