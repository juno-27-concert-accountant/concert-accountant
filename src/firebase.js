import firebase from 'firebase/app';
import 'firebase/database';

// Initalize Firebase
const config = {
	apiKey: "AIzaSyBymJrYdY1TNmwZwPPOIY02q6t3EBz3WUU",
	authDomain: "concert-accountant-cca1f.firebaseapp.com",
	databaseURL: "https://concert-accountant-cca1f.firebaseio.com",
	projectId: "concert-accountant-cca1f",
	storageBucket: "concert-accountant-cca1f.appspot.com",
	messagingSenderId: "357158929786",
	appId: "1:357158929786:web:6fefa320d3defb953ec2c3"
};
firebase.initializeApp(config);

// This exports the configuerd version of firebase
export default firebase;