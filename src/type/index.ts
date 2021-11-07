export interface INews {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    updatedAt: string;
    featured: boolean;
    launches: ILaunches;
    events: IEvents;
}
export interface ILaunches {
    id: string;
    provider: string;
}
export interface IEvents {
    id: string;
    provider: string;
}
