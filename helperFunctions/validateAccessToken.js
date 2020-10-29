import baseurl from '../defaults/baseurl'
import baseURL from '../defaults/baseurl';
export default async function validateAccessToken(accessToken){
    const data = {accessToken};
    const response = await fetch(`${baseURL}/api/validate`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

    if(!response.ok) throw response.statusText;
    const body = await response.json();

    return body.valid;
}