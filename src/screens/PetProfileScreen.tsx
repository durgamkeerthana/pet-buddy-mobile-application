import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const PetProfileScreen = ({route, navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const goToReminderScreen = () => {
    navigation.navigate('Reminder'), setModalVisible(!modalVisible);
  };
  const goToActivityScreen = () => {
    navigation.navigate('Activity'), setModalVisible(!modalVisible);
  };
  const {pet} = route.params;
  const handleGallery = () => {
    navigation.navigate('PetGallery', {pet});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{uri: `data:image/jpeg;base64,${pet.image}`}}
          style={styles.Image}
        />
        <View style={styles.petintroview}>
          <Text style={styles.petnametext}> {pet.name}</Text>
          <Text style={styles.text}>Breed: {pet.breed}</Text>
          <Text style={styles.text}>Gender: {pet.gender}</Text>
        </View>
        <Text style={styles.petdetailsheader}>About {pet.name}! </Text>
        <View style={styles.petdetailsview}>
          <Text style={styles.detailstext}>Age: {pet.age} years</Text>
          <Text style={styles.detailstext}>weight: {pet.weight}kgs</Text>
          <Text style={styles.detailstext}>height: {pet.height}cms</Text>
          <Text style={styles.detailstext}>color: {pet.color}</Text>
        </View>
        <Text style={styles.petdetailsheader}>Remarks</Text>
        <Text style={styles.text}>{pet.remarks}</Text>
        <View style={styles.buttonview}>
          <Button onPress={handleGallery} color="white" title="Gallery" />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalview}>
            <TouchableOpacity onPress={goToActivityScreen}>
              <Text style={styles.modalText}>Activity</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToReminderScreen}>
              <Text style={styles.modalText}>Reminders</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.buttonview}>
          <Button
            title="Track"
            color="white"
            onPress={() => setModalVisible(true)}></Button>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  petnametext: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Raleway',
    fontStyle: 'italic',
  },
  buttonview: {
    marginTop: 5,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: 'green',
    borderWidth: 2,
    height: 40,
    width: '40%',
  },
  petintroview: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    borderRadius: 40,
    borderWidth: 2,
    alignItems: 'center',
  },
  remarksview: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    padding: 5,
    fontStyle: 'italic',
  },
  Image: {
    width: '100%',
    height: 350,
  },
  petdetailsheader: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  petdetailsview: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  detailstext: {
    borderWidth: 2,
    width: 100,
    height: 100,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 20,
    color: 'White',
    backgroundColor: 'lightgreen',
  },
  modalview: {
    borderWidth: 2,
    padding: 10,
    marginTop: 50,
    backgroundColor: 'white',
    width: '80%',
    gap: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  modalText: {
    borderWidth: 2,
    backgroundColor: 'green',
    borderRadius: 1,
    width: '40%',
    padding: 10,
  },
});
export default PetProfileScreen;
