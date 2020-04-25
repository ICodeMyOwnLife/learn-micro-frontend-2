import { bootstrapMicroFrontend } from 'cb-react-micro-frontend';
import './index.css';
import App from './App';
import { unregister } from './serviceWorker';
import { name } from '../package.json';

bootstrapMicroFrontend(name, App, unregister);
