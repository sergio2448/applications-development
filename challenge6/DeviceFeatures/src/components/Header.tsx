import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  navigation: {
    canGoBack: () => boolean;
    goBack: () => void;
  };
}

const Header: React.FC<HeaderProps> = ({ title, navigation }) => {
  return (
    <View style={styles.headerContainer}>
      {navigation.canGoBack() ? (
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="caretleft" size={20} color="white" />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}

      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'Karla-Bold',
    fontSize: 20,
  },
});
