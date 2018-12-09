/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Homepage from './src/scenes/home/homepage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Homepage);
