import useAuthStore from '../stores/AuthStore';
import {useEffect, useState} from 'react';
import {
  decodeJWT,
  decodeJWTFechaexp,
  getToken,
  removeStoragePropFromObject,
} from '../utils/Utils';
import AuthNavigator from './AuthNavigator';
import {DrawerNavigator} from './DrawerNavigator';
import Loader from '../components/Loader';

export default function Navigator() {
  const userToken = useAuthStore(state => state.userToken);
  const login = useAuthStore(state => state.login);
  const logout = useAuthStore(state => state.logout);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      setIsLoading(true);
      const configuration = await getToken('configuration');
      if (configuration && 'encodetoken' in configuration) {
        const fechaExpToken = decodeJWTFechaexp(configuration.encodetoken);
        if (fechaExpToken.exp < Date.now() / 1000) {
          const removed = removeStoragePropFromObject(
            'configuration',
            'encodetoken',
          ).then(removed => {
            return true;
          });
          if (removed) {
            logout();
          }
        } else {
          login();
        }
      }
      setIsLoading(false);
    };
    initializeAuth();
  }, [userToken]);

  return (
    <>
      <Loader loading={false} />
      {userToken === null || userToken === undefined ? (
        <AuthNavigator />
      ) : (
        <DrawerNavigator />
      )}
    </>
  );
}
