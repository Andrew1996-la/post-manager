import axios from "axios";

class PostApi {
  getPost(limit, page) {
    const posts = axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    return posts;
  }
}

export default new PostApi();
