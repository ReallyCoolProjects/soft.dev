export interface UserInterface  {
    id: string,
    email: string,
    profileImage: string,
    socials: string[],
    role: string[],
    skills: string[],
    name: string,
    username: string,
    bio: string,
    posts: PostInterface[],
    authorId: string,
    favoritePosts: string[],
    followers: string[],
    following: string[]
}

export interface PostInterface {
    id: number,
    title: string,
    content: string,
    summary: string,
    image_url: string,
    author: string,
    authorId: number,
    slug: string
}
