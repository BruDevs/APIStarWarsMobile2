import {createStackNavigator} from '@react-navigation/stack';

import Fotos from './Imperio';
import Planetas from './Planetas';
import Naves from './Naves';

const Stack = createStackNavigator();

export default function FotosStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Fotos" component={Fotos}/>
      <Stack.Screen name="Naves" component={Naves} options={{title:"Naves"}}/>
      <Stack.Screen name="Planetas" component={Planetas}options={{title:"Planetas"}}/>
    </Stack.Navigator>
  );
}