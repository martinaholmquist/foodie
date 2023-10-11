export type Recepie = {
  title: string
  servings: string
  time: string
  ingredients: [string]
  intructions: [string]
  kuriosa: string
  image: string
  id: any
  likes: [string]
  author: {
    id: string
    name: string
    profileImage: string
  }
}
