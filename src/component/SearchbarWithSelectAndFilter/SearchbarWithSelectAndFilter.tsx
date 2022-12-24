import React, { useMemo, useState, useEffect, forwardRef, ForwardedRef } from "react";
import {
    DEFAULT_SELECT_VALUE,
    SearchbarSelectCheckboxProps,
    UNCATEGORISED_SELECT_VALUE,
} from "./types";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useSearchbarWithFilter from "./useSearchbarWithFilter";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const SearchbarWithSelectAndFilterInner = <T,>({
    placeholder,
    searchData = [],
    groupBy,
    toDisplay,
    withAll = true,
    allLabel = "All",
    uncategorised = true,
    uncategorisedLabel = "Uncategorised",
    searchCheckboxProps,
    autoCompleteProps,
    divProps,
    selectProps,
    firstFormControlProps,
    secondFormControlProps,
}: SearchbarSelectCheckboxProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
) => {

    const { 
        filter: { selectedItem, handleSelectedItemChange },
        autocomplete: {searchList},
        itemsGroup
     } = useSearchbarWithFilter(searchData, groupBy, {uncategorised})

    return (
        <div ref={ref} style={{ display: "flex", alignItems: "center", width: "500px" }}  {...divProps} >
            <FormControl sx={{ minWidth: "150px", marginRight: 1 }} {...firstFormControlProps} >
                <Select
                    displayEmpty
                    size="small"
                    inputProps={{ "aria-label": "Without label" }}
                    {...selectProps}
                    value={selectedItem}
                    onChange={handleSelectedItemChange}
                >
                    <MenuItem value={DEFAULT_SELECT_VALUE}>
                        {allLabel ?? "Tout"}
                    </MenuItem>
                    {
                        itemsGroup.map(item =>
                            <MenuItem key={`${item}`} value={item}>
                                {`${item == UNCATEGORISED_SELECT_VALUE ? uncategorisedLabel : item}`}
                            </MenuItem>)
                    }
                </Select>
            </FormControl>
            <FormControl fullWidth {...secondFormControlProps}>
                <Autocomplete
                    fullWidth
                    multiple
                    disableCloseOnSelect
                    limitTags={1}
                    {...autoCompleteProps}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            padding: 0,
                            height: "auto",
                        },
                    }}
                    options={searchList.get(selectedItem) ?? []}

                    getOptionLabel={(option) => toDisplay(option)}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                            <Checkbox
                                {...searchCheckboxProps}
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {toDisplay(option)}
                        </li>
                    )}
                    renderInput={(params) => (
                        <TextField {...params} placeholder={placeholder} sx={{ paddingY: 0 }} />
                    )}
                />
            </FormControl>
        </div>
    );
};

const SearchbarWithSelectAndFilter = forwardRef(SearchbarWithSelectAndFilterInner);

export default SearchbarWithSelectAndFilter;
