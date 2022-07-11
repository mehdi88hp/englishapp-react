import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from '../../components/admin/Orders';
import type { ReactElement } from 'react'
import Layout from './layout'
import type { NextPageWithLayout } from '../_app'
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Link href={`/admin/books`}>
          <a>testtttt</a>
        </Link>
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
          <Orders/>
        </Paper>
      </Grid>
    </Grid>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page