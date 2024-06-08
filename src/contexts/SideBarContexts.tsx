import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type SidebarProviderProps = {
  children: ReactNode;
};

type SideBarContextType = {
  isLagreOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const SideBarContext = createContext<SideBarContextType | null>(null);

export function useSideBarContext() {
  const value = useContext(SideBarContext);
  if (value === null) {
    throw new Error("Cannot use outside if SidebarProvider");
  }

  return value;
}

export function SideBarProvider({ children }: SidebarProviderProps) {
  const [isLagreOpen, setIsLagreOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) {
        setIsSmallOpen(false);
      }
    };

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  });

  function isScreenSmall() {
    return window.innerWidth < 1024;
  }

  function toggle() {
    if (isScreenSmall()) {
      setIsSmallOpen((s) => !s);
    } else setIsLagreOpen((l) => !l);
  }

  function close() {
    if (isScreenSmall()) {
      setIsSmallOpen(false);
    } else {
      setIsLagreOpen(false);
    }
  }

  return (
    <SideBarContext.Provider
      value={{ isLagreOpen, isSmallOpen, toggle, close }}
    >
      {children}
    </SideBarContext.Provider>
  );
}
