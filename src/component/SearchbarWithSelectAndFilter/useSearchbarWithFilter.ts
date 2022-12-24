import { useState, useMemo, useEffect } from 'react';
import {
  DEFAULT_SELECT_VALUE,
  UNCATEGORISED_SELECT_VALUE,
  UseSearchbarSelectCheckboxArgs,
} from './types';

export const useSearchbarWithFilter = <T>(
  searchData: UseSearchbarSelectCheckboxArgs<T>["searchData"] = [],
  groupBy: UseSearchbarSelectCheckboxArgs<T>["groupBy"],
  options: UseSearchbarSelectCheckboxArgs<T>["options"]) => {
  /**
   * Hooks
   */
  const [selectedItem, setSelectedItem] = useState(DEFAULT_SELECT_VALUE);
  const [searchList, setSearchList] = useState(
    new Map<ReturnType<typeof groupBy>, T[]>()
  );

  /**
   * Functions
   */

  // will set the selected dropdown's item
  const handleSelectedItemChange = (event: any) => {
    setSelectedItem(event.target.value);
  };

  // get the list of items for drowpdown
  let itemsGroup = useMemo(() => {
    let itemsAsSet = new Set();
    searchData.forEach((data) => {
      let option = groupBy(data) ?? undefined;
      if (options?.uncategorised) {
        option = option == undefined ? UNCATEGORISED_SELECT_VALUE : option;
        itemsAsSet.add(option);
      } else if (!options?.uncategorised && option != undefined) {
        itemsAsSet.add(option);
      }
    });
    return Array.from(itemsAsSet);
  }, [searchData, groupBy]);


    // update list of options provided to autocomplete
    useEffect(() => {
      const updateSearchList = new Map(searchList)
      if (!updateSearchList.has(selectedItem)) {
          if (selectedItem == DEFAULT_SELECT_VALUE) {
              updateSearchList.set(DEFAULT_SELECT_VALUE, searchData)
          } else {
              updateSearchList.set(
                  selectedItem,
                  searchData.filter((v) =>  {
                      const option = groupBy(v)
                      if (selectedItem == UNCATEGORISED_SELECT_VALUE) {
                          return option == undefined || option == null 
                      } else return option == selectedItem
                  })
              )
          }
          setSearchList(updateSearchList)
      }
  }, [selectedItem, searchData])

  return {
    filter: { selectedItem, setSelectedItem, handleSelectedItemChange },
    autocomplete: {searchList, setSearchList},
    itemsGroup,
  };
};

export default useSearchbarWithFilter