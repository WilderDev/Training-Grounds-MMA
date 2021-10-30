import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ExtraDetailsCtx = createContext();

function ExtraDetailsProvider({ children }) {
  const [numFighters, setNumFighters] = useState(1);

  useEffect(() => {
    if (window !== undefined) {
      const getSavedNumFighters = async () => {
        const savedNum = localStorage.getItem("Training-Grounds_num-fighters");
        if (savedNum) setNumFighters(JSON.stringify(savedNum));
      };
      getSavedNumFighters();
    }
  }, []);

  useEffect(() => {
    if (window !== undefined) {
      console.log("numFighters SETTIGN :>> ", numFighters);
      if (numFighters) {
        setNumFighters(
          localStorage.setItem(
            "Training-Grounds_num-fighters",
            numFighters || 1
          )
        );
      }
    }
  }, [numFighters]);

  const value = useMemo(() => ({
    numFighters,
    setNumFighters,
  }));

  return (
    <ExtraDetailsCtx.Provider value={value}>
      {children}
    </ExtraDetailsCtx.Provider>
  );
}

function useExtraDetails() {
  const ctx = useContext(ExtraDetailsCtx);

  if (ctx === undefined)
    throw new Error("useExtraDetails must be used with a ExtraDetailsProvider");

  return ctx;
}

export { ExtraDetailsProvider, useExtraDetails };

// IX_TSK
// 1. Figure this out!
