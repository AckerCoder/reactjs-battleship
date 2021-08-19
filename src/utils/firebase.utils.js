import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAlTCoqGE-5k4utwucWGqHyoKMkuRA7Rew",
  authDomain: "react-battleship-4d487.firebaseapp.com",
  projectId: "react-battleship-4d487",
  storageBucket: "react-battleship-4d487.appspot.com",
  messagingSenderId: "808226920646",
  appId: "1:808226920646:web:8b7600b2661532be131fc7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

export const getScores = async () => {
  let scores = [];
  const scoresRef = firestore.collection("scores");
  const scoresSnapShot = await scoresRef.get();
  const scoresList = scoresSnapShot.docs;

  scoresList.map((score) => scores.push(score.data()));

  scores.sort((a, b) => b.score - a.score);
  return scores;
};

export const addScore = async (userName, score) => {
  const data = {
    playerName: userName,
    score: score,
  };
  const res = await firestore.collection("scores").doc().set(data);
  return res;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
