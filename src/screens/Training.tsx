import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { resources, TrainingResource } from '../data/TrainingData';
const Training = () => {
  const handlePress = (resource: TrainingResource) => {
    Linking.openURL(resource.url);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Pet Training Articles</Text>
      {resources.map((resource, index) => (
        <View key={index} style={styles.resourceContainer}>
          <TouchableOpacity onPress={() => handlePress(resource)}>
            <Text testID='resource-title' style={styles.resourceTitle}>{resource.title}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  resourceContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resourceTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#007bff',
  },
});

export default Training;