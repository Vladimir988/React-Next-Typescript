export interface PostsInterface {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostInterface {
    body: PostsInterface;
    comments: CommentsInterface[];
}

export interface CommentsInterface {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}