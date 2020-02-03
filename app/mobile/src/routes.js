import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Acamps from './pages/Acamps';
import Inscricao from './pages/Inscricao';


const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Acamps,
        Inscricao
    })
);

export default Routes;