import { createRouter } from '@expo/ex-navigation';
import HomeScreen from '../screens/HomeScreen';
import EnterVerificationCodeScreen from '../screens/EnterVerificationCodeScreen';

export default createRouter(() => ({
	home: () => HomeScreen,
	enterVerificationCode: () => EnterVerificationCodeScreen,
}))