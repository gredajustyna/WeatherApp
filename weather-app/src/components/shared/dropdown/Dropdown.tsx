import { Dispatch, ReactElement, SetStateAction, useRef } from "react";
import DropdownButton from "./DropdownButton";
import { DropdownContent } from "./DropdownContent";

interface DropdownProps {
  value: string;
  children: ReactElement;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Dropdown = ({
  value,
  children,
  open,
  setOpen,
}: DropdownProps): ReactElement => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setOpen((open) => !open);
  };

  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      <DropdownButton toggle={toggleDropdown} open={open}>
        {value}
      </DropdownButton>
      <DropdownContent open={open}>{children}</DropdownContent>
    </div>
  );
};
