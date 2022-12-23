import { DummyData, DummyDataType } from '../dummy';
import SearchbarWithSelectAndFilter from '../component/SearchbarWithSelectAndFilter/SearchbarWithSelectAndFilter';
import Cards from '../component/Card/Cards';
import { useState } from 'react';

const MUI = () => {
  const [selectedOptions, setSelectedOptions] = useState<DummyDataType[]>([]);

  console.log(selectedOptions)

  return (
    <div>
      <SearchbarWithSelectAndFilter
        searchData={DummyData}
        groupBy={(value: DummyDataType) => value?.available}
        toDisplay={(value) => `${value.firstName} ${value.lastName ?? ""}`}
        autoCompleteProps={{
          options: DummyData,
          renderInput: () => <></>,
          value: selectedOptions,
          onChange: (_event, value) => setSelectedOptions(value),
        }}
      />
      <br />

      <Cards items={selectedOptions} />
    </div>
  );
};

export default MUI;
