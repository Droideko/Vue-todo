class LocalStorage {
  static storage = localStorage;

  setItem = (key, value) => {
    LocalStorage.storage.setItem(key, JSON.stringify(value));
  }

  getItem = (key, defaultValue) => {
    try {
      return JSON.parse(LocalStorage.storage.getItem(key));
    } catch (err) {
      return defaultValue || null;
    }
  }

  removeItem = (key) => {
    LocalStorage.storage.removeItem(key);
  }
}

export default new LocalStorage();
