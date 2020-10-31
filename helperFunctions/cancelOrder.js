import fetchWithCredentials from "./fetchWithCredentials";
import baseURL from "../defaults/baseurl";

export default async function cancelOrder(order_id) {
  const method = "PUT";
  const url = `${baseURL}/api/user/orders/cancel`;
  const response = await fetchWithCredentials(method, url, { order_id });
  if (!response.ok) throw (await response.text()) || "Failed To Cancel";
  return response.ok;
}
