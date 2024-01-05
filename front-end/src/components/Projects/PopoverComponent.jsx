"use client";
import { Button, Popover } from "keep-react";

export const PopoverComponent = ({ description }) => {
  return (
    <Popover>
      <Popover.Title>Description:</Popover.Title>
      <Popover.Description>{description}</Popover.Description>
      <Popover.Container>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <button className="text-sm hover:bg-black hover:text-white transition-colors duration-300 bg-transparent py-1 px-3 rounded-xl border-2 border-black">
            Demo
          </button>
        </a>
      </Popover.Container>
      <Popover.Action>
        <button className="text-sm hover:bg-black hover:text-white transition-colors duration-300 bg-transparent py-1 px-3 rounded-xl border-2 border-black">
          Details
        </button>
      </Popover.Action>
    </Popover>
  );
};
