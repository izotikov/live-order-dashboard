import {FC} from "react";
import {toggleTheme} from "@features/theme/themeConfig";


const DashBoard: FC = () => {
  return (
    <div>
      <div className="bg-primary text-white rounded-xs">
        Pop
      </div>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
};

export default DashBoard;