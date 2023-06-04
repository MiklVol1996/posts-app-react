import axios from "axios";

class PostService {
    static async fetchPosts(page, limit = 10) {
        let responce = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
        return responce;
    }
}

export default PostService;