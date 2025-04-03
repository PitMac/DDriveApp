import MediaScreen from '../screens/MediaScreen';
import ArchivosScreen from '../screens/ArchivosScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Media">
      <Drawer.Screen name="Media" component={MediaScreen} />
      <Drawer.Screen name="Archivos" component={ArchivosScreen} />
    </Drawer.Navigator>
  );
}
