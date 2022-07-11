// pages/index.tsx

import type { ReactElement } from 'react'
import Layout from '../layout'
import type { NextPageWithLayout } from '../../_app'

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {/*<NestedLayout>{page}</NestedLayout>*/}
      from component
      {page}
    </Layout>
  )
}

export default Page