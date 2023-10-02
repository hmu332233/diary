import type { AuthError } from 'firebase/auth';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';
import app from '../config/firebaseConfig';

function isAuthError(error: any): error is AuthError {
  return error && 'code' in error && 'message' in error;
}

export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const userCredential: UserCredential = await signInWithPopup(
      auth,
      googleProvider,
    );
    const user = userCredential.user;
    return user;
  } catch (error: unknown) {
    if (isAuthError(error)) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // TODO: 에러 처리
    } else {
      throw error;
    }
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error: unknown) {
    if (isAuthError(error)) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // TODO: 에러 처리
    } else {
      throw error;
    }
  }
};
