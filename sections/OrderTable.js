import React from "react";
import { DataTable } from "react-native-paper";
import {useNavigation} from '@react-navigation/native'
import homenav from '../defaults/homenav.json'

export default function DisplayCartTable({ orders = [] }) {
  const navigation = useNavigation()
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title numeric>Price(Rs.)</DataTable.Title>
        <DataTable.Title numeric>Quantity</DataTable.Title>
        <DataTable.Title numeric>Total</DataTable.Title>
      </DataTable.Header>
      {orders.map((order) => (
        <DataTable.Row key={order.product_id}
          onPress={()=>{
            navigation.navigate(homenav.product,{
              id: order.product_id,
              title: order.product_name 
            })
          }}
        >
          <DataTable.Cell> {order.product_name}</DataTable.Cell>
          <DataTable.Cell numeric> {order.price}</DataTable.Cell>
          <DataTable.Cell numeric> {order.quantity}</DataTable.Cell>
          <DataTable.Cell numeric>
            {parseInt(order.price * order.quantity)}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
      {}
      <DataTable.Row key={"Total"}>
        <DataTable.Cell> Total </DataTable.Cell>
        <DataTable.Cell numeric> </DataTable.Cell>
        <DataTable.Cell numeric> </DataTable.Cell>
        <DataTable.Cell numeric>
          {orders.reduce((total, order) => {
            return parseInt(total) + parseInt(order.price * order.quantity);
          }, 0)}
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}
