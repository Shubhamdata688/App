import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Alert, Image, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import useRoute hook from React Navigation
import Vcolor from '../../global';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import WaterDropIcon from '../svg/WaterDrop';
import DateSelectorModal from '../Module/DatePicker';
import DetailsExcelView from '../DScreen/DetailsExcelView'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import { Dimensions } from "react-native";

import { TableView } from 'react-native-responsive-table';

const screenWidth = Dimensions.get("window").width;


const DetailsViewScrFun = () => {
  const route = useRoute(); // Use the useRoute hook to access navigation parameters
  const itemId = route.params?.itemId; // Get the itemId parameter from navigation

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [FromDate, setFromDate] = useState('');
  const [ToDate, setToDate] = useState('');

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleDateSelect = (date) => {
    // Determine which date picker was used and set the respective state
    if (selectedDate === 'FromDate') {
      setFromDate(date);
    } else if (selectedDate === 'ToDate') {
      if (FromDate < date) {
        setToDate(date);
      } else {
        alert('From Date should be less than To Date');
      }
    }
  };

  const GraphData = {
    labels: [
      " 1", " 2", " 3", " 4", " 5", " 6",
      " 7", " 8", " 9", " 10", " 11", " 12",
      " 13", " 14", " 15", " 16", " 17", " 18",
      " 19", " 20", " 21", " 22", " 23", " 24",
      " 25", " 26", " 27", " 28",
    ],
    datasets: [
      {
        data: [
          20, 45, 28, 80, 99, 43, 65, 30, 55, 75, 88, 22, 60, 45, 35, 70, 42,
          95, 33, 50, 25, 90, 40, 15, 75, 65, 80
        ],
        color: (opacity = 1) => 'white', // optional
        strokeWidth: 3 // optional
      }
    ],
    legend: ["Water Level Static"] // optional
  };

  const handleMapPress = () => {
    const latitude = 26.892606253280935; // Example latitude
    const longitude = 75.81535673412989; // Example longitude
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    Linking.openURL(mapUrl);
  };

  const DataTableHeader = [
    { name: "S.no.", reference_key: "no" },
    { name: "Name", reference_key: "name" },
    { name: "Age", reference_key: "age" },
    { name: "Email", reference_key: "email" },
    { name: "Phone", reference_key: "phone" },
    { name: "Address", reference_key: "address" },
    { name: "City", reference_key: "city" },
    { name: "State", reference_key: "state" },
    { name: "Country", reference_key: "country" },
    { name: "Department", reference_key: "department" },
  ];

  const DataTableData = [
    { no: 1, name: "John", age: 25, email: "john@example.com", phone: "123-456-7890", address: "123 Main St", city: "New York", state: "NY", country: "USA", department: "Engineering" },
    { no: 2, name: "Snow", age: 23, email: "snow@example.com", phone: "987-654-3210", address: "456 Elm St", city: "Los Angeles", state: "CA", country: "USA", department: "Marketing" },
    // Add more rows as needed
  ];


  return (
    <View style={{ flex: 1, backgroundColor: Vcolor.liteprimary, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingTop: 10, paddingHorizontal: 10 }}>
        {/* data section */}
        <DateSelectorModal
          isVisible={isModalVisible}
          onClose={closeModal}
          onDateSelect={handleDateSelect}
        />

        {/* water hole specigic Main View  */}
        <ScrollView style={{ flex: 1, }}>

          {/* date selection btn  */}

          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: Vcolor.darkprimary, fontWeight: 500 }}>Select Date :</Text>
            <TouchableOpacity
              onPress={() => { setSelectedDate('FromDate'); openModal(); }}
            >
              <Text style={{ color: 'white', borderWidth: 2, borderColor: Vcolor.primary, borderRadius: 50, padding: 5, width: 110, fontWeight: 500, textAlign: 'center', backgroundColor: Vcolor.liteprimary, elevation: 2 }}>
                {FromDate}
              </Text>
            </TouchableOpacity>

            <Text style={{ color: Vcolor.darkprimary, fontWeight: 500, textAlign: 'center' }}>To :</Text>

            <TouchableOpacity
              onPress={() => { setSelectedDate('ToDate'); openModal(); }}
            >
              <Text style={{ color: 'white', borderWidth: 2, borderColor: Vcolor.primary, borderRadius: 50, padding: 5, width: 110, fontWeight: 500, textAlign: 'center', backgroundColor: Vcolor.liteprimary, elevation: 2 }}>
                {ToDate}
              </Text>
            </TouchableOpacity>
          </View>


          {/* for water hole information  */}
          <View style={{ height: 300, marginTop: 20, justifyContent: 'center', alignItems: 'center', elevation: 10 }}>
            <View style={{ width: '97%', height: '100%', borderWidth: 1, borderColor: Vcolor.liteprimary, borderRadius: 10, padding: 5, paddingHorizontal: 10 }}>
              <View style={{ width: '100%', flexDirection: 'row', }}>
                {/* water hole id or name and addresssection  */}
                <View style={{ flex: 6, justifyContent: 'space-around', alignItems: 'flex-start' }}>
                  {/* water hole  name or parrent name section  */}
                  <View style={{ flexDirection: 'row' }}>
                    {/* water hole id  */}
                    <View style={{ flexDirection: 'row', marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 14, color: Vcolor.darkprimary, marginEnd: 5 }}>WH0002</Text>
                      <FontAwesomeIcon name="feed" size={15} color="green" solid />
                    </View>

                    {/* water hole parrent id  */}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 14, color: Vcolor.darkprimary, marginEnd: 5 }}>Host: WHM001</Text>
                      <FontAwesomeIcon name="podcast" size={15} color="green" solid />
                    </View>

                  </View>

                  {/* water hole address section  */}
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesomeIcon name="map-marker" size={25} color="red" solid />
                    <Text style={{ marginLeft: 5, color: Vcolor.darkprimary }}>Nayala bag Zone 2</Text>
                  </View>
                </View>
                {/* water hole level section  */}
                <View style={{ flex: 2.5, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                  {/* for water drop level show icon svg  */}
                  <View>
                    <WaterDropIcon width={50} height={50} levelfrom={2} />
                  </View>

                  {/* for presentage level section  */}
                  <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>

                    {/* for level presentage  */}
                    <View style={{ marginRight: 5, marginBottom: 10 }}>
                      <Text style={{ color: 'red' }}>10 %</Text>
                    </View>
                    {/* for View more btn  */}
                  </View>
                </View>
              </View>


              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

                {/* lat long  */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <FontAwesomeIcon name="map-marker" size={25} color="red" solid />
                  <Text style={{ marginLeft: 5, color: Vcolor.darkprimary }}>Lat : { }, Long : { }</Text>
                </View>

                {/* go through map   */}
                <View style={{ flex: 1, height: 30, borderWidth: 1, borderColor: Vcolor.primary, borderRadius: 20, maxWidth: 200 }}>
                  <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'flex-end', flexDirection: 'row' }}
                    onPress={handleMapPress} // Pass item ID to Details screen
                  >
                    {/* view text  */}
                    <Text style={{ color: Vcolor.primary, fontSize: 12, fontWeight: 400, textAlign: 'center', textAlignVertical: 'center', height: '100%', flex: 1 }}>Show on map</Text>
                    {/* reightarrow icon  */}
                    <View style={{ backgroundColor: Vcolor.primary, borderTopStartRadius: 40, borderTopEndRadius: 40, borderBottomEndRadius: 40, height: '100%', width: 25, justifyContent: 'center', alignItems: 'center' }}>
                      <AntDesignIcon name="right" size={20} color="white" solid />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ flex: 1, borderBottomStartRadius: 10, borderBottomEndRadius: 10, marginTop: 20, overflow: 'hidden', elevation: 10 }}>
                {/* water hole image  */}
                <Image
                  source={require('../../assets/image/OWI2.jpg')}
                  style={{ height: '100%', width: '100%' }}
                  resizeMode="stretch"
                />
              </View>

            </View>
          </View>

          {/* water hole condition comments  */}
          <View style={{ justifyContent: 'center' }}>
            {/* comments level  */}
            <View style={{ padding: 5, backgroundColor: Vcolor.darkprimary, borderRadius: 20, marginVertical: 10 }}>
              <Text style={{ color: 'white', fontWeight: 500, fontSize: 14, textAlign: 'center', textAlignVertical: 'center' }}>Comments :</Text>
            </View>

            {/* need repair  */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 5 }}>

              <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <View>
                  <Text style={{ color: Vcolor.darkprimary, fontWeight: 500, fontSize: 14 }}>Need Repair :</Text>
                  <Text>Submitted by :</Text>
                  <Text>shubham</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                  <TouchableOpacity style={{ backgroundColor: 'red', width: 150, justifyContent: 'center', borderRadius: 20, padding: 5 }}><Text style={{ textAlign: 'center', fontWeight: 500, color: 'white' }}>Decline</Text></TouchableOpacity>
                  <TouchableOpacity style={{ backgroundColor: Vcolor.darkprimary, width: 150, justifyContent: 'center', borderRadius: 20, padding: 5 }}><Text style={{ textAlign: 'center', fontWeight: 500, color: 'white' }}>Approve</Text></TouchableOpacity>
                </View>
              </View>

              <View>
                <Image
                  source={require('../../assets/image/OWI.png')}
                  style={{ height: 150, width: 200, borderRadius: 10 }}
                  resizeMode="stretch"
                />
              </View>

            </View>
            {/* Last Cleaning Date  */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 5 }}>

              <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <View>
                  <Text style={{ color: Vcolor.darkprimary, fontWeight: 500, fontSize: 14 }}>Last Cleaning Date :</Text>
                  <Text>Submitted by :</Text>
                  <Text>shubham</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                  <TouchableOpacity style={{ backgroundColor: 'red', width: 150, justifyContent: 'center', borderRadius: 20, padding: 5 }}><Text style={{ textAlign: 'center', fontWeight: 500, color: 'white' }}>Decline</Text></TouchableOpacity>
                  <TouchableOpacity style={{ backgroundColor: Vcolor.darkprimary, width: 150, justifyContent: 'center', borderRadius: 20, padding: 5 }}><Text style={{ textAlign: 'center', fontWeight: 500, color: 'white' }}>Need For Cleaning</Text></TouchableOpacity>
                </View>
              </View>

              <View>
                <Image
                  source={require('../../assets/image/OWI.png')}
                  style={{ height: 150, width: 200, borderRadius: 10 }}
                  resizeMode="stretch"
                />
              </View>

            </View>
            {/* Last filling date  */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 5 }}>

              <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <View>
                  <Text style={{ color: Vcolor.darkprimary, fontWeight: 500, fontSize: 14 }}>Last filling Date :</Text>
                  <Text>Submitted by :</Text>
                  <Text>shubham</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                  <TouchableOpacity style={{ backgroundColor: 'red', width: 150, justifyContent: 'center', borderRadius: 20, padding: 5 }}><Text style={{ textAlign: 'center', fontWeight: 500, color: 'white' }}>Decline</Text></TouchableOpacity>
                  <TouchableOpacity style={{ backgroundColor: Vcolor.darkprimary, width: 150, justifyContent: 'center', borderRadius: 20, padding: 5 }}><Text style={{ textAlign: 'center', fontWeight: 500, color: 'white' }}>Need For Cleaning</Text></TouchableOpacity>
                </View>
              </View>

              <View>
                <Image
                  source={require('../../assets/image/OWI.png')}
                  style={{ height: 150, width: 200, borderRadius: 10 }}
                  resizeMode="stretch"
                />
              </View>

            </View>

          </View>

          {/* Water hole graph report  */}

          <LineChart
            data={GraphData}
            width={screenWidth - 20}
            height={256}
            verticalLabelRotation={-90}
            chartConfig={{
              backgroundColor: "red",
              backgroundGradientFrom: Vcolor.darkprimary,
              backgroundGradientTo: Vcolor.darkprimary,
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 0.6) => `rgba(255,255,255,${opacity})`,
              labelColor: (opacity = 1) => `white`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "4",
                strokeWidth: "1",
                stroke: 'red'
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />

          {/*  chart sheet for water hole data  */}
          <DetailsExcelView/>


        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#ffffff' 
  },
  head: { 
    height: 50, 
    backgroundColor: '#6F7BD9' 
  },
  text: { 
    textAlign: 'center', 
    fontWeight: '200' 
  },
  dataWrapper: { 
    marginTop: -1 
  },
  row: { 
    height: 40, 
    backgroundColor: '#F7F8FA' 
  }
});


export default DetailsViewScrFun;

