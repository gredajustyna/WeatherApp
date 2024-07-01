import { Dispatch, SetStateAction } from "react";

export interface DrawerOpenProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
