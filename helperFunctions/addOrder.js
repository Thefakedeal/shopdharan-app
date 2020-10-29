import baseURL from '../defaults/baseurl'
import fetchWithCredentials from './fetchWithCredentials'


export default async function addOrder(orders, address_id){
    const url = `${baseURL}/api/user/orders/add`
    const method = 'POST'
    const response = await fetchWithCredentials(method, url, {orders, address_id})
    
    if(!response.ok) throw "Order Failed"
    const resp = await response.json()
    return resp
}