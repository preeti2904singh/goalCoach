import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDr9DygQo4y1yV-QpUKDt_MxOVJx7amaX0",
    authDomain: "goalcoach-2904.firebaseapp.com",
    databaseURL: "https://goalcoach-2904.firebaseio.com",
    projectId: "goalcoach-2904",
    storageBucket: "",
    messagingSenderId: "168875190181"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');

  