import jwt_decode from "jwt-decode";

class LocalStorageManager {
  getItem(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error retrieving data from local storage:", error);
      return null;
    }
  }

  setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error storing data to local storage:", error);
    }
  }
  decodedJwt(value) {
    const decodedUserData = jwt_decode(value);

    return decodedUserData;
  }

  removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing data from local storage:", error);
    }
  }
}

export default LocalStorageManager;
