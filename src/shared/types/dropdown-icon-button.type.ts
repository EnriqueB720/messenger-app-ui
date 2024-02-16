import { IconName } from "@types";

export interface DropdownIconButtonProps {
  icon: IconName;
  options: {
    text: string,
    onClick: () => any;
  }[];
  boxColor: string;
}