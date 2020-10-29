
import useFetch from './useFetch'
import baseURL from '../defaults/baseurl'

export default function useFetchCities() {
    const url = `${baseURL}/api/cities/getall`;
    const { loading, result, err } = useFetch(url);
    
    return {loading, result, err}
}
