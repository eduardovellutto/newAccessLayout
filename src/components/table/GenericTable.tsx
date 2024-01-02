'use client'

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/table'
import { renderCell } from './Functions'
import { Pagination } from '@nextui-org/react'
import { useMemo, useState } from 'react'


interface GenericTableProps{
	items:any[]
	columns: any[]
}

export default function GenericTable({ items, columns } : GenericTableProps){

	const rowsPerPage = 5
	const [page, setPage] = useState(1)
	const pages = Math.ceil(items.length / rowsPerPage)

	const rows = useMemo(() => {
		const start = (page - 1) * rowsPerPage
		const end = start + rowsPerPage
	
		return items.slice(start, end)
	  }, [page, items])


    return(
		<div className='w-full'>
			<Table aria-label="Tabela"
			bottomContentPlacement='outside'
			bottomContent={
				<div className='flex w-full justify-center'>
				  <Pagination
					isCompact
					showControls
					showShadow
					color='secondary'
					page={page}
					total={pages}
					onChange={page => setPage(page)}
				  />
				</div>
			  }>
      			<TableHeader columns={columns}>
					{column => (
						<TableColumn key={column.key}> {column.label} </TableColumn>
        			)}
      			</TableHeader>
      			<TableBody items={rows} emptyContent={'Não exitem regitros.'}>
        			{row => (
        	  			<TableRow key={row.id}>
        	    			{(columnKey) => 
									<TableCell> 
										{renderCell(row, columnKey)} 
									</TableCell>
							}
        	  			</TableRow>
        			)}
      			</TableBody>
    		</Table>
		</div>
    )
}