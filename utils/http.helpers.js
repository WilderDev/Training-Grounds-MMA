import axios from "axios";

export const fetcher = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const sender = async (url, data) => {
  try {
    const res = await axios.post(url, data);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};
