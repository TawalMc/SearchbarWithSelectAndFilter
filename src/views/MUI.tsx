import SearchbarSelectCheckbox from "../component/SearchbarWithSelectboxAndAutocompletionInMUI";
import {DummyData, DummyDataType} from "../dummy";
import {red} from "@mui/material/colors";

const MUI = () => {
    return (

        <SearchbarSelectCheckbox searchData={DummyData}
                                 groupBy={(value: DummyDataType) => value.teams.title}
                                 toDisplay={(value) => `${value.firstName} ${value.lastName}`}
                                 autoCompleteProps={{
                                     options: DummyData,
                                     renderInput: () => <></>,
                                 }}/>
    )
}

export default MUI