import { Box, Stack } from "@mui/material";
import { useState } from "react";

import { DeleteButton, ExportButton, ImportButton } from "../buttons/action-buttons";
import { FilterButton, SelectDateButton } from "../buttons/filter-buttons";
import { FilterCheckList } from "../filter-check-list/filter-check-list";
import { FiltersCategories } from "../filters-categories/filters-categories";

export const boxStyles = {
  marginTop: "1.5rem",
  paddingTop: "1.15rem",
  height: "40rem",
  width: "95%",
  borderRadius: "15px",
  backgroundColor: "#FBFBFB",
};

export const stackStyles = {
  display: "flex",
  flexDirection: "row",
  borderRadius: "5px",
  height: "2.5rem",
  gap: "1rem",
};

export const menuItemStyles = {
  "&:hover": { background: "rgba(255, 235, 218, 0.31)" },
  padding: "0",
};

// TODO: onHover styles !== onFocus
export const ButtonsStack = () => {
  const [anchEl, setAnchrEl] = useState<null | HTMLElement>(null);
  const FilterCategoriesCloseHandler = () => setAnchrEl(null);

  const clickHandler = (event: React.MouseEvent<HTMLElement>) => setAnchrEl(event.currentTarget);

  const [filterCategoryAnchorEl, setFilterCategoryAnchorEl] = useState<HTMLElement | null>(null);

  const filterCategoryClickHandler = (event: React.MouseEvent<HTMLElement>) =>
    setFilterCategoryAnchorEl(event.currentTarget);

  const checklistCloseHandler = () => setFilterCategoryAnchorEl(null);

  return (
    <Box sx={boxStyles}>
      <Stack
        sx={stackStyles}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding="0 0.75rem"
      >
        <Stack display="flex" flexDirection="row" gap="1.5rem">
          <SelectDateButton />
          <FilterButton onFilterButtonClick={clickHandler} />
        </Stack>

        <Stack display="flex" flexDirection="row" gap="0.5rem">
          <DeleteButton />
          <ImportButton />
          <ExportButton />
        </Stack>
      </Stack>

      <FiltersCategories
        onFiltersClose={FilterCategoriesCloseHandler}
        anchorElement={anchEl}
        filterCategoryClickHandler={filterCategoryClickHandler}
      />

      <FilterCheckList
        filterCategoryAnchorEl={filterCategoryAnchorEl}
        onClose={checklistCloseHandler}
      />
    </Box>
  );
};
