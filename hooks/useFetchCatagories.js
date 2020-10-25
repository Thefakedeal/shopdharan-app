import useFetch from './useFetch'
import baseURL from '../defaults/baseurl'

export default function useFetchCatagories(){
    const url = `${baseURL}/api/catagories/getall`;
    const { loading, result, err } = useFetch(url);
    return {loading, result, err} 
}