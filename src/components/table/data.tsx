const employeeSex = [
  {
      "Id": 0,
      "Name": "NÃO INFORMADO"
  },
  {
      "Id": 1,
      "Name": "MASCULINO"
  },
  {
      "Id": 2,
      "Name": "FEMININO"
  }
]

const columns = [
    {label: "NOME", key: "name"},
    {label: "TIPO", key: "type"},
    {label:"SEXO", key:"employeeSex"},
    {label: "STATUS", key: "status"},
    {label: "", key: "actions"},
  ];

  const users = [
    {
      id: 1,
      name: "Tony Reichert",
      role: "CEO",
      team: "Management",
      status: "active",
      type: "Proprio",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
    },
    {
      id: 2,
      name: "Zoey Lang",
      role: "Technical Lead",
      team: "Development",
      status: "suspended",
      type: "Proprio",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: "zoey.lang@example.com",
      employeeSex: "Feminino"
    },
    {
      id: 3,
      name: "Jane Fisher",
      role: "Senior Developer",
      team: "Development",
      status: "active",
      type: "Terceiro",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      email: "jane.fisher@example.com",
      employeeSex: "Feminino"
    },
    {
      id: 4,
      name: "William Howard",
      role: "Community Manager",
      team: "Marketing",
      status: "inactive",
      type: "Proprio",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      email: "william.howard@example.com",
      employeeSex: "MAsculino"
    },
    {
      id: 5,
      name: "Kristen Copper",
      role: "Sales Manager",
      team: "Sales",
      status: "active",
      type: "Terceiro",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      email: "kristen.cooper@example.com",
      employeeSex: "Não informado"
    },
  ];

export {columns, users};