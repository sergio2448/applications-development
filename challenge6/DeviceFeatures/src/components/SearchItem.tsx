import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { EvilIcons, Entypo } from '@expo/vector-icons';

interface SearchProps {
  onSearchHandlerEvent: (searchInput: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchHandlerEvent }) => {
  const [searchInput, setSearchInput] = useState('');
  const [error, setError] = useState('');

  const onSearchHandler = () => {
    const regEx = /[^\w\s]/;
    if (regEx.test(searchInput)) {
      setError('Sólo se admiten letras y números');
      setSearchInput('');
    } else {
      setError('');
      onSearchHandlerEvent(searchInput);
    }
  };

  const onResetSearchHandler = () => {
    setSearchInput('');
    onSearchHandlerEvent(searchInput);
  };

  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSearchInput}
          placeholder="Buscar..."
          value={searchInput}
        />
        <TouchableOpacity onPress={onSearchHandler}>
          <EvilIcons name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onResetSearchHandler}>
          <Entypo name="cross" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : null}
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textInput: {
    width: '80%',
  },
});
