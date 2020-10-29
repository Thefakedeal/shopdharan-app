import fetchWithCredentials from '../helperFunctions/fetchWithCredentials'
import baseURL from '../defaults/baseurl'

export default async function deleteAddress(address_id){
    const method = 'DELETE'
    const url = `${baseURL}/api/user/address/delete`
    const response = await fetchWithCredentials(method,url , {address_id})
    return response.ok
}
