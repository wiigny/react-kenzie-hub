import { Api } from "../Api";

export const Post = async (data, resp, err, endpoint) => {
  try {
    const response = await Api.post(endpoint, data);

    resp(response);
  } catch (error) {
    err(error);
  }
};
