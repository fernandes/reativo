import React from 'react';
import { hot } from 'react-hot-loader/root'
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button'
import { wrapper } from "reativo"

function Index({model, rows}) {
  return (
    <>
      <MaterialTable
        columns={[
          { title: 'ID', field: 'id' },
          { title: 'Title', field: 'title' },
          {
            title: 'Completed',
            field: 'completed',
            render: rowData => {
              const text = rowData.completed ? 'Done' : 'Pending'
              const color = rowData.completed ? '#4CAF50' : '#f44336'
              return (
                <div style={{ width: '100%', backgroundColor: '#ddd', height: 20 }}>
                  <div
                    style={{
                      textAlign: 'left',
                      padding: 1,
                      color: 'white',
                      width: '100%',
                      backgroundColor: color,
                      height: 20,
                    }}
                  >
                    {text}
                  </div>
                </div>
              )
            },
          },
        ]}
        data={model}
        title="Todos"
        actions={[
          {
            icon: 'done',
            tooltip: 'Show Todo Info',
            onClick: (event, rowData) => {
              Turbolinks.visit(`/todos/${rowData.id}`)
            },
          },
          rowData => ({
            icon: 'create',
            iconProps: {'data-testid': `edit-${rowData.id}`},
            tooltip: 'Edit Todo Info',
            onClick: (event, rowData) => {
              Turbolinks.visit(`/todos/${rowData.id}/edit`)
            },
          }),
          {
            icon: 'delete_outline',
            tooltip: 'Delete Todo',
            onClick: (event, rowData) => {
              alert('Deleting ' + rowData.name)
            },
            iconProps: {
              style: {
                fontSize: 30,
                color: '#ff8282',
              },
            },
          },
        ]}
        options={{
          columnsButton: true,
          exportButton: true,
          actionsColumnIndex: -1,
        }}
      />
      <Button variant="contained" color="secondary" href="/todos/new">
        New Todo
      </Button>
    </>
  );
}

export default hot(
  wrapper(Index)
)
