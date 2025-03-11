"use client";

import Link from "next/link";
import { PlusIcon, PowerIcon } from "../ui/icons";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/lib/hooks";
import { togglePowerMode } from "@/lib/features/options/optionsSlice";

const ButtonsGroup = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Link
        href="/add-task"
        className="mx-auto flex gap-2 rounded-[30px] bg-[var(--custom-primary)] p-4 text-[18px] text-white"
      >
        <PlusIcon />
        <p className="hover:cursor-pointer">Add new Task</p>
      </Link>
      <Button
        size="xlCustom"
        variant="submit"
        className="rounded-[30px]"
        onClick={() => dispatch(togglePowerMode())}
      >
        <PowerIcon />
        <p>Power Mode</p>
      </Button>
    </>
  );
};

export default ButtonsGroup;
