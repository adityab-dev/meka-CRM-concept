import { Button, Menu, MenuItem } from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";
import { menuListButtonStyles } from "../../../Pages/Dashboard/Dashboard";
import { menuItemStyles } from "../buttons-stack/buttons-stack";

export const menuItems = ["Designation", "Industr", "Country", "Subscribers", "Un-suscribers"];

export const FiltersCategories = (props: {
  onFiltersClose: () => void;
  anchorElement: HTMLElement | null;
  filterCategoryClickHandler: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  const { onFiltersClose, anchorElement, filterCategoryClickHandler } = props;

  let openMenu: boolean;

  if (anchorElement === null) openMenu = false;
  else openMenu = true;

  return (
    <Menu anchorEl={anchorElement} open={openMenu} onClose={onFiltersClose}>
      {menuItems.map((item, index) => {
        return (
          <MenuItem sx={menuItemStyles} key={index}>
            <Button sx={menuListButtonStyles} onClick={filterCategoryClickHandler}>
              {item} <AiOutlineArrowRight />
            </Button>
          </MenuItem>
        );
      })}
    </Menu>
  );
};
