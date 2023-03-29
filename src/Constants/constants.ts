import {
  InitialFilterContextValues,
  InitialPopupState,
  PopupControllerArgs,
} from "../Types/context-types";

export const initialPopupsState: InitialPopupState = {
  filterCategoriesAnchor: null,
  filterChecklistAnchor: null,
  selectDateAnchor: null,
  customDateAnchor: null,
};

export const initialContextValue: InitialFilterContextValues = {
  popupsController: (popupControllerArgs: PopupControllerArgs) => {},
  popupState: initialPopupsState,
  closeAllPopups: () => {},
};

export const enum listNames {
  country = "Country",
  designations = "Designation",
  industry = "Industry",
  subscribers = "Subscribers",
  unsubscribers = "Un-suscribers",
}

export const enum popupIds {
  filterCategoriesAnchor = "filterCategoriesAnchor",
  filterChecklistAnchor = "filterChecklistAnchor",
  selectDateAnchor = "selectDateAnchor",
  customDateAnchor = "customDateAnchor",
}

export const enum dateInputIds {
  startDate = "startDate",
  endDate = "endDate",
}

// export const enum dateInputIds {
//   selected_startDate = "selected_startDate",
//   selected_endDate = "selected_endDate",
//   saved_startDate = "saved_startDate",
//   saved_endDate = "saved_endDate",
// }

export const disabledFeatures = {
  enableGlobalFilter: false,
  enableColumnFilters: false,
  enableHiding: false,
  enableDensityToggle: false,
  enableFullScreenToggle: false,
  muiTablePaginationProps: {
    rowsPerPageOptions: [],
  },
  enableTopToolbar: false,
};

export const enabledFeatures = {
  enableClickToCopy: true,
  enableRowSelection: true,
  enableRowActions: true,
};

export const paginationProps = {
  enablePagination: true,
};
