import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Vcolor from '../../global';

const tableHead = ['Node Name', 'Address', 'Date', 'Water Level', 'Capacity (in L)', 'Latitude', 'Longitude', 'Filling Status', 'Filling By', 'Cleaning Status', 'Cleaning By', 'Repair Status', 'Connected Id', 'Activity'];

const widthArr = [100, 150, 80, 100, 120, 100, 100, 100, 150, 120, 150, 120, 150, 100];

const data = [
  {
    'Node Name': 'Node 1',
    'Address': '123 Street, City',
    'Date': '2024-05-01',
    'Water Level': '50%',
    'Capacity (in L)': '1000',
    'Latitude': '12.345',
    'Longitude': '67.890',
    'Filling Status': 'Full',
    'Filling By': 'John Doe',
    'Cleaning Status': 'Cleaned',
    'Cleaning By': 'Jane Doe',
    'Repair Status': 'Functional',
    'Connected Id': '1234',
    'Activity': 'Regular Maintenance'
  },
  {
    'Node Name': 'Node 2',
    'Address': '456 Avenue, Town',
    'Date': '2024-05-02',
    'Water Level': '75%',
    'Capacity (in L)': '800',
    'Latitude': '23.456',
    'Longitude': '78.901',
    'Filling Status': 'Partially Full',
    'Filling By': 'Alice Smith',
    'Cleaning Status': 'Not Cleaned',
    'Cleaning By': '',
    'Repair Status': 'Needs Repair',
    'Connected Id': '5678',
    'Activity': 'Emergency Maintenance'
  },
  // Add more objects as needed
];

const DetailsExcelView = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderColor: '#C1C0B9' }}>
            <Row data={tableHead} widthArr={widthArr} style={styles.head} textStyle={styles.headerText} />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderColor: '#C1C0B9' }}>
              {data.map((dataRow, index) => (
                <Row
                  key={index}
                  data={tableHead.map(header => dataRow[header])}
                  widthArr={widthArr}
                  style={[styles.row, index % 2 && { backgroundColor: '#ffffff' }]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: Vcolor.darkprimary,
  },
  head: {
    height: 50,
    backgroundColor: Vcolor.darkprimary,
    padding: 1,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#ffffff',
  },
  text: {
    textAlign: 'center',
    fontWeight: '400',
    color: '#000000',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: Vcolor.darkprimary,
  },
});

export default DetailsExcelView;
