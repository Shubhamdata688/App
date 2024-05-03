import React, {useState}from 'react';
import { View, StyleSheet, Text, TouchableOpacity ,Alert} from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import useRoute hook from React Navigation
import Vcolor from '../../global';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import WaterDropIcon from '../svg/WaterDrop';
import DateSelectorModal from '../Module/DatePicker';


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

  return (
    <View style={{ flex: 1, backgroundColor:Vcolor.liteprimary,justifyContent: 'center', alignItems: 'center' }}>
      <View style={{backgroundColor:'white',width:'100%',height:'100%',borderTopLeftRadius:20,borderTopRightRadius:20,paddingTop:10,paddingHorizontal:10}}>
        {/* data section */}
          <DateSelectorModal
            isVisible={isModalVisible}
            onClose={closeModal}
            onDateSelect={handleDateSelect}
          />

        {/* water hole specigic Main View  */}
        <View style={{width:'100%',height:'100%'}}>

          {/* date selection btn  */}

          <View style={{flexDirection:'row', width:'100%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{flex:2,color:Vcolor.darkprimary,fontWeight:500}}>Select Date :</Text>
            <TouchableOpacity
              onPress={() => { setSelectedDate('FromDate'); openModal(); }}
            >
              <Text style={{color:'white',borderWidth:2,borderColor:Vcolor.primary,borderRadius:50,padding:5,width:150,fontWeight:500,textAlign:'center',backgroundColor:Vcolor.liteprimary,elevation:20}}>
              {FromDate}
              </Text>
            </TouchableOpacity>

            <Text style={{flex:2,color:Vcolor.darkprimary,fontWeight:500,textAlign:'center'}}>To :</Text>

            <TouchableOpacity
              onPress={() => { setSelectedDate('ToDate'); openModal(); }}
            >
              <Text style={{color:'white',borderWidth:2,borderColor:Vcolor.primary,borderRadius:50,padding:5,width:150,fontWeight:500,textAlign:'center',backgroundColor:Vcolor.liteprimary,elevation:20}}>
              {ToDate}
              </Text>
            </TouchableOpacity>
          </View>
          
          {/* for water hole information  */}
          <View style={{ marginTop: 10, height: 75, justifyContent: 'center', alignItems: 'center',elevation:10 }}>
            <View style={{ width: '97%', height: '100%', borderWidth: 1, borderColor: Vcolor.liteprimary, flexDirection: 'row', borderRadius: 10, padding: 5, paddingHorizontal: 10 }}>

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
                  <FontAwesomeIcon name="map-marker" size={15} color="red" solid />
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
                  {/* view btn box  */}
                  <View style={{ width: 60, height: 20, borderWidth: 1, borderColor: Vcolor.primary, borderRadius: 20 }}>
                    <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'flex-end', flexDirection: 'row' }}
                     onPress={() => navigation.navigate('Details', { itemId: item.id })} // Pass item ID to Details screen
                    >
                      {/* view text  */}
                      <Text style={{ color: Vcolor.primary, fontSize: 12, fontWeight: 400, textAlign: 'center', textAlignVertical: 'center', height: '100%', flex: 1 }}>View</Text>
                      {/* reightarrow icon  */}
                      <View style={{ backgroundColor: Vcolor.primary, borderTopStartRadius: 20, borderTopEndRadius: 20, borderBottomEndRadius: 20, height: '100%', width: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesignIcon name="right" size={15} color="white" solid />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

        </View>
        <Text>Details Screen</Text>
      </View> 
    </View>
  );
};

export default DetailsViewScrFun;

