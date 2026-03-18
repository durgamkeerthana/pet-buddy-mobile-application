import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  Modal,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {SafeAreaView} from 'react-native-safe-area-context';

const ReminderScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFrequency, setSelectedFrequency] = useState('');
  const [activity, setActivity] = useState('');
  const handleValueChange = (itemValue: string) => {
    setSelectedFrequency(itemValue);
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Set your Reminders</Text>
      <Image
        style={styles.profile}
        source={require('../assets/petprofile.jpeg')}
      />
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.buttonview}>
          <Button color="white" title="Daily" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonview}>
          <Button color="white" title="Weekly" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonview}>
          <Button color="white" title="Monthly" />
        </TouchableOpacity>
      </View>
      <View style={styles.modalContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <TextInput
            value={activity}
            testID="activity-field"
            style={styles.input}
            placeholder="Enter Activity"
            onChangeText={text => setActivity(text)}
          />
          <Picker
            selectedValue={selectedFrequency}
            onValueChange={handleValueChange}
            style={styles.picker}>
            <Picker.Item label="Daily" value="Daily" />
            <Picker.Item label="Weekly" value="Weekly" />
            <Picker.Item label="Monthly" value="Monthly" />
          </Picker>
          <Text style={styles.selectedText}>
            You selected: {selectedFrequency}
          </Text>
        </Modal>
      </View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.ImageContainer}>
        <Image
          style={styles.profile}
          source={require('../assets/Addreminders.jpeg')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ReminderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  ButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
  },
  profile: {
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
    borderRadius: 20,
    borderWidth: 2,
  },
  ImageContainer: {
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
    borderRadius: 20,
    borderWidth: 2,
  },
  modalContainer: {
    borderWidth: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonview: {
    marginTop: 5,
    alignSelf: 'center',
    backgroundColor: 'green',
    borderWidth: 2,
    height: 40,
    borderRadius: 10,
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedText: {
    fontSize: 18,
    color: '#333',
  },
});
