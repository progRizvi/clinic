import {
	createUserWithEmailAndPassword,
	getAuth,
	GithubAuthProvider,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initaializeAuthentication from "../Firebase/Firebase.init";

initaializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const UseFirebase = () => {
	const [error, setError] = useState("");
	const [user, setUser] = useState({});
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPass, setUserPass] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const googleSignIn = () => {
		return signInWithPopup(auth, googleProvider);
	};
	const githubSignIn = () => {
		return signInWithPopup(auth, githubProvider);
	};

	const handleUserName = (e) => {
		setUserName(e.target.value);
	};
	const handleUserEmail = (e) => {
		setUserEmail(e.target.value);
	};
	const handleUserPass = (e) => {
		setUserPass(e.target.value);
	};
	const handleRegistration = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, userEmail, userPass)
			.then((result) => {
				console.log(result.user);
				updateUserName();
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
			});
	};
	const handleLoginUserForm = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, userEmail, userPass)
			.then((result) => {})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
			});
	};
	const updateUserName = () => {
		updateProfile(auth.currentUser, { displayName: userName }).then(
			(result) => {}
		);
	};

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, []);

	const logOut = () => {
		signOut(auth).then(() => {
			setUser({});
			setIsLoading(false);
		});
	};

	return {
		googleSignIn,
		user,
		error,
		logOut,
		githubSignIn,
		handleRegistration,
		handleUserPass,
		handleUserEmail,
		handleLoginUserForm,
		handleUserName,
		setError,
		setIsLoading,
		isLoading
	};
};
export default UseFirebase;
