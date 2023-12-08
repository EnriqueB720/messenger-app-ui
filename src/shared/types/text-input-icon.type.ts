import { IconName } from "./icon.type";

export interface TextInputIconProps {
  inputPlaceholder?: string;
  leftIconType: IconName;
  rightIconType: IconName;
  inputPadding?: string;
  inputText?: string;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;

}