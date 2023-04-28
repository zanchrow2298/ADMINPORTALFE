﻿import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Sidenav from './sidenav'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import Edituser from './edituser'






export default function DataGridDemo() {




    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          editable: false,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
          editable: false,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
          editable: false,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
          field: 'update',
          headerName: '',
          width: 110,
          renderCell: (params) => (
            <strong>
              <div className='list-viewer'>
            <List>{dialogIsOpen}</List>
            <Edituser open={dialogIsOpen} onClose={closeDialog} />
          </div>
      
            </strong>
          ),
        },
      ];
      
      
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
      ];
      
      const handleUpdate = (row) => {
        // handle updating the row here
        console.log('updating row:', row);
      };
      

    const [dialogIsOpen, setDialogIsOpen] = React.useState(false)

    const openDialog = () => setDialogIsOpen(true)
  
    const closeDialog = () => setDialogIsOpen(false)
    
  return (
    <Sidenav>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
        />
      </Box>
    </Sidenav>
  );
}
