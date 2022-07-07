import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'book', headerName: 'book', width: 130 },
  { field: 'author', headerName: 'author', width: 130 },
  {
    field: 'rating',
    headerName: 'rating',
    type: 'number',
    width: 90,
  },
  {
    field: 'pages',
    headerName: 'pages',
    type: 'number',
    width: 90,
  },
  {
    field: 'duration',
    headerName: 'duration',
    type: 'number',
    width: 90,
  },
  { field: 'categories', headerName: 'categories', width: 160 },
  { field: 'publisher', headerName: 'publisher', width: 130 },
  { field: 'relased', headerName: 'relased', width: 130 },
];

const rows = [
  { id: 1, author: 'Snow', book: 'Jon', rating: 35 ,pages: 10, duration: 6, categories: ['romance', 'dark'], publisher:'hp publisher', relased:'12 august 2021'},
  { id: 2, author: 'Lannister', book: 'Cersei', rating: 42,pages: 10 , duration: 6, categories: ['romance', 'dark'], publisher:'hp publisher', relased:'12 august 2021'},
  { id: 3, author: 'Lannister', book: 'Jaime', rating: 45 ,pages: 10, duration: 46, categories: ['romance', 'dark'], publisher:'hp publisher', relased:'12 august 2021'},
  { id: 4, author: 'Stark', book: 'Arya', rating: 16,pages: 10, duration: 82, categories: ['romance', 'dark'] , publisher:'hp publisher', relased:'12 august 2021'},
  { id: 5, author: 'Targaryen', book: 'Daenerys', rating: 5,pages: 10, duration: 25, categories: ['romance', 'dark'], publisher:'hp publisher', relased:'12 august 2021' },
  { id: 6, author: 'Melisandre', book: null, rating: 150,pages: 10, duration: 6, categories: ['romance', 'dark'], publisher:'hp publisher', relased:'12 august 2021' },
  { id: 7, author: 'Clifford', book: 'Ferrara', rating: 44,pages: 10, duration: 6 , categories: ['romance', 'dark'], publisher:'hp publisher', relased:'12 august 2021'},
  { id: 8, author: 'Frances', book: 'Rossini', rating: 36,pages: 10, duration: 6, categories: ['romance', 'dark'], publisher:'hp publisher', relased:'12 august 2021' },
  { id: 9, author: 'Roxie', book: 'Harvey', rating: 65,pages: 10, duration: 6, categories: ['romance', 'dark'], publisher:'hp publisher', relased:'12 august 2021' },
];

export default function Orders() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
