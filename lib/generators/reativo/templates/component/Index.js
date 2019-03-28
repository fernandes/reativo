import { hot } from 'react-hot-loader/root'
import React from 'react'

import Button from '@material-ui/core/Button'
import MaterialTable from 'material-table'
import { wrapper } from "reativo"

function Index({model, rows}) {
  return (
    <>
      <MaterialTable
        columns={[
          { title: 'ID', field: 'id' },
          <%- options[:properties].each do |prop| -%>
          { title: '<%= prop.humanize %>', field: '<%= prop %>' },
          <%- end -%>
        ]}
        data={model}
        title="<%= model_name_plural %>"
        actions={[
          rowData => ({
            icon: 'create',
            iconProps: {'data-testid': `edit-${rowData.id}`},
            tooltip: 'Edit <%= model_name_singular %>',
            onClick: (event, rowData) => {
              Turbolinks.visit(`/<%= collection_path %>/${rowData.id}/edit`)
            },
          })
        ]}
        options={{
          columnsButton: true,
          exportButton: true,
          actionsColumnIndex: -1,
        }}
        detailPanel={rowData => {
          return (
            <pre>
            {rowData.key}
            </pre>
          )
        }}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
      />
      <Button variant="contained" color="secondary" href="/<%= collection_path %>/new">
        New <%= model_name_singular %>
      </Button>
    </>
  )
}

export default hot(wrapper(Index))
