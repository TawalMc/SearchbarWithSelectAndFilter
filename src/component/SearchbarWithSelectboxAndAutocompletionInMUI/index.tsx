import React, {useMemo, useState, forwardRef, ForwardedRef} from "react";
import {
    DEFAULT_SELECT_VALUE,
    SearchbarSelectCheckboxProps,
} from "./types";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

///


const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;
const SearchbarSelectCheckboxInner = <T, >({
                                               placeholder,
                                               searchData = [],
                                               groupBy,
                                               toDisplay,
                                               searchCheckboxProps,
                                               autoCompleteProps,
                                               divProps,
                                               selectProps,
                                               firstFormControlProps,
                                               secondFormControlProps,
                                           }: SearchbarSelectCheckboxProps<T>,
                                           ref: ForwardedRef<HTMLDivElement>,
) => {
    /**
     * Hooks
     */
    const [selectedItem, setSelectedItem] = useState(DEFAULT_SELECT_VALUE);

    /**
     * Functions
     */

        // will set the selected dropdown's item
    const handleSelectedItemChange = (event: SelectChangeEvent) => {
            setSelectedItem(event.target.value);
        };

    // get the list of items for drowpdown
    let itemsGroup = useMemo(() => {
        let itemsAsSet = new Set(searchData.map(groupBy));
        let itemsAsList: string[] = [];

        itemsAsSet.forEach((v) => {
            if (v !== undefined && v !== null) itemsAsList.push(v);
        });
        return itemsAsList;
    }, [searchData, groupBy]);

    // list of options provided to autocomplete
    let optionForSearch = useMemo(() => {
        let optionAsMap = new Map<string, T[]>();
        let data = searchData;

        optionAsMap.set(DEFAULT_SELECT_VALUE, searchData);
        itemsGroup.forEach((value) => {
            optionAsMap.set(
                value,
                data.filter((v) => groupBy(v) == value)
            );
        });

        return optionAsMap;
    }, [itemsGroup]);

    return (
        <div ref={ref} style={{display: "flex", alignItems: "center", width: "500px"}}  {...divProps} >
            <FormControl sx={{minWidth: "150px", marginRight: 1}} {...firstFormControlProps} >
                <Select
                    displayEmpty
                    size="small"
                    inputProps={{"aria-label": "Without label"}}
                    {...selectProps}
                    value={selectedItem}
                    onChange={handleSelectedItemChange}
                >
                    <MenuItem value={DEFAULT_SELECT_VALUE}>
                        Tout
                    </MenuItem>
                    {
                        itemsGroup.map(item => <MenuItem key={item}
                                                         value={item}>{item}</MenuItem>)
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
                    options={optionForSearch.get(selectedItem) ?? []}
                    groupBy={groupBy}
                    getOptionLabel={(option) => toDisplay(option)}
                    renderOption={(props, option, {selected}) => (
                        <li {...props}>
                            <Checkbox
                                {...searchCheckboxProps}
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{marginRight: 8}}
                                checked={selected}
                            />
                            {toDisplay(option)}
                        </li>
                    )}
                    renderInput={(params) => (
                        <TextField {...params} placeholder={placeholder} sx={{paddingY: 0}}/>
                    )}
                />
            </FormControl>
        </div>
    );
};

const SearchbarSelectCheckbox = forwardRef(SearchbarSelectCheckboxInner);

export default SearchbarSelectCheckbox;
