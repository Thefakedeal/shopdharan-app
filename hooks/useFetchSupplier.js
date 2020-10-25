import useFetch from './useFetch'
import baseURL from '../defaults/baseurl'

export default function useFetchSuppliers({
   supplier_id
}) {
    
    
    const url = `${baseURL}/api/suppliers/get?supplier_id=${supplier_id}`

    const {err,loading,result} = useFetch(url)
    
    return {err,loading,result}
}
