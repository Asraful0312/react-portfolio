"use client";
import { Textarea } from "keep-react";

export const TextAreaComponent = ({onChange}) => {
  return (
    <Textarea
      className="w-10/12"
      onChange={onChange}
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      color="gray"
      border={true}
      rows={7}
      name="message"
    />
  );
};
