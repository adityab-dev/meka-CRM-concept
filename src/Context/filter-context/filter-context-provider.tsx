import { useState } from "react";

import {
  InitialFilterContextValues,
  InitialPopupState,
  PopupControllerArgs,
} from "../../Types/context-types";

import { filterContext } from "./filter-context";

export const initialPopupsState: InitialPopupState = {
  filterCategoriesAnchor: null,
  filterChecklistAnchor: null,
  selectDateAnchor: null,
  customDateAnchor: null,
};

export const FilterContextProvider = (props: { children: React.ReactElement }) => {
  const [popupState, setPopupState] = useState<InitialPopupState>(initialPopupsState);

  const popupsController = (popupControllerArgs: PopupControllerArgs) => {
    const { element, event } = popupControllerArgs;
    const htmlElement = event?.currentTarget;
    const { id: stateKey } = element;

    if (!event) {
      setPopupState((prevState) => {
        const newState = { ...prevState, [stateKey]: null };
        return newState;
      });
    } else {
      setPopupState((prevState) => {
        const newState = { ...prevState, [stateKey]: htmlElement };
        return newState;
      });
    }
  };

  const closeAllPopups = () => setPopupState(initialPopupsState);

  const valueProps: InitialFilterContextValues = {
    popupsController,
    popupState,
    closeAllPopups,
  };

  return <filterContext.Provider value={valueProps}>{props.children}</filterContext.Provider>;
};
