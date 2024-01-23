import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';

const ProfileScreen = ({ navigation }) => {
  const image = useSelector((state) => state.authReducer.profilePicture);
  return (
    <>
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
        <Pressable
          onPress={() => navigation.navigate('Select Image')}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#DCDCDC' : '#E8E8E8',
            },
            styles.imageContainer,
          ]}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={styles.profilePicture}
              resizeMode="contain"
            />
          ) : (
            <Image source={require('../../assets/img/user.png')} />
          )}
        </Pressable>
      </View>
    </>
  );
};
{
  /* <View style={styles.container}>
  <Pressable
    onPress={() => navigation.navigate('Select Image')}
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#DCDCDC' : '#E8E8E8',
      },
      styles.imageContainer,
    ]}
  >
    {image ? (
      <Image
        source={{ uri: image }}
        style={styles.profilePicture}
        resizeMode="contain"
      />
    ) : (
      <Image source={require('../../assets/img/user.png')} />
    )}
  </Pressable>
</View> */
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 20,
    gap: 20,
    alignItems: 'flex-start',
    border: 'solid 1px red',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    border: 'solid 1px red',
  },
});
