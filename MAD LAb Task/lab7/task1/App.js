import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, Alert } from 'react-native';

const MyApp = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [history, setHistory] = useState([]);
  const [mymodel, visabilityfun] = useState(false);

  const calculateDiscount = () => {
    const original = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);
    const save = (original * discount) / 100;
    const final = original - save;
    if (final < 0) {
      Alert.alert(
        "Error",
        "Please check the price because the discount is greater than the original price.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
      return;
    }
    setFinalPrice(final.toFixed(2));
    saveCalculation(original, discount, final); // Automatically save calculation
  };

  const saveCalculation = (original, discount, final) => {
    const newHistory = [...history, { original, discount, final }];
    setHistory(newHistory);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Original Price</Text>
      <TextInput
        value={originalPrice}
        onChangeText={text => setOriginalPrice(text)}
        keyboardType="numeric"
        placeholder="Please enter original price"
      />
      <Text>Discount Percentage</Text>
      <TextInput
        value={discountPercentage}
        onChangeText={text => setDiscountPercentage(text)}
        keyboardType="numeric"
        placeholder="Enter discount percentage"
      />
      <Button title="Calculate" onPress={calculateDiscount} />
      <Text>Final Price: {finalPrice}</Text>
      <Button title="View History" onPress={() => visabilityfun(true)} />

      <Modal visible={mymodel} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Close" onPress={() => visabilityfun(false)} />
          {history.map((item, index) => (
            <Text key={index}>
              Original Price: {item.original} - Discount: {item.discount}% - Final Price: {item.final}
            </Text>
          ))}
          <Button title="Clear History" onPress={clearHistory} />
        </View>
      </Modal>
    </View>
  );
};

export default MyApp;
