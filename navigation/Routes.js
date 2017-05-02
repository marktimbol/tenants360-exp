import { createRouter } from '@expo/ex-navigation';
import LoginScreen from '../screens/LoginScreen';
import TutorialScreen from '../screens/TutorialScreen';
import HomeScreen from '../screens/HomeScreen';
import LandlordScreen from '../screens/LandlordScreen';
import RequestForMaintenanceScreen from '../screens/RequestForMaintenanceScreen';
import EnterVerificationCodeScreen from '../screens/EnterVerificationCodeScreen';

export default createRouter(() => ({
	login: () => LoginScreen,
	tutorials: () => TutorialScreen,
	home: () => HomeScreen,
	requestForMaintenance: () => RequestForMaintenanceScreen,
	landlord: () => LandlordScreen,
	enterVerificationCode: () => EnterVerificationCodeScreen,
}))