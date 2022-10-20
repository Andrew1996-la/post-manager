import axios from "axios";

class PostApi {
  getPost() {
    const posts = axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    return posts;
  }
}

export default new PostApi();
