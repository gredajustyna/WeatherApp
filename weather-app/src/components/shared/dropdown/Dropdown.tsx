import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";

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

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }

      document.addEventListener("click", handler);
      return () => {
        document.removeEventListener("click", handler);
      };
    };
  }, [setOpen]);

  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      <DropdownButton toggle={toggleDropdown} open={open}>
        {value}
      </DropdownButton>
      <DropdownContent open={open}>{children}</DropdownContent>
    </div>
  );
};
