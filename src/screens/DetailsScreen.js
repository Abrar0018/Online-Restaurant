import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addToFav, removeFromFav, placeOrder } from '../store/slice'

const Details = ({ route }) => {
  const { id, name, imgUrl, price } = route.params.dish
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const isFavorite = useSelector((state) =>
    state.favorites.find((favoriteDish) => favoriteDish.id === id)
  )
  const [orderQuantity, setOrderQuantity] = React.useState(1)

  const handleAddToFav = () => {
    if (isFavorite) {
      dispatch(removeFromFav({ dishId: id }))
    } else {
      dispatch(addToFav({ dishId: id }))
    }
  }

  const handleMakeOrder = () => {
    const parsedQuantity = parseInt(orderQuantity)
    if (isNaN(parsedQuantity) || parsedQuantity < 0) {
      alert('Please add some quantity....')
      return
    }

    const orderDetails = {
      name,
      quantity: orderQuantity,
      totalBill: orderQuantity * price,
    }
    dispatch(placeOrder({ orderDetails }))
    alert(`Order placed for ${orderQuantity} ${name}(s)`)
    navigation.pop()
  }

  const handleQuantityChange = (newQuantity) => {
    setOrderQuantity(newQuantity)
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>Price: {price}</Text>
        <TextInput
          style={styles.quantityInput}
          placeholder='Enter quantity'
          value={orderQuantity.toString()}
          onChangeText={handleQuantityChange}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAddToFav}>
            <Text style={styles.buttonText}>
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleMakeOrder}>
            <Text style={styles.buttonText}>Make Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    width: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default Details
