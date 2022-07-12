import type { ReactElement } from 'react'
import Layout from '../layout'
import type { NextPageWithLayout } from '../../_app'
import * as React from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, FormControl, OutlinedInput, TextField, Input } from "@mui/material";
import { height } from "@mui/system";
import axios from "axios";
import getConfig from 'next/config'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

const Page: NextPageWithLayout = () => {

  const [form, setForm] = React.useState({});

  const sendTheForm = function (e) {
    e.preventDefault();

    axios.post(publicRuntimeConfig.ADMIN_API + '/todos/1', {...form}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log('error', err.response)
    })
  }

  const setFormField = fieldName => e => setForm({...form, [fieldName]: e.target.value});

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
          <FormControl sx={{m: 2}}>
            <TextField
              id="title_en"
              onKeyUp={setFormField('titleEn')}
              label="english title" color="secondary"/>
          </FormControl>

          <FormControl sx={{m: 2}}>
            <TextField
              id="title_fa"
              sx={{direction: 'rtl'}}
              onKeyUp={setFormField('titleFa')}
              label="farsi title" color="secondary"/>
          </FormControl>


          <FormControl sx={{m: 2}}>
            <TextField
              label="english description"
              multiline
              id="description_en"
              onKeyUp={setFormField('descriptionEn')}
              placeholder="Please enter text"/>
          </FormControl>

          <FormControl sx={{m: 2}}>
            <TextField
              rtl
              sx={{direction: 'rtl'}}
              label="farsi description"
              multiline
              id="description_fa"
              onKeyUp={setFormField('descriptionFa')}
              placeholder="Please enter text"/>
          </FormControl>

          <Button variant="outlined" color="info" onClick={sendTheForm}>submit</Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page