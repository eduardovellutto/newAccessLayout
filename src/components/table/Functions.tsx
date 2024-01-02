import { EditIcon, DeleteIcon } from "@/app/icons/icons"
import { Tooltip, Chip, ChipProps } from "@nextui-org/react"

const renderCell = (user: any, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof any]

    const statusColorMap: Record<string, ChipProps["color"]> = {
        active: "success",
        inactive: "danger",
        suspended: "warning",
    };

        switch (columnKey) {
            case 'actions':
                return (
                    <div className= 'flex items-center justify-center gap-4'>
                        <Tooltip content='Edit user'>
                            <span className='cursor-pointer text-lg text-default-400 active:opacity-50'>
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color='danger' content='Delete user'>
                            <span className='cursor-pointer text-lg text-danger active:opacity-50'>
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                )
            case 'status':
            return (
              <Chip className="uppercase" color={statusColorMap[user.status]} size="sm" variant="flat">
                {cellValue}
              </Chip>
            );
            case 'employeeSex':
                if (cellValue === undefined || cellValue === "")
                    return (toUpperCase("Não Informado"))
                else
                    return ( toUpperCase(cellValue))
                ;
          default:
            return toUpperCase(cellValue)
        }

}

const selectEnum = () =>{

}



const toUpperCase = (text?: string) => {
    return text?.toUpperCase()
}


export { renderCell }