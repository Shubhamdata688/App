import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';


import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Vcolor from '../../global';
import WaterDropIcon from '../svg/WaterDrop';

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
  const navigation = useNavigation();
  const [TodayDate, setTodayDate] = useState('Fri, Nov 13 2017')
  return (
    <>
      {/* header img  */}
      <View style={styles.HeaderContainer}>
        <Image
          source={require('../../assets/image/headerVector.png')}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>

      {/* for toget drower nav icon  */}
      <View style={{ flexDirection: 'row', marginStart: 20, marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
        >
          <FontAwesomeIcon name="xing" size={25} color="white" solid />
        </TouchableOpacity>
        <Text style={{ marginStart: 20, fontSize: 19, fontStyle: 'italic', fontWeight: 600, color: 'white' }}>W H M</Text>
      </View>

      {/* date filter row  */}
      <View style={{ marginTop: -15 }}>
        {/* this for well notification  */}
        <View style={{ alignItems: 'flex-end', marginEnd: 30, }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
          >
            <FontAwesomeIcon name="bell-o" size={20} color="white" solid />
          </TouchableOpacity>
        </View>

        {/* this is for search  */}
        <View style={{ flexDirection: 'row' ,justifyContent:'center',alignItems:'center',marginTop:15,}}>
          {/* left arrow  */}
          <View style={{width:'10%',alignItems:'flex-start'}}>
            <TouchableOpacity 
              style={{marginLeft:20}}
            >
              <AntDesignIcon name="arrowleft" size={20} color="white" solid />
            </TouchableOpacity>
          </View>

          {/* Date test  */}
          <View style={{justifyContent:'center',alignItems:'center',width:'80%'}}>
            <TouchableOpacity
              style={{ flexDirection: 'row' ,justifyContent:'center',alignItems: 'center'}}
            >
              {/* date icon  */}
              <View>
                <FontAwesomeIcon name="calendar" size={20} color="white" solid />
              </View>
              {/* date text  */}
              <View>
                <Text style={{color:'white',fontSize:16,marginLeft:10,fontWeight:500}}>{TodayDate}</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* right arrow  */}
          <View style={{width:'10%',alignItems:'flex-end'}}>
            <TouchableOpacity
              style={{marginRight:20}}
            >
              <AntDesignIcon name="arrowright" size={20} color="white" solid />
            </TouchableOpacity>
          </View>

        </View>
      </View>

      {/* sercher or filter row  */}
      <View style={{marginTop:45, marginHorizontal:10,flexDirection:'row',marginBottom:10,justifyContent:'center',alignItems:'center'}}>
        {/* search text  */}
        <Text style={{color:Vcolor.primary,fontSize:16,fontWeight:500}}>Search</Text>
        
        {/* search box  */}
        <View style={{width:'55%',height:30,borderWidth:1.2,borderColor:Vcolor.primary,marginLeft:20,borderRadius:50,flexDirection:'row', overflow:'hidden'}}>
          {/* search optical icon  */}
              <View style={{backgroundColor:Vcolor.primary,borderTopStartRadius:50,borderTopEndRadius:50,borderBottomStartRadius:50 ,height:'100%',width:30,justifyContent:'center',alignItems:'center'}}>
                <AntDesignIcon name="search1" size={15} color="white" solid />
              </View>
          {/* search text  */}
              <View style={{justifyContent:'center',alignItems:'flex-start',flex:1}}>
                <TextInput
                  style={styles.input}
                  placeholder="Search by WHM ID"
                  placeholderTextColor={Vcolor.litesecondary} // Example placeholder text color
                /> 
              </View>
                     
        </View>
        
        {/* filter box  */}
        <View style={{width:'22%',height:30,borderWidth:1.2,borderColor:Vcolor.primary,marginLeft:20,borderRadius:50}}>

          <TouchableOpacity style={{width:'100%',height:'100%',alignItems:'flex-end',flexDirection:'row'}}>
            {/* filter text  */}
            <Text style={{color:Vcolor.primary,fontSize:14,fontWeight:500,textAlign:'center',textAlignVertical:'center',height:'100%',flex:1}}>Filter</Text>

            {/* dropdown icon  */}
            <View style={{backgroundColor:Vcolor.primary,borderTopStartRadius:50,borderTopEndRadius:50,borderBottomEndRadius:50,height:'100%',width:30,justifyContent:'center',alignItems:'center'}}>
              <AntDesignIcon name="down" size={15} color="white" solid />
            </View>
          </TouchableOpacity>

        </View>
      </View>




      <FlatList
        data={sortedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          // create water hole report short view 
          // <View style={styles.item}>
          //   <Text>{item.name}</Text>
          // </View>

          // box 
          <View style={{borderWidth:1,borderColor:'red',marginTop:15,height:60,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:'97%',height:'100%',borderWidth:1,borderColor:'green',flexDirection:'row'}}>

              {/* water hole id or name and addresssection  */}
              <View style={{flex:4,backgroundColor:'red'}}>
                {/* water hole  name or parrent name section  */}
                <View style={{flexDirection:'row'}}>
                  {/* water hole id  */}
                  <View style={{flexDirection:'row'}}>
                    <Text>WH0002</Text>
                    <FontAwesomeIcon name="feed" size={15} color="green" solid />
                  </View>
                  
                  {/* water hole parrent id  */}
                  <View style={{flexDirection:'row'}}>
                    <Text>Parrent Node: WHM001</Text>
                    <FontAwesomeIcon name="podcast" size={15} color="green" solid />
                  </View>
                </View>
                
                {/* water hole address section  */}
                <View style={{flexDirection:'row'}}>
                  <FontAwesomeIcon name="map-marker" size={15} color="red" solid/>
                  <Text>Nayala bag Zone 2</Text>
                </View>
              </View>

              {/* water hole level section  */}
              <View style={{flex:1,backgroundColor:'gray'}}>
                {/* for water drop level show icon svg  */}
                <View>
                  <WaterDropIcon width={50} height={50} levelfrom={4}/>
                </View>

                {/* for presentage level section  */}
                <View>

                  {/* for level presentage  */}
                  <View>
                      <Text>10 %</Text>
                  </View>
                  {/* for View more btn  */}
                  <View>
                    <TouchableOpacity>
                      <Text>View More</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>

            </View>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  image: {
    width: '100%',
    height: 125,
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
  input: {
    color: Vcolor.primary, // Assuming Vcolor.secondary is defined elsewhere
    fontSize: 14,
    fontWeight: '500', // Since fontWeight accepts a string value
    marginLeft: 10,
    height: '100%', // Note: '100%' height may not work as expected in all cases, consider specifying a fixed height
    // backgroundColor:'red'
  },
});
