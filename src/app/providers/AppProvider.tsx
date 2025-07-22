import {ReactNode, useEffect} from "react";
import {initTheme} from "@features/theme/themeConfig";


export function AppProvider({ children }: { children: ReactNode }) {

  useEffect(() => {
    initTheme();
  }, []);

  return <>{children}</>;
}