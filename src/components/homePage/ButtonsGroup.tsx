"use client";

import Link from "next/link";
import { PlusIcon, PowerIcon, RandomArrows } from "../ui/icons";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  toggleModal,
  togglePowerMode,
} from "@/lib/features/options/optionsSlice";

const ButtonsGroup = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);

  return (
    <>
      <Link
        href="/add-task"
        className="mx-auto flex gap-2 rounded-[30px] bg-[var(--custom-primary)] p-4 text-[18px] text-white"
      >
        <PlusIcon />
        <p className="hover:cursor-pointer">Add new Task</p>
      </Link>
      {todos.length > 1 ? (
        <Button
          size="xlCustom"
          variant="submit"
          className="rounded-[30px]"
          onClick={() => dispatch(togglePowerMode())}
        >
          <PowerIcon />
          <p>Power Mode</p>
        </Button>
      ) : null}
      {!todos.length ? (
        <Button
          size="xlCustom"
          variant="submit"
          className="rounded-[30px]"
          onClick={() => dispatch(toggleModal())}
        >
          <RandomArrows />
          <p>Generate Items</p>
        </Button>
      ) : null}
    </>
  );
};

export default ButtonsGroup;
