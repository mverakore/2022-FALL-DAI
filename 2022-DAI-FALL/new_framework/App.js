import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider,Text, Layout} from '@ui-kitten/components';
import Main from './screens/main';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <PaperProvider>
       <Main/>
       </PaperProvider>
    </ApplicationProvider>
  );
}
