import useFetch from './useFetch'
import baseURL from '../defaults/baseurl'

export default function useFetchProduct({product_id}){
    const url = `${baseURL}/api/products/get?product_id=${product_id}`
    const {err, loading, result} = useFetch(url)
    return {err, loading, result}
}