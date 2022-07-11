// pages/index.tsx

import type { ReactElement } from 'react'
import Layout from '../layout'
import type { NextPageWithLayout } from '../../_app'
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import requests from "../../../../utils/requests";

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 70},
  {field: 'firstName', headerName: 'First name', width: 130},
  {field: 'lastName', headerName: 'Last name', width: 130},
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
  {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
  {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
  {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
  {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
  {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
  {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
  {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
  {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
];

const Page: NextPageWithLayout = () => {

  React.useEffect(() => {
    /*    fetch('http://localhost:8080', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify(data),
        })
          .then(res => res.json())
          .then(res => {
            console.log(res)
          })*/


    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    // const request = await fetch('http://localhost:8080').then((res) => res.json())

  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Link href={`/admin/books`}>
          <a>testtttt</a>
        </Link>
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
          <div style={{height: 400, width: '100%'}}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
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