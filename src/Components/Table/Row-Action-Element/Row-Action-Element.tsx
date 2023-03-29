import { type MRT_Row } from "material-react-table";

import { User } from "../../../Types/Table-Types";
import { rowActionsStack } from "./styles";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import Stack from "@mui/material/Stack";

const returnRowJSX = (
  row: MRT_Row<User>,
  deleteColumn: (row: MRT_Row<User>) => void
): JSX.Element => {
  return (
    <Stack sx={rowActionsStack}>
      <button
        style={{ all: "unset", display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => console.log("row => ", row)}
      >
        <div style={{ maxHeight: "1rem", maxWidth: "1rem" }}>
          <AiFillEdit size={17.5} color={"#0884FF"} />
        </div>
      </button>
      <button
        style={{ all: "unset", display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => deleteColumn(row)}
      >
        <div style={{ maxHeight: "1rem", maxWidth: "1rem" }}>
          <AiFillDelete size={17.5} color={"#F81D1D"} />
        </div>
      </button>
    </Stack>
  );
};

export default returnRowJSX;
