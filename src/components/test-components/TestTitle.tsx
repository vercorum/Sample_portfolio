import React from "react";

//TYPE 1
interface ITitle {
  name: string;
  age: number;
}

export const TestTitle1: React.FC<ITitle> = ({ name, age }) => {
  return (
    <div className="text-[30px] border-2 border-black px-2 py-1">
      My name is {name}. I am {age} years old
    </div>
  );
};

//TYPE 2
export const TestTitle2 = ({ name, age }: ITitle) => {
  return (
    <div className="text-[30px] border-2 border-red-500 px-2 py-1">
      My name is {name}. I am {age} years old
    </div>
  );
};

//TYPE 3
export const TestTitle3 = ({ name, age }: { name: string; age: number }) => {
  return (
    <div className="text-[30px] border-2 border-blue-500 px-2 py-1">
      My name is {name}. I am {age} years old
    </div>
  );
};
