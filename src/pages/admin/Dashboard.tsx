import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from '../../components/admin/Orders';
import type { ReactElement } from 'react'
import Layout from './layout'
import type { NextPageWithLayout } from '../_app'
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from "@slices/counterSlice";
import { selectCount } from "@slices/counterSlice";


const Page: NextPageWithLayout = () => {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <button className="btn btn-active" onClick={() => dispatch(increment())}>increment</button>
        <button className="btn btn-active" onClick={() => dispatch(decrement())}>decrement</button>

        <Link href={`/admin/books`}>
          <a>testtttt {count}</a>
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