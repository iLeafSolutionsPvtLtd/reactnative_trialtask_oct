// General api to acces data from web
import ApiConstants from './ApiConstants';
export default function api(path, params, method, sssid, VLenzaToken) {
  let options;
  sssid
    ? (options = Object.assign(
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            API_KEY: 'VLenzaToken',
            sssid: sssid,
          },
        },
        {method: method},
        params ? {body: JSON.stringify(params)} : null,
      ))
    : (options = Object.assign(
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            API_KEY: 'VLenzaToken',
            VLenzaToken: VLenzaToken,
          },
        },
        {method: method},
        params ? {body: JSON.stringify(params)} : null,
      ));
  return fetch(ApiConstants.BASE_URL + path, options)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => error);
}
