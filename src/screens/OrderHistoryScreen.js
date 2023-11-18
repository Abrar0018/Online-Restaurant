import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import globalStyles from '../utils/styles/globalstyles'
import TextWithLabel from '../components/TextWithLabel'

const OrderHistoryScreen = () => {
  const orderHistory = useSelector((state) => state.orderHistory)

  if (orderHistory.length == 0)
    return (
      <View style={globalStyles.container}>
        <Text style={[globalStyles.label, globalStyles.boldText]}>
          You don't have any orders so far ....
        </Text>
      </View>
    )

  return (
    <ScrollView>
      <View style={{ paddingTop: 20, paddingBottom: 70 }}>
        <View style={[globalStyles.container, globalStyles.flexGap(10)]}>
          <Text style={[globalStyles.label, globalStyles.boldText]}>
            Your Order History
          </Text>
          {orderHistory.map(({ name, quantity, totalBill }, index) => {
            return (
              <View
                key={index}
                style={[globalStyles.cardView, globalStyles.boxShadow(20)]}
              >
                <TextWithLabel label={'Dish Name'} text={name} />
                <TextWithLabel label={'Order Quantity'} text={quantity} />
                <TextWithLabel label={'Order Bill'} text={`$${totalBill}`} />
              </View>
            )
          })}
        </View>
      </View>
    </ScrollView>
  )
}

export default OrderHistoryScreen
