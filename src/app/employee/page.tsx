import GenericTable from "@/components/table/GenericTable";


import {columns, users} from '../../components/table/data'

export default function Employee(){
    return (
        <div className="w-full">
            <GenericTable columns={columns} items={users}/>
        </div>
    )
}