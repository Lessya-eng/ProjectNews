import { BaseService } from "./BaseService";


class ReportsAPIService extends BaseService {
    public async getReports() {
        return this.get("?_limit=18");
    }

    public async getSelectedReport(id: number) {
        return this.get(`${id}`);
    }
}

export const ReportsService = new ReportsAPIService();