import { Text, View, StyleSheet, Image } from 'react-native';

export default function DownloadScrFun() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        DownloadReportFilter scr
      </Text>
    </View>
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
});