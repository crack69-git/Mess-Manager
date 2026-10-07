"use client";

import React from "react";
import { Button, Dropdown, Label } from "@heroui/react";
import { FiMoreVertical, FiEdit2, FiLogOut } from "react-icons/fi";

const MessOption = ({ onEdit, onLeave }) => {
  const handleAction = (key) => {
    if (key === "edit-mess") {
      onEdit?.();
    }

    if (key === "leave-mess") {
      onLeave?.();
    }
  };

  return (
    <Dropdown>
      <Button
        isIconOnly
        variant="flat"
        aria-label="Mess options"
        className="h-11 w-11 rounded-xl bg-gray-50 text-gray-600 transition hover:bg-green-50 hover:text-green-800"
      >
        <FiMoreVertical className="size-4" />
      </Button>

      <Dropdown.Popover>
        <Dropdown.Menu
          aria-label="Mess options"
          onAction={handleAction}
          className="min-w-44"
        >
          <Dropdown.Item id="edit-mess" textValue="Edit mess">
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-lg bg-green-50 text-green-700">
                <FiEdit2 className="size-4" />
              </span>

              <Label>Edit Mess</Label>
            </div>
          </Dropdown.Item>

          <Dropdown.Item
            id="leave-mess"
            textValue="Leave mess"
            variant="danger"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-lg bg-red-50 text-red-500">
                <FiLogOut className="size-4" />
              </span>

              <Label>Leave Mess</Label>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default MessOption;
