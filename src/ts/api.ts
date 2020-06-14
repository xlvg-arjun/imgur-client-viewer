import UserData from "./interfaces/UserData";

const STORAGE_ID = "IMGUR_END_USER_STORAGE_ID";

export const empty_user_data = {
  access_token: null,
  refresh_token: null,
  account_id: null,
  account_username: null,
};

/**
 * @typedef {Object} UserData - End User Data to be stored, retrieved, used, and cleared out if the end user wishes
 * @property {string} access_token - Access Token to be used in communication with imgur
 * @property {string} refresh_token - Refresh token to be used with the imgur API to retrieve new access_token if needed
 * @property {string} account_id - Identifier representing the end user's account
 * @property {string} account_username - Username of the end user's account
 */


// data = { access_token, refresh_token, account_id, account_username }
/**
 * 
 * @param {UserData} data  
 */
export function saveUserData(data: UserData) {
  const dataStringified = JSON.stringify(data);
  localStorage.setItem(STORAGE_ID, dataStringified);
}

/**
 * @returns {UserData} Returns the UserData that was once stored
 */
export function retrieveUserData(): UserData {
  const data = localStorage.getItem(STORAGE_ID);
  const parsed = <UserData>JSON.parse(data);
  return parsed;
}

export function pingImgur(clientId: string) {
  console.table({ clientId });
  const headers = new Headers({
    'Expect': ' ',
    'Content-Type': 'application/json',
    'Authorization': `Client-ID ${clientId}`,
  });
  const request = new Request('https://cors-anywhere.herokuapp.com/https://api.imgur.com/3/gallery.json', {
    method: 'GET',
    headers,
    mode: 'cors',
  });
  return fetch(request)
    .then((response) => response.json())
    .then((data) => { console.table(data) })
    .catch((error) => console.table(error));
}