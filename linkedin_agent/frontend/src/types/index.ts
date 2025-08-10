export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Post {
    id: string;
    userId: string;
    content: string;
    createdAt: Date;
}

export interface Comment {
    id: string;
    postId: string;
    userId: string;
    content: string;
    createdAt: Date;
}