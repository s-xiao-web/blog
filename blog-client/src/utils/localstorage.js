class LocalUtil {

  setLocal(key, val) {
    return localStorage.setItem(key, val);
  }

  getLocal(key) {
    return localStorage.getItem(key);
  }

  removeLocal(key) {
    return localStorage.removeItem(key);
  }

}

const localUtil = new LocalUtil();

export default localUtil;