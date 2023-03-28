import React, { useMemo, useState } from "react";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";

import { users } from "../../assets/MOCK_DATA";
import { Fields } from "../../Types/Table-Types";
import { disabledFeatures, enabledFeatures, paginationProps } from "../../Constants/constants";

export interface User {}

const Table = () => {
  const [tableData, setTableData] = useState<User[]>(users);

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      { accessorKey: Fields.name, header: Fields.designation },
      { accessorKey: Fields.designation, header: Fields.designation },
      { accessorKey: Fields.industry, header: Fields.industry },
      { accessorKey: Fields.email, header: Fields.email },
      { accessorKey: Fields.phone, header: Fields.phone },
      { accessorKey: Fields.country, header: Fields.country },
    ],

    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={tableData}
      {...enabledFeatures}
      {...paginationProps}
      {...disabledFeatures}
    />
  );
};

export default Table;
