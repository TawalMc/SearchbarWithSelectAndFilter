import {DummyData, DummyDataType} from "../dummy";
import {red} from "@mui/material/colors";
import SearchbarWithSelectAndFilter from "../component/SearchbarWithSelectAndFilter/SearchbarWithSelectAndFilter";

const MUI = () => {
    return (

        <SearchbarWithSelectAndFilter searchData={DummyData}
                                 groupBy={(value: DummyDataType) => value.teams.title}
                                 toDisplay={(value) => `${value.firstName} ${value.lastName}`}
                                 autoCompleteProps={{
                                     options: DummyData,
                                     renderInput: () => <></>,
                                 }}/>
    )
}

export default MUI