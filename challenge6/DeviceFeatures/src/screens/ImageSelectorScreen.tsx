import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { setProfilePicture } from '../redux/authSlice';

const ImageSelectorScreen = ({ navigation }) => {
  const [image, setImage] = useState('');

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert('You need to enable camera permissions to use this app.');
      return false;
    }
    console.log('Permissions granted');
    return true;
  };

  const pickImage = async () => {
    const hasPermission = await verifyCameraPermissions();
    if (hasPermission) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });

      if (!result.cancelled) {
        setImage(`data:image/jpg;base64,${result.assets[0].base64}`);
        return;
      }
    } else {
      console.log('No permissions');
    }
  };

  const dispatch = useDispatch();

  const saveImage = () => {
    dispatch(setProfilePicture(image));
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {image ? (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={pickImage}>
              <Text style={styles.textBtn}>Tomar otra</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.btn, ...styles.btnConfirm }}
              onPress={saveImage}
            >
              <Text style={styles.textBtn}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.noImageContainer}>
          <MaterialIcons name="no-photography" size={200} color="#ccc" />
          <TouchableOpacity style={styles.btn} onPress={pickImage}>
            <Text style={styles.textBtn}>Abrir cámara</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
{
  /* <View style={styles.container}>
  {image ? (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={pickImage}>
          <Text style={styles.textBtn}>Tomar otra</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.btn, ...styles.btnConfirm }}
          onPress={saveImage}
        >
          <Text style={styles.textBtn}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={styles.noImageContainer}>
      <MaterialIcons name="no-photography" size={200} color="#ccc" />
      <TouchableOpacity style={styles.btn} onPress={pickImage}>
        <Text style={styles.textBtn}>Abrir cámara</Text>
      </TouchableOpacity>
    </View>
  )}
</View> */
}

export default ImageSelectorScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  noImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  btn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 50,
  },
  textBtn: {
    color: '#fff',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 250,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  btnConfirm: {
    backgroundColor: 'green',
    paddingHorizontal: 50,
  },
});
