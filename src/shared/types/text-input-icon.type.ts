import { IconName } from "./icon.type";

export interface TextInputIconProps{
    onLeftIconClick?: () => void;
    onRightIconClick?: () => void;
    inputPlaceholder?: string;
    leftInconType: IconName;
    rightInconType: IconName;
    inputPadding?: string;
    OnInputChange?: () => void;
}