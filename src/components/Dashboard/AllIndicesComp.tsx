import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'indexSymbol',
    headerName: 'Index Name',
    width: 150,
    
  },
  {
    field: 'open',
    headerName: 'Open',
    width: 150,
    
  },
  {
    field: 'close',
    headerName: 'Close',
    width: 110,
    
  },
  {
    field: 'change',
    headerName: 'Change',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    
  },

   {
    field: 'perChange',
    headerName: 'Percent Change',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    
  },
];

const rows = [
  { id: 1, lastName: 'Snow', indexSymbol: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', indexSymbol: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', indexSymbol: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', indexSymbol: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', indexSymbol: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', indexSymbol: null, age: 150 },
  { id: 7, lastName: 'Clifford', indexSymbol: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', indexSymbol: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', indexSymbol: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: '800', width: '97%',position: "fixed", top: 90,marginLeft:2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[15]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
