import tw from "tailwind-styled-components";
import { Popover } from "@headlessui/react";
import { List } from 'phosphor-react';

export const MenuListPopover = tw(Popover)`
    relative

    sm:invisible
    visible

    mt-[39px]
`;

export const MenuListButton = tw(Popover.Button)`
    text-zinc-100
    hover:text-zinc-400
    ml-[calc(11vw)]
`;

export const MenuListIcon = tw(List)`
    w-[36px]
    h-[36px]
`;

export const MenuListPanel = tw(Popover.Panel)`
    absolute
    z-10
`;