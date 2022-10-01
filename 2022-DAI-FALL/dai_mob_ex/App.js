import Main from './screens/main';
import { Provider as PaperProvider } from 'react-native-paper';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <PaperProvider>
      <Main />
    </PaperProvider>
    </ApplicationProvider>
  );
}
