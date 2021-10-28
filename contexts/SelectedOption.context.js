import { useRouter } from "next/router";
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { toLowerCaseHyphenated } from "../utils/string.helpers";

const SelectedOptionsCtx = createContext();

function SelectedOptionsProvider({ children }) {
  // * ROUTER
  const router = useRouter();

  // * TRAINING OPTIONS
  const [trainingOption, setTrainingOption] = useState();
  const [accommodationOption, setAccommodationOption] = useState();
  const [packageOption, setPackageOption] = useState();

  useEffect(() => {
    if (packageOption) {
      setTrainingOption();
      setAccommodationOption();
      router.query.packageOption = toLowerCaseHyphenated(packageOption.name);
    } else {
      delete router.query.packageOption;
    }
    router.push(router, undefined, { shallow: true });
  }, [packageOption]);

  useEffect(() => {
    if (packageOption && (trainingOption || accommodationOption)) {
      setPackageOption();
    }
  }, [trainingOption, accommodationOption]);

  useEffect(() => {
    if (trainingOption) {
      router.query.trainingOption = toLowerCaseHyphenated(trainingOption.name);
    } else {
      delete router.query.trainingOption;
    }
    router.push(router, undefined, { shallow: true });
  }, [trainingOption]);

  useEffect(() => {
    if (accommodationOption) {
      router.query.accommodationOption = toLowerCaseHyphenated(
        accommodationOption.name
      );
    } else {
      delete router.query.accommodationOption;
    }
    router.push(router, undefined, { shallow: true });
  }, [accommodationOption]);

  const value = useMemo(() => ({
    trainingOption,
    setTrainingOption,
    accommodationOption,
    setAccommodationOption,
    packageOption,
    setPackageOption,
  }));

  return (
    <SelectedOptionsCtx.Provider value={value}>
      {children}
    </SelectedOptionsCtx.Provider>
  );
}

function useSelectedOptions() {
  const ctx = useContext(SelectedOptionsCtx);

  if (ctx === undefined)
    throw new Error(
      "useSelectedOptions must be used within a SelectedOptionsProvider"
    );
  return ctx;
}

export { SelectedOptionsProvider, useSelectedOptions };

// IX_TSK
// 1. Seperate these into smaller Contexts
