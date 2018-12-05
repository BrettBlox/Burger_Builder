import axios from "axios";

const instance = axios.create({
  baseURL: "https://reactburger-7f7a2.firebaseio.com/"
});

instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export default instance;
