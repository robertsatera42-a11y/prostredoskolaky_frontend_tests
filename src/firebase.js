import firebase from 'firebase/app'
import 'firebase/auth'
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

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const createUser = async (user, password) => {
  try {
    await auth.createUserWithEmailAndPassword(user.email, password)
    await auth.currentUser.updateProfile({
      displayName: user.firstName + ' ' + user.lastName
    })
    await client.createUser(user)
    sendEmailVerification()
    return 'OK'
  } catch (err) {
    console.log(err)
    return transformerUtils.mapLoginErrorCodes(err.code)
  }
}

const loginUser = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password)
    return 'OK'
  } catch (err) {
    console.log(err)
    return transformerUtils.mapLoginErrorCodes(err.code)
  }
}

const logoutUser = async () => {
  try {
    await firebase.auth().signOut()
  } catch (err) {
    console.log(err)
  }
}

const sendEmailVerification = async () => {
  try {
    await auth.currentUser.sendEmailVerification()
  } catch (err) {
    console.log(err)
  }
}

const renewPassword = async email => {
  try {
    await auth.sendPasswordResetEmail(email)
    return 'OK'
  } catch (err) {
    console.log(err)
    return transformerUtils.mapLoginErrorCodes(err.code)
  }
}

const updateProfile = async user => {
  try {
    await auth.currentUser.updateProfile({
      displayName: user.firstName + ' ' + user.lastName
    })
  } catch (err) {
    console.log(err)
    return transformerUtils.mapLoginErrorCodes(err.code)
  }
}

const updateUser = async (email, user) => {
  try {
    await updateProfile(user)
    await client.updateUser(email, user)
    return 'OK'
  } catch (err) {
    console.log(err)
    return transformerUtils.mapLoginErrorCodes(err.code)
  }
}

const changePassword = async (email, password, newPassword) => {
  try {
    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    )
    await auth.currentUser.reauthenticateWithCredential(credential)
    await auth.currentUser.updatePassword(newPassword)
    return 'OK'
  } catch (err) {
    console.log(err)
    return transformerUtils.mapLoginErrorCodes(err.code)
  }
}

const getIdToken = async () => {
  try {
    return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
  } catch (err) {
    console.log(err)
  }
}

const getRole = async () => {
  try {
    const result = await firebase.auth().currentUser.getIdTokenResult()
    const role = result && result.claims && result.claims.role
    return role
  } catch (err) {
    console.log(err)
  }
}

const reauthenticate = async (email, password) => {
  try {
    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    )
    await firebase.auth().currentUser.reauthenticateWithCredential(credential)
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
  updateProfile,
  changePassword,
  getIdToken,
  getRole,
  reauthenticate
}
