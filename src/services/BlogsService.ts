import { BaseService } from "./BaseService";


class BlogsAPIService extends BaseService {

    public async getBlogs() {
        return this.get("?_limit=18");
    }

    public async getSelectedBlog(id: number) {
        return this.get(`${id}`);
    }
}

export const BlogsService = new BlogsAPIService();