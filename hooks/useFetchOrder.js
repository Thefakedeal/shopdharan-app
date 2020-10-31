import useFetchWithAuth from './useFetchWithAuth'
import baseURL from '../defaults/baseurl'

export default function useFetchOrder({order_id}) {
    const url = `${baseURL}/api/user/orders/get?order_id=${order_id}`;
    const {err, loading, result, reloadResources } = useFetchWithAuth(url)
    return {err, loading, result, reloadResources }
}
