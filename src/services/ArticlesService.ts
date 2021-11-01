import { BaseService } from "./BaseService";


class ArticlesAPIService extends BaseService {

    public async getArticles() {
        return this.get("?_limit=9");
    }

    public async getSelectedArticle(id: any) {
        return this.get(`${id}`);

    }
    public async getPaginationArticle(skipSize: number) {
        return this.get(`?_start=${skipSize}`);

    }
}

export const ArticlesService = new ArticlesAPIService();