import AsyncStorage from '@react-native-async-storage/async-storage';
import Base64 from 'Base64';

const storeToken = async (authData, nameIdentity) => {
  try {
    await AsyncStorage.setItem(nameIdentity, JSON.stringify(authData));
  } catch (error) {}
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getToken = async authIdentity => {
  try {
    const userData = await AsyncStorage.getItem(authIdentity);
    return JSON.parse(userData);
  } catch (error) {
    return {};
  }
};

const mergeStorage = async (data, nameIdentity) => {
  try {
    await AsyncStorage.mergeItem(nameIdentity, JSON.stringify(data));
  } catch (error) {
    console.error('Error merging data into AsyncStorage:', error);
  }
};

const removeStoragePropFromObject = async (nameObject, propertie) => {
  try {
    const obj = await getToken(nameObject);
    delete obj[propertie];
    await storeToken(obj, nameObject);
  } catch (error) {}
};

const currentDate = () => {
  const today = new Date();
  let date = today.getDate();
  let month = today.getMonth() + 1;
  const year = today.getFullYear();
  if (date < 10) {
    date = '0' + date;
  }
  if (month < 10) {
    month = '0' + month;
  }
  return year + '-' + month + '-' + date;
};

const decodeJWT = chainToken => {
  const base64Url = chainToken.split('.')[1];
  if (!base64Url) {
    return '';
  }
  const decodedValue = JSON.parse(Base64.atob(base64Url));
  return decodedValue.data;
};

const decodeJWTFechaexp = chainToken => {
  const base64Url = chainToken.split('.')[1];
  if (!base64Url) {
    return '';
  }
  return JSON.parse(Base64.atob(base64Url));
};

const isNumeric = num => {
  return !isNaN(num);
};

export {
  getToken,
  mergeStorage,
  currentDate,
  storeToken,
  sleep,
  removeStoragePropFromObject,
  decodeJWT,
  decodeJWTFechaexp,
  isNumeric,
};
