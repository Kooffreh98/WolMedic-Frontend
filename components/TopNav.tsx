import { FC } from "react";

const TopNav: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between p-4 bg-white space-y-2 lg:space-y-0">
      <h2 className="mt-4 text-2xl font-bold leading-[31.2px] text-left lg:text-xl lg:font-semibold text-black">
        Accounts
      </h2>
    </div>
  );
};

export default TopNav;
