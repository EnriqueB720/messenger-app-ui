import * as React from 'react';

import _ from 'lodash';

import { IconName, IconProps } from '@types';

import { AiOutlineSend } from 'react-icons/ai';
import { IoMdSearch } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { IoFilterSharp } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCheck } from "react-icons/tb";
import { TbChecks } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";


const IconDictionary: {
  [K in IconName]: any
} = {
  send: AiOutlineSend,
  search: IoMdSearch,
  dots: HiDotsVertical,
  filter: IoFilterSharp,
  emoji: BsEmojiSmile,
  check: TbCheck,
  doubleCheck: TbChecks,
  downArrow: IoIosArrowDown
}


const Icon: React.FC<IconProps> = ({
  name
}) => {

  const Component = IconDictionary[name];

  return (
    <Component />
  );
}


export default React.memo(Icon, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});