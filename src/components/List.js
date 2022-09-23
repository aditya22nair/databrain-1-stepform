import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function List({formData}) {


  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">email id</TableCell>
            <TableCell align="center">firstname</TableCell>
            <TableCell align="center">lastname</TableCell>
            <TableCell align="center">nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {formData.map((row) => ( */}
            <TableRow
            //   key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{formData.email}</TableCell>
              <TableCell align="center">{formData.firstName}</TableCell>
              <TableCell align="center">{formData.lastName}</TableCell>
              <TableCell align="center">{formData.nationality}</TableCell>

            </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List