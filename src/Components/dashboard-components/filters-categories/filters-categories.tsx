import { Button, Menu, MenuItem } from "@mui/material";
import { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { filterContext } from "../../../Context/filter-context/filter-context";
import { menuListButtonStyles } from "../../../Pages/Dashboard/Dashboard";
import { menuItems } from "../../../Constants/filter-content";
import { menuItemStyles } from "../buttons-stack/buttons-stack";
import { useAppDispatch } from "../../../store/hooks/hook";
import { categoryClickHandler } from "../../../store/slices/filters-slice";
import { popupIds } from "../../../Constants/constants";

export const FiltersCategories = () => {
  // const {
  //   filterCategoryController,
  //   filterCategoryAnchor,
  //   filterChecklistController,
  //   openFilterCategories,
  // } = useContext(filterContext);

  const {
    popupsController,
    popupState: { filterCategoriesAnchor },
  } = useContext(filterContext);

  const dispatch = useAppDispatch();

  return (
    <Menu
      elevation={7}
      anchorEl={filterCategoriesAnchor}
      open={filterCategoriesAnchor ? true : false}
      onClose={() =>
        popupsController({ element: { setNull: true, id: popupIds.filterCategoriesAnchor } })
      }
    >
      {menuItems.map((item, index) => {
        return (
          <MenuItem sx={menuItemStyles} key={index}>
            <Button
              sx={menuListButtonStyles}
              onClick={(event) => {
                popupsController({
                  element: { setNull: false, id: popupIds.filterChecklistAnchor },
                  event,
                });
                dispatch(categoryClickHandler(item));
              }}
            >
              {item} <AiOutlineArrowRight />
            </Button>
          </MenuItem>
        );
      })}
    </Menu>
  );
};
