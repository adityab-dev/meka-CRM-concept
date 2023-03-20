import { BsFilter, BsCalendarDate } from "react-icons/bs";
import { AiOutlineDown, AiFillDelete, AiOutlineArrowRight } from "react-icons/ai";
import { MdDeleteForever, MdOutlineImportExport } from "react-icons/md";
import { CiExport } from "react-icons/ci";
import { ImBin } from "react-icons/im";
import { FaCheck } from "react-icons/fa";

import successfullyDeleted from "../../assets/successful-deletion.png";

import { Stack, Button, Box, Typography } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";
import { Paper } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import { Autocomplete, TextField, Chip } from "@mui/material";
import { FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material";

import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import Divider from "@mui/material/Divider";

// TODO: -pro is paid.
// import { DateRangePicker } from '@mui/x-date-pickers-pro';

import { useState } from "react";

import "./Dashboard.css";
import { Padding } from "@mui/icons-material";
import { ButtonsStack } from "../../Components/dashboard-components/buttons-stack/buttons-stack";
import { FilterButton } from "../../Components/dashboard-components/buttons/filter-buttons";
import { DashboardMain } from "../../Components/dashboard-main/dashboard-main";
import { DashboardHeader } from "../../Components/dashboard-header/dashboard-header";
import { DashboardList } from "../../Components/dashboard-list/Dashboard-list";

export const boxStyles = {
  height: "35rem",
  width: "35rem",
  borderRadius: "15px",
  backgroundColor: "#FBFBFB",
  marginLeft: "5rem",
};

// TODO: left margin unmodifiable.
export const buttonStyles = {
  backgroundColor: "white",
  boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.1)",
  color: "black",
  textTransform: "none",
  borderRadius: "10px",
  "&.MuiButton-endIcon": {
    marginLeft: "0",
  },
};

export const typoStyles = {
  paddingLeft: "0.25rem",
  marginRight: "0.25rem",
};

export const listItemsStyles = {
  ".MuiTypography-root": {
    fontSize: "1rem",
    fontWeight: "bold",
    fontFamily: "Titillium Web",
  },
};

export const paperStyles = {
  height: "500px",
  width: "500px",
  borderRadius: "10px",
};

export const stackStyles = {
  display: "flex",
  flexDirection: "row",
  borderRadius: "5px",
  height: "2.5rem",
  gap: "1rem",
};

export const menuItemBox = {
  width: "100%",
  height: "100%",
  padding: "0",
  margin: "0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
};

export const menuListButtonStyles = {
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.25rem 0.6rem",
  width: "10rem",
  textTransform: "none",
  "&:hover": {
    background: "rgba(255, 235, 218, 0.31)",
    color: "rgba(20, 20, 20, 0.71)",
  },
};

export const menuItemStyles = {
  "&:hover": { background: "rgba(255, 235, 218, 0.31)" },
  padding: "0",
};

const dummyOptions = ["CEO", "CFO", "CTO", "COO"];
const dummyObjOptions = dummyOptions.map((option, index) => {
  return { id: index + 1, label: option };
});

// Checkbox List Menu

// export const Dashboard = () => {
//   const [checkedValues, setCheckedValues] = useState<string[]>([]);
//   console.log("checkedValues", checkedValues);

//   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const checkboxValue = event.target.value;
//     if (checkedValues.indexOf(checkboxValue) === -1) {
//       setCheckedValues((prevState) => {
//         let newState = structuredClone(prevState);
//         newState.push(checkboxValue);
//         return newState;
//       });
//     } else {
//       const index = checkedValues.findIndex((savedValue) => savedValue === checkboxValue);
//       setCheckedValues((prevState) => {
//         prevState.splice(index, 1);
//         return structuredClone(prevState);
//       });
//     }
//   };

//   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

//   const anchorElSetter = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

//   return (
//     <Box>
//       <Box>
//         <Button onClick={anchorElSetter} variant="contained">
//           Open
//         </Button>
//       </Box>

//       <Box>
//         <FormControl>
//           <FormGroup>
//             <Menu
//               open={anchorEl !== null ? true : false}
//               anchorEl={anchorEl}
//               onClose={() => setAnchorEl(null)}
//             >
//               <MenuItem>
//                 <FormControlLabel
//                   label="(CEO)"
//                   control={
//                     <Checkbox
//                       value="CEO"
//                       checked={checkedValues.includes("CEO")}
//                       onChange={changeHandler}
//                     />
//                   }
//                 />
//               </MenuItem>

//               <Divider orientation="horizontal" />

//               <MenuItem>
//                 <FormControlLabel
//                   label="(CFO)"
//                   control={
//                     <Checkbox
//                       value="CFO"
//                       checked={checkedValues.includes("CFO")}
//                       onChange={changeHandler}
//                     />
//                   }
//                 />
//               </MenuItem>

//               <Divider orientation="horizontal" />

//               <MenuItem>
//                 <FormControlLabel
//                   label="(CTO)"
//                   control={
//                     <Checkbox
//                       value="CTO"
//                       checked={checkedValues.includes("CTO")}
//                       onChange={changeHandler}
//                     />
//                   }
//                 />
//               </MenuItem>

//               <Divider orientation="horizontal" />
//             </Menu>
//           </FormGroup>
//         </FormControl>
//       </Box>
//     </Box>
//   );
// };

// Filter Menu

// // TODO: onHover styles !== onFocus
// export const Dashboard = () => {
//   const [anchEl, setAnchrEl] = useState<null | HTMLElement>(null);

//   let openMenu: boolean;

//   if (anchEl === null) openMenu = false;
//   else openMenu = true;

//   const clickHandler = (event: React.MouseEvent<HTMLElement>) => setAnchrEl(event.currentTarget);

//   return (
//     <Box sx={boxStyles}>
//       <Stack sx={stackStyles}>
//         <Button variant="contained" onClick={clickHandler}>
//           Filters
//         </Button>
//       </Stack>

//       {/* TODO: can't change pading top&bottom list as of now */}
//       <Menu id="menu" anchorEl={anchEl} open={openMenu} onClose={() => setAnchrEl(null)}>
//         <MenuItem sx={menuItemStyles}>
//           <Button sx={menuListButtonStyles} onClick={() => console.log("clicked")}>
//             Designation <AiOutlineArrowRight />
//           </Button>
//         </MenuItem>
//         <MenuItem sx={menuItemStyles}>
//           <Button sx={menuListButtonStyles} onClick={() => console.log("clicked")}>
//             Industry <AiOutlineArrowRight />
//           </Button>
//         </MenuItem>
//         <MenuItem sx={menuItemStyles}>
//           <Button sx={menuListButtonStyles} onClick={() => console.log("clicked")}>
//             Country
//             <AiOutlineArrowRight />
//           </Button>
//         </MenuItem>
//         <MenuItem sx={menuItemStyles}>
//           <Button sx={menuListButtonStyles} onClick={() => console.log("clicked")}>
//             Subscribers
//             <AiOutlineArrowRight />
//           </Button>
//         </MenuItem>
//         <MenuItem sx={menuItemStyles}>
//           <Button sx={menuListButtonStyles} onClick={() => console.log("clicked")}>
//             Un-Subscribers
//             <AiOutlineArrowRight />
//           </Button>
//         </MenuItem>
//       </Menu>
//     </Box>
//   );
// };

// Page and Modals

// export const Dashboard = () => {
//   const [showPaper, setShowPaper] = useState<boolean>(false);
//   const [openDialog, setOpenDialog] = useState<boolean>(false);
//   const [openDeletionDialog, setOpenDeletionDialog] = useState<boolean>(false);

//   return (
//     <Box component="section" sx={boxStyles}>
//       <Box>
//         <Button
//           onClick={() => setShowPaper((prevState) => !prevState)}
//           className="align-center"
//           sx={buttonStyles}
//           startIcon={
//             <span className="filter-icon align-center">
//               <BsFilter />
//             </span>
//           }
//           endIcon={
//             <span className="down-icon align-center">
//               <AiOutlineDown />
//             </span>
//           }
//         >
//           Filters <Typography sx={typoStyles}>|</Typography>
//         </Button>
//         {showPaper ? (
//           <Paper elevation={2} sx={paperStyles}>
//             <List sx={listItemsStyles}>
//               <ListItem>
//                 <ListItemText>Today</ListItemText>
//               </ListItem>
//               <ListItem>
//                 <ListItemText>Yesterday</ListItemText>
//               </ListItem>
//               <ListItem>
//                 <ListItemText>Last 7 days</ListItemText>
//               </ListItem>
//               <ListItem>
//                 <ListItemText>This month</ListItemText>
//               </ListItem>
//               <ListItem>
//                 <ListItemText>Last month</ListItemText>
//               </ListItem>
//               <ListItem>
//                 <ListItemText>Last 6 months</ListItemText>
//               </ListItem>
//               <ListItem sx={{ marginBottom: "0.5rem" }}>
//                 <ListItemText>Last year</ListItemText>
//               </ListItem>

//               <ListItem>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     background: "#FE8627",
//                     textTransform: "none",
//                     borderRadius: "6px",
//                     "&:hover": { backgroundColor: "#FE8627" },
//                   }}
//                 >
//                   Custom date{" "}
//                   <Typography sx={{ paddingLeft: "2rem" }} className="align-center">
//                     |
//                   </Typography>
//                 </Button>
//               </ListItem>
//             </List>
//           </Paper>
//         ) : null}
//       </Box>
//       <Box>
//         {/* TODO: Paid */}
//         {/* <DateRangePicker /> */}
//       </Box>

//       <Box>
//         <Button variant="contained" onClick={() => setOpenDialog((prevState) => !prevState)}>
//           Open Modal
//         </Button>

//         <Dialog
//           open={openDialog}
//           onClose={() => setOpenDialog(false)}
//           sx={{ borderRadius: "2rem" }}
//         >
//           <DialogTitle margin="0 auto">
//             <AiFillDelete size={50} />
//           </DialogTitle>
//           <DialogTitle margin="0 auto">Delete Contacts</DialogTitle>
//           <DialogContent>
//             <DialogContentText>Sure you want delete this Contacts ?</DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               sx={{ backgroundColor: "orange", "&:hover": { backgroundColor: "orange" } }}
//               variant="contained"
//               onClick={() => setOpenDialog(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               sx={{
//                 color: "black",
//                 fontSize: "1rem",
//                 fontWeight: "bold",
//                 "&:hover": { backgroundColor: "wheat" },
//               }}
//               onClick={() => {
//                 setOpenDeletionDialog(true)
//                 setOpenDialog(false)
//               }}
//             >
//               Ok
//             </Button>
//           </DialogActions>
//         </Dialog>

//         <Dialog open={openDeletionDialog} onClose={() => setOpenDeletionDialog(false)}>
//           <DialogTitle sx={{margin: "5rem 8rem 0 8rem", padding: "0"}}>
//             {/* <FaCheck size={25}/> */}
//             <img src={successfullyDeleted} alt="Successfully Deleted"/>
//           </DialogTitle>
//           <DialogTitle sx={{margin: "0 auto 2rem auto", fontSize: "1.25rem"}}>
//             Deleted Contacts
//           </DialogTitle>
//         </Dialog>
//       </Box>

//       {/* TODO: Divider crashes app */}
//       {/* <Divider orientation="vertical" /> */}
//     </Box>
//   );
// };

export const Dashboard = () => {
  return (
    <Box display="flex">
      <DashboardList />

      <Box component="section" flexGrow="1">
        <DashboardHeader />
        <DashboardMain />
      </Box>
    </Box>
  );
};
