export interface List<Type>{
    data: Type[]
    total: number
    page: number
    limit: number
    }

export interface PostPreview{
    id: string
    text: string
    image: string
    likes: number
    tags: []
    publishDate: string
    owner: object
    }


   export interface PostCreate

{
text: string
image: string
likes: number
tags: []
owner: string
}

 export interface Post

{
id: string
text: string
image: string
likes: number
link: string
tags: []
publishDate: string
owner: object
}