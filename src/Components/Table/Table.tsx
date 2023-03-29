import { useMemo, useState } from "react";
import MaterialReactTable, { MRT_Row, type MRT_ColumnDef } from "material-react-table";

import { users } from "../../assets/MOCK_DATA";
import { Fields, User } from "../../Types/Table-Types";
import { disabledFeatures, enabledFeatures, paginationProps } from "../../Constants/constants";

import rowJSX from "./Row-Action-Element/Row-Action-Element";

const Table = () => {
  const [tableData, setTableData] = useState<User[]>(users);

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      { accessorKey: Fields.name, header: Fields.name, maxSize: 100 },
      { accessorKey: Fields.designation, header: Fields.designation },
      { accessorKey: Fields.industry, header: Fields.industry, maxSize: 100 },
      { accessorKey: Fields.email, header: Fields.email, maxSize: 80 },
      { accessorKey: Fields.phone, header: Fields.phone, maxSize: 100 },
      { accessorKey: Fields.country, header: Fields.country, maxSize: 50 },
    ],

    []
  );

  const deleteColumn = (row: MRT_Row<User>) => {
    if (!confirm(`Are you sure you want to delete ${row.getValue(Fields.name)}`)) {
      return;
    }

    const index = row.index;

    setTableData((prevState) => {
      prevState.splice(index, 1);
      return structuredClone(prevState);
    });
  };

  const editColumn = (row: MRT_Row<User>) => {
    const index = row.index;
  }

  return (
    <MaterialReactTable
      columns={columns}
      data={tableData}
      {...enabledFeatures}
      {...paginationProps}
      {...disabledFeatures}
      positionActionsColumn="last"
      renderRowActions={({ row }) => rowJSX(row, deleteColumn)}
    />
  );
};

export default Table;
