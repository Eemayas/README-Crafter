/** @format */

import store from "@/app/store";
import { showSpinner } from "@/components/Modals/store/ModalReducer";
import { useCallback } from "react";

export const useFetchData = () => {
  const fetchData = useCallback(async (url: string) => {
    store.dispatch(showSpinner(true));

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      return null;
    } finally {
      store.dispatch(showSpinner(false));
    }
  }, []);

  return { fetchData };
};
