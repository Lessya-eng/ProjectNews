import { BaseService } from "./BaseService";


class ReportsAPIService extends BaseService {
    public async getReports() {
        return this.get("?_limit=9");
    }

    public async getSelectedReport(id: number) {
        return this.get(`${id}`);
    }
    public async getPaginationReport(skipSizeReport: number) {
        return this.get(`?_limit=9&_start=${skipSizeReport}`);
    }

    public async getSortedReport(value: string) {
        return this.get(`?_sort=${value}`);
    }

    public async getSearchReport(search: string) {
        return this.get(`?title_contains=${search}`);
    }
}

export const ReportsService = new ReportsAPIService();