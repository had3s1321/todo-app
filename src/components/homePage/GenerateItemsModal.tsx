"use client";

import { Button } from "../ui/button";
import { generateItems } from "@/utils/generateItems";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addTodo } from "@/lib/features/todo/todosSlice";
import { toggleModal } from "@/lib/features/options/optionsSlice";

const GenerateItemsModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.options.isModalOpen);
  const buttonValues = [3, 6, 9, 12, 15, 0];

  const handleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLButtonElement).value;
    const newTodos = generateItems(Number(value));
    dispatch(addTodo(newTodos));
    dispatch(toggleModal());
  };

  return (
    <>
      {isModalOpen && (
        <div className="shadow-custom-shadow absolute top-[16%] rounded-[20px] bg-[var(--custom-light)] p-8">
          <h3 className="text-center text-[18px] font-semibold">
            Generate Todos
          </h3>
          <p className="mb-6 text-center text-[16px]">
            Generate a list o todos using the power of FakerJS. How many todos
            would you like to be generated?
          </p>
          <div className="mb-4 flex flex-row justify-between">
            {buttonValues.slice(0, 3).map((value) => {
              return (
                <Button
                  className="w-[30%]"
                  key={value}
                  type="button"
                  value={value}
                  onClick={handleModal}
                >
                  {value}
                </Button>
              );
            })}
          </div>
          <div className="flex flex-row justify-between">
            {buttonValues.slice(3).map((value) => {
              return (
                <Button
                  className="w-[30%]"
                  key={value}
                  type="button"
                  value={value}
                  onClick={handleModal}
                >
                  {value ? value : "None"}
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default GenerateItemsModal;
