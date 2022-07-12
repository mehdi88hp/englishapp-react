// pages/index.tsx

import type { ReactElement } from 'react'
import Layout from '../layout'
import type { NextPageWithLayout } from '../../_app'
import * as React from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, FormControl, OutlinedInput, TextField, Input } from "@mui/material";
import { height } from "@mui/system";
import axios from "axios";

const Page: NextPageWithLayout = () => {

  const [form, setForm] = React.useState({});

  const sendTheForm = function (e) {
    e.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/todos/1', {...form}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log('error', err.response)
    })
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
          <FormControl sx={{m: 2}}
          >
            <TextField
              id="title"
              onKeyUp={e => setForm({...form, title: e.target.value})}
              label="title" color="secondary" multiline/>
          </FormControl>

          <FormControl sx={{m: 2}}>
            <TextField
              label="slug"
              id="slug"
              onKeyUp={e => setForm({...form, slug: e.target.value})}
              placeholder="Please enter text"/>
          </FormControl>
          <Button variant="text" onClick={sendTheForm}>submit</Button>
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