// date picker 
import DatePicker from 'react-native-modern-datepicker';
import { Text, View, Modal, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import Vcolor from '../../global';

const DateSelectorModal = ({ isVisible, onClose, onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const convertDateFormat = (dateString) => {
    // Split the date string into parts
    const [year, month, day] = dateString.split('/');
  
    // Concatenate the parts with hyphens
    const formattedDate = `${year}-${month}-${day}`;
  
    setSelectedDate(formattedDate) ;
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, backgroundColor: 'rgba(166,217,248,0.7)', justifyContent: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <Text style={{ textAlign: 'center', backgroundColor: 'white', padding: 10, borderWidth: 1, borderColor: Vcolor.primary, color: Vcolor.primary, borderRadius: 50, fontWeight: 700 }}>Select Date</Text>
          <DatePicker
            onSelectedChange={date => convertDateFormat(date)}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'white', paddingBottom: 20, }}>
            <Button
              title="Confirm"
              onPress={() => {
                onDateSelect(selectedDate);
                onClose();
              }}
            />
            <Button
              title="Close"
              onPress={onClose}
              color="#888"
            />
          </View>

        </View>
      </View>
    </Modal>
  );
};

export default DateSelectorModal;