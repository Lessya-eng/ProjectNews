import { BaseService } from "./BaseService";


class BlogsAPIService extends BaseService {

    public async getBlogs() {
        return this.get("?_limit=9");
    }

    public async getSelectedBlog(id: number) {
        return this.get(`${id}`);
    }
    public async getPaginationBlog(skipSize: number) {
        return this.get(`?_limit=9&_start=${skipSize}`);
    }

    public async getSortedBlog(value: string) {
        return this.get(`?_sort=${value}`);
    }

    public async getSearchBlog(search: string) {
        return this.get(`?title_contains=${search}`);
    }
}

export const BlogsService = new BlogsAPIService();