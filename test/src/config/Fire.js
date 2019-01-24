import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB9CmLO0ENIPZ1AkgrZfnMRISBSF7UpAqA",
    authDomain: "test-afa51.firebaseapp.com",
    databaseURL: "https://test-afa51.firebaseio.com",
    projectId: "test-afa51",
    storageBucket: "test-afa51.appspot.com",
    messagingSenderId: "340831823272"
};
const fire = firebase.initializeApp(config);
export default fire;