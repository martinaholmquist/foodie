import WeebPageLayout from "@/components/newRecepieComponents/weebPageLayout"
import { NextPage } from "next"

/* TODO - 
Skapa funktionalitet till sidan
Skapa post
Skapa linje under Publicera
fixa knapp
justera om så knapp alltid syns
 */

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <WeebPageLayout />
    </div>
  )
}

export default Index
