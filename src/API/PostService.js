import axios from "axios";

class PostService {
    static async fetchPosts(page, limit = 10) {
        let str = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`;
        let responce = await axios.get(str);
        return responce;
    }
}

export default PostService;