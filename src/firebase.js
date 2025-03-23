import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail, 
  updateProfile, 
  EmailAuthProvider, 
  reauthenticateWithCredential, 
  getIdToken as getIdTokenFirebase, 
  getIdTokenResult, 
  sendEmailVerification // Import sendEmailVerification
} from 'firebase/auth';
import client from './client/client.js'
import transformerUtils from './utils/transformerUtils'

var firebaseConfig = {
  apiKey: 'AIzaSyAwafwMn6Zw916YgOcRCBcHqdf1ECsOgc4',
  authDomain: 'prostredoskolaky-login.firebaseapp.com',
  databaseURL: 'https://prostredoskolaky-login.firebaseio.com',
  projectId: 'prostredoskolaky-login',
  storageBucket: 'prostredoskolaky-login.appspot.com',
  messagingSenderId: '408860937046',
  appId: '1:408860937046:web:e46a3b696ecd93a57be4f7'
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const createUser = async (user, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, user.email, password);
    await updateProfile(userCredential.user, {
      displayName: user.firstName + ' ' + user.lastName
    });
    await client.createUser(user);
    await sendEmailVerification(userCredential.user); // This will now work
    return 'OK';
  } catch (err) {
    console.log(err);
    return transformerUtils.mapLoginErrorCodes(err.code);
  }
}

const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return 'OK'
  } catch (err) {
    console.log(err)
    return transformerUtils.mapLoginErrorCodes(err.code)
  }
}

const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err)
  }
}

const renewPassword = async email => {
  try {
    await sendPasswordResetEmail(auth, email);
    return 'OK'
  } catch (err) {
    console.log(err)
    return transformerUtils.mapLoginErrorCodes(err.code)
  }
}

const updateProfileForCurrentUser = async user => {
  try {
    await updateProfile(auth.currentUser, {
      displayName: user.firstName + ' ' + user.lastName
    })
  } catch (err) {
    console.log(err)
    return transformerUtils.mapLoginErrorCodes(err.code)
  }
}

const updateUser = async (email, user) => {
  try {
    await updateProfileForCurrentUser(user)
    await client.updateUser(email, user)
    return 'OK'
  } catch (err) {
    console.log(err)
    return transformerUtils.mapLoginErrorCodes(err.code)
  }
}

const changePassword = async (email, password, newPassword) => {
  try {
    const credential = EmailAuthProvider.credential(
      email,
      password
    )
    if (auth.currentUser) {
      await reauthenticateWithCredential(auth.currentUser, credential);
      await auth.currentUser.updatePassword(newPassword);
      return 'OK';
    }
  } catch (err) {
    console.log(err)
    return transformerUtils.mapLoginErrorCodes(err.code)
  }
}

const getIdToken = async () => {
  try {
    if (auth.currentUser) {
      return await getIdTokenFirebase(auth.currentUser, /* forceRefresh */ true);
    }
  } catch (err) {
    console.log(err)
  }
}

const getRole = async () => {
  try {
    if (auth.currentUser) {
      const result = await getIdTokenResult(auth.currentUser);
      const role = result && result.claims && result.claims.role;
      return role;
    }
  } catch (err) {
    console.log(err)
  }
}

const reauthenticate = async (email, password) => {
  try {
    const credential = EmailAuthProvider.credential(email, password);
    if (auth.currentUser) {
      await reauthenticateWithCredential(auth.currentUser, credential);
      return 'OK';
    }
    return 'OK'
  } catch (err) {
    console.log(err)
    return transformerUtils.mapLoginErrorCodes(err.code)
  }
}

export default {
  auth,
  createUser,
  loginUser,
  logoutUser,
  renewPassword,
  updateUser,
  updateProfileForCurrentUser,
  changePassword,
  getIdToken,
  getRole,
  reauthenticate
}
