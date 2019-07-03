export interface KnowledgeArticle {
    id: string;
    title: string;
    url: string;
    content?: string;
    provider?: string;
    // renderType: string;
    // renderValue: string;
    publishedDate?: Date;
    lastUpdatedDate?: Date;
    author?: string;
    views?: number;
    likes?: number;
    dislikes?: number;
    tags?: string[];
}
