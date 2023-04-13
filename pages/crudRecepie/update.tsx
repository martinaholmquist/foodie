import { NextPage } from 'next'

type UpdateRecepie = {
  id: string
  title: string
  ingredients: string
  intructions: string
  authorId: string
  image: string
}

interface Props {}

const Update: NextPage<Props> = ({}) => {
  return <div></div>
}

export default Update