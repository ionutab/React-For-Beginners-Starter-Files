import Rebase from "re-base";
import firebase from "firebase";

var config = {
	apiKey: "AIzaSyAYlMySxMjOTQrImxJuYOMtLZNK1_ljMIs",
	authDomain: "going-to-outer-space.firebaseapp.com",
	databaseURL: "https://going-to-outer-space.firebaseio.com"
};

const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;
