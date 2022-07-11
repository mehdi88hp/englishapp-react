// pages/index.tsx

import type { ReactElement } from 'react'
import Layout from '../layout'
import type { NextPageWithLayout } from '../../_app'
import * as React from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";

const Page: NextPageWithLayout = () => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>

        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
          <TextField label="Outlined secondary" color="secondary" focused/>
        </Paper>
      </Grid>
    </Grid>
  );
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