import React, { ComponentPropsWithoutRef} from "react";

declare module "react" {
    function forwardRef<T, P = {}>(
        render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

import { AutocompleteProps, CheckboxProps, FormControlProps, SelectProps } from "@mui/material";

export const DEFAULT_SELECT_VALUE = "668b87f3-d50d-43e0-832e-d5433a469287"

export const UNCATEGORISED_SELECT_VALUE="2fabe0b1-79ea-4aa7-b00f-eaba652dda63"

export interface SearchbarSelectCheckboxProps<T extends unknown> {
    /**
     * Default placeholder for select options
     */
    placeholder?: string,

    /**
     * array of data to use to make search
     */
    searchData: T[] | undefined,

    /**
     * Function that used as map callback to iterate over *sarchData* to get value used to group field
     * @param value
     */
    groupBy: (value: T) => string | number | boolean | null | undefined;

    /**
     * Function used to display custom data
     * @param value
     */
    toDisplay: (value: T) => any;

    /**
     * Allow to have "All" among dropdown values
     */
    withAll?: boolean;

    /**
     * Label displayed in dropdown to represent "ALL" value
     */
    allLabel?: string; 

    /**
     * Refer to every data with "undefined" or "null" as value after apply groupBy callback
     */
    uncategorised?: boolean;

    /**
     * Label displayed in dropdown to represent "unCategorised" value
     */
     uncategorisedLabel?: string;

    /**
     * Main div container props
     */
    divProps?: ComponentPropsWithoutRef<"div">

    /**
     * Select used as dropdown props
     */
    selectProps?: SelectProps<string>;

    /**
     * First form control, parent of dropdown props
     */
    firstFormControlProps?: FormControlProps;

    /**
     * Second form control, parent of autocomplete props
     */
    secondFormControlProps?: FormControlProps;

    /**
     * Checkbox used inside autocomplete props
     */
    searchCheckboxProps?: CheckboxProps

    /**
     * Autocomplete props
     */
    autoCompleteProps?: AutocompleteProps<T, true, false, false>
}


export interface UseSearchbarSelectCheckboxArgs<T extends unknown> {
    searchData: SearchbarSelectCheckboxProps<T>["searchData"],
    groupBy: SearchbarSelectCheckboxProps<T>["groupBy"],
    options?: {
        uncategorised?: SearchbarSelectCheckboxProps<T>["uncategorised"]
    }
}