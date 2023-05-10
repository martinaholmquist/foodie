import { Layout } from "@/components/layout"
import SearchInput from "@/components/searchInput"

//import RenderOutRecepiesModals from "@/components/modals/homeModalNew"

import { NextPage } from "next"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-10 items-center p-6">
          <SearchInput />
        </div>
        <div>här kommer search-fältet</div>
      </Layout>
    </>
  )
}

export default Index
