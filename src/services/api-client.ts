import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cb89e71060fc47799c79cb16445aefe6",
  },
});
