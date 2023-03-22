import { popupIds } from "../Constants/constants";

export type InitialPopupState = {
  [popupIds.filterCategoriesAnchor]: null | HTMLElement;
  [popupIds.filterChecklistAnchor]: null | HTMLElement;
  [popupIds.selectDateAnchor]: null | HTMLElement;
  [popupIds.customDateAnchor]: null | HTMLElement;
};

export type PopupControllerArgs = {
  element: { id: popupIds; setNull?: boolean };
  event?: React.MouseEvent<HTMLElement>;
};

export type InitialFilterContextValues = {
  popupsController: (popupControllerArgs: PopupControllerArgs) => void;
  popupState: InitialPopupState;
  closeAllPopups: () => void;
};
