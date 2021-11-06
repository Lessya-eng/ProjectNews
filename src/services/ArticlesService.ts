import { BaseService } from "./BaseService";


class ArticlesAPIService extends BaseService {
    public async getArticles() {
        return this.get("?_limit=9");
    }

    public async getSelectedArticle(id: any) {
        return this.get(`${id}`);
    }
    public async getPaginationArticle(skipSize: number) {
        return this.get(`?_limit=9&_start=${skipSize}`);
    }

    public async getSortedArticle(value: string) {
        return this.get(`?_limit=9&_sort=${value}`);
    }

    public async getSearchArticle(search: string) {
        return this.get(`?_limit=9&title_contains=${search}`);
    }

}

export const ArticlesService = new ArticlesAPIService();