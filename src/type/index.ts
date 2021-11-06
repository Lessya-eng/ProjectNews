export interface IArticle {
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

export interface IBlog {
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
    events: string[];
}

export interface IReport {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    updatedAt: string;
}

