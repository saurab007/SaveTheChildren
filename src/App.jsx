import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AddChildren } from './components/children/AddChildren';
import Children from './components/children/Children';
import Dashboard from './components/dashboard/Dashboard';
import Donation from './components/donation/Donation';
import Home from './components/Home';
import Login from './components/Login';
import Map from './components/map/Map';
import Profile from './components/profile/Profile';
import Register from './components/Register';
import Settings from './components/settings/Settings';
import { ApplyVolunter } from './components/volunter/ApplyVolunter';
import Volunter from './components/volunter/Volunter';
import { Private } from './utils/routes/Private';
import { Public } from './utils/routes/Public';

export function App() {
	return (
		<>
			<Router>
				<Switch>
					<Public path='/' exact component={Home} />
					<Public path='/login' exact component={Login} />
					<Public path='/register' exact component={Register} />
					<Private path='/dashboard' exact component={Dashboard} />
					<Private path='/children' exact component={Children} />
					<Private path='/volunter' exact component={Volunter} />
					<Private path='/donation' exact component={Donation} />
					<Private path='/profile' exact component={Profile} />
					<Private path='/settings' exact component={Settings} />
					<Private path='/map' exact component={Map} />
					<Private path='/volunter/apply' exact component={ApplyVolunter} />
					<Private path='/children/apply' exact component={AddChildren} />
				</Switch>
			</Router>
		</>
	);
}
