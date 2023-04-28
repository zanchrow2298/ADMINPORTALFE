import React, { useEffect, useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Height } from "@mui/system";


const getuser = () => {
    // const [openDialog, handleDisplay] = React.useState(false);

    const data = [{ "fName": "Thristan", "lName": "Layog", "BirthDate": "10-10-2023", "Address": "Batangas" }]

    return (
        <Table >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Birth Date</Table.HeaderCell>
                    <Table.HeaderCell>Address</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {data.map((item, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{item.fName}</Table.Cell>
                        <Table.Cell>{item.lName}</Table.Cell>
                        <Table.Cell>{item.BirthDate}</Table.Cell>
                        <Table.Cell>{item.Address}</Table.Cell>
                        <Table.Cell>
                            <Button /*onClick={() => updatedata(item)}*/>Update</Button>
                        </Table.Cell>
                    </Table.Row>

                ))}
            </Table.Body>
        </Table>
    )
}

export default getuser;