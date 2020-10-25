import useFetch from './useFetch'
import baseURL from '../defaults/baseurl'

export default function useFetchProducts({
    supplier_id,
    available,
}) {
    
    const searchParams= new URLSearchParams()
    if(supplier_id) searchParams.append('supplier_id',supplier_id)
    if(available != null || undefined) searchParams.append('available', available)
    
    const url = `${baseURL}/api/products/getall?${searchParams}`

    const {err,loading,result} = useFetch(url)
    
    return {err,loading,result}
}
