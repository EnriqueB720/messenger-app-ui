import { IconName } from "./icon.type";

export interface ChatInfoActionListProps{
  options?: {
    onClick: () => unknown,
    text: string,
    iconType: IconName
  }[];
}