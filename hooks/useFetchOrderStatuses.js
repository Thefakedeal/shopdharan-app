import useFetch from './useFetch'
import baseURL from '../defaults/baseurl'

export default function useFetchOrderStatuses() {
    const url = `${baseURL}/api/orderstatus`
    const {loading, err, result=[]} = useFetch(url)
    return {loading, err, result}
}
