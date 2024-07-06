export interface Article {
    match_params: string[];
    title: string;
    content: any;
    author: string;
    date: Date;
    tags: string[];
    preview: string;
    banner: string;
}