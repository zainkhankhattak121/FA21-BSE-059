/*

import React from 'react';
import { View } from 'react-native';

function Lab203(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1,backgroundColor : ' white ', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor: 'white', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor: 'white', height: 40  }} />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1,backgroundColor : 'black', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor: ' black', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor : 'black', height: 40  }} />
        
      </View>
<View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1,backgroundColor : ' white ', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor: 'white', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor: 'white', height: 40  }} />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1,backgroundColor : 'black', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor: ' white ', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor : 'white', height: 40  }} />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1,backgroundColor : ' white ', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor: 'white', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1 }} />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1,backgroundColor : 'black', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor: ' white ', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor : 'white', height: 40  }} />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1,backgroundColor : ' white ', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor: 'white', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1 }} />
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'black', height: 40 }} />
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1,backgroundColor : 'black', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor: ' black ', height: 40  }} />
        <View style={{ flex: 1, backgroundColor: 'white', height: 40 }} />
        <View style={{ flex: 1 , backgroundColor : 'black', height: 40  }} />
      </View>
     
      </View>
   
  );
}

export default Lab203;

*/
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

const Lab203 = () => {
  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      rows.push(
        <View key={i} style={styles.row}>
          {renderCells(i)}
        </View>
      );
    }
    return rows;
  };

  const renderCells = (rowIndex) => {
    const cells = [];
    for (let i = 0; i < 8; i++) {
      const cellColor = (rowIndex + i) % 2 === 0 ? 'black' : 'white';
      cells.push(
        <View key={i} style={[styles.cell, { backgroundColor: cellColor }]} />
      );
    }
    return cells;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderRows()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  cell: {
    flex: 1,
    height: 40,
  },
});

export default Lab203;
