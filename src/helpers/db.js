import { db, auth } from '../services/firebase';
import constants from '../utils/constants';

const asyncForEach = async (dataSnapshot, childFunction) => {
  const promise = [];
  await dataSnapshot.forEach(async childSnapshot => {
    const res = await childFunction(childSnapshot);
    promise.push(res);
  });
  await Promise.all(promise);
};

// https://firebase.google.com/docs/firestore/query-data/get-data
const actions = {
  currentUser: auth().currentUser,
  getMovies: async () => {
    try {
      const data = [];
      const ref = db.collection(constants.firebase.disney_movies);
      const snapshot = await ref.get();

      await asyncForEach(snapshot, async (doc) => { data.push({ ...doc.data() || {}, id: doc.id }) });

      return {
        success: true,
        data,
      }
    } catch (error) {
      return {
        success: false,
        error: { message: error.message, code: error.code },
      }
    }
  },
  getMovie: async (id) => {
    try {
      const ref = db.collection(constants.firebase.disney_movies).doc(id);
      const doc = await ref.get();

      if (doc.exists) {
        return {
          success: true,
          data: { ...doc.data(), id: doc.id },
        }
      } else {
        return {
          success: false,
          error: { message: 'Movie not found.', code: 'not-found' },
        }
      }
    } catch (error) {
      return {
        success: false,
        error: { message: error.message, code: error.code },
      }
    }
  },
};

export default actions;