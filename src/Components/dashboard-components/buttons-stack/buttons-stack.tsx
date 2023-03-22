
import { Box, Stack } from "@mui/material";

import { useAppSelector } from "../../../store/hooks/hook";
import { ImportModal } from "../../modals/import-modal";
import { Modal } from "../../modals/modals";
import { SuccessImportModal } from "../../modals/success-imort-modal";

import { DeleteButton, ExportButton, ImportButton } from "../buttons/action-buttons";
import { ClearDateButton, ClearFiltersButton } from "../buttons/clear-filters-btn";
import { FilterButton, SelectDateButton } from "../buttons/filter-buttons";
import { CountriesChecklist } from "../country-check-list/country-check-list";
import { FiltersCategories } from "../filters-categories/filters-categories";

export const boxStyles = {
  marginTop: "1.5rem",
  height: "5rem",
  width: "95%",
  borderRadius: "15px",
  backgroundColor: "#FBFBFB",
};

export const stackStyles = {
  display: "flex",
  flexDirection: "row",
  borderRadius: "5px",
  height: "5rem",
  gap: "1rem",
};

export const menuItemStyles = {
  "&:hover": { background: "rgba(255, 235, 218, 0.31)" },
  padding: "0",
};

// TODO: onHover styles !== onFocus
export const ButtonsStack = () => {
  const { showInitialImport, showModal, showSuccessImport } = useAppSelector(
    (state) => state.modals
  );

  return (
    <Box sx={boxStyles}>
      <Stack
        sx={stackStyles}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="0 0.75rem"
      >
        <Stack display="flex" flexDirection="row" gap="1.5rem">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="0.5rem"
          >
            <ClearDateButton />
            <SelectDateButton />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="0.5rem"
          >
            <ClearFiltersButton />
            <FilterButton />
          </Box>

          <FiltersCategories />
          <CountriesChecklist />
        </Stack>

        <Stack display="flex" flexDirection="row" gap="0.5rem">
          <DeleteButton />
          <ImportButton />
          <ExportButton />
        </Stack>
      </Stack>

      {showInitialImport ? <ImportModal /> : null}
      {showSuccessImport ? <SuccessImportModal /> : null}
      {showModal ? <Modal /> : null}
    </Box>
  );
};
