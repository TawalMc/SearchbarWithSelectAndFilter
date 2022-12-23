import { useState } from 'react';
import {
  DEFAULT_SELECT_VALUE,
  SearchbarSelectCheckboxProps,
  UNCATEGORISED_SELECT_VALUE,
  UseSearchbarSelectCheckboxArgs,
} from './types';

const useSearchbarWithFilter = <T>({
  searchData,
  groupBy,
  options,
}: UseSearchbarSelectCheckboxArgs<T>) => {
  /**
   * Hooks
   */
  const [selectedItem, setSelectedItem] = useState(DEFAULT_SELECT_VALUE);
  const [searchList, setSearchList] = useState(
    new Map<ReturnType<typeof groupBy>, T[]>()
  );
  
};
