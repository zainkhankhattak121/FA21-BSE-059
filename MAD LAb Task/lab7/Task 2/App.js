import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';

const StudentRecordApp = () => {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [gpa, setGPA] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const addStudent = () => {
    if (!studentName || !gpa) {
      alert('Please enter both student name and GPA.');
      return;
    }

    const newStudent = { name: studentName, gpa: gpa };
    setStudents([...students, newStudent]);
    setStudentName('');
    setGPA('');
  };

  const removeStudent = (name) => {
    const updatedStudents = students.filter(student => student.name !== name);
    setStudents(updatedStudents);
  };

  const searchStudent = () => {
    if (!searchName) {
      alert('Please enter a name to search.');
      return;
    }

    const result = students.filter(student => student.name === searchName);
    setSearchResult(result);
  };

  const clearAllRecords = () => {
    Alert.alert(
      "Confirm",
      "Are you sure you want to clear all records?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => setStudents([]) }
      ]
    );
  };

  const renderStudentItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text>{`Name: ${item.name}, GPA: ${item.gpa}`}</Text>
      <Button title="Remove" onPress={() => removeStudent(item.name)} />
    </View>
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Student Name</Text>
      <TextInput
        value={studentName}
        onChangeText={text => setStudentName(text)}
        placeholder="Enter student name"
      />
      <Text>GPA</Text>
      <TextInput
        value={gpa}
        onChangeText={text => setGPA(text)}
        keyboardType="numeric"
        placeholder="Enter GPA"
      />
      <Button title="Add" onPress={addStudent} />

      <Text style={{ marginTop: 20 }}>Search by Name</Text>
      <TextInput
        value={searchName}
        onChangeText={text => setSearchName(text)}
        placeholder="Enter name to search"
      />
      <Button title="Search" onPress={searchStudent} />

      <Text style={{ marginTop: 20 }}>Student Record</Text>
      {students.length > 0 &&
        <FlatList
          data={searchResult.length > 0 ? searchResult : students}
          renderItem={renderStudentItem}
          keyExtractor={(item, index) => index.toString()}
        />
      }
      <Button title="Clear All Records" onPress={clearAllRecords} />
    </View>
  );
};

export default StudentRecordApp;
