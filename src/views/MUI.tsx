import { DummyData, DummyDataType } from '../dummy';
import { red } from '@mui/material/colors';
import SearchbarWithSelectAndFilter from '../component/SearchbarWithSelectAndFilter/SearchbarWithSelectAndFilter';
import Cards from '../component/Card/Cards';

const MUI = () => {
  return (
    <div>
      <SearchbarWithSelectAndFilter
        searchData={DummyData}
        groupBy={(value: DummyDataType) => value.teams.title}
        toDisplay={(value) => `${value.firstName} ${value.lastName}`}
        autoCompleteProps={{
          options: DummyData,
          renderInput: () => <></>,
        }}
      />
      <br />

      <Cards
        items={[
          { firstName: 'Tawal', lastName: 'Marley', title: 'Dev' },
          { firstName: 'Tawal', lastName: 'Marley', title: 'Dev' },
          { firstName: 'Tawal', lastName: 'Marley', title: 'Dev' },
          { firstName: 'Tawal', lastName: 'Marley', title: 'Dev' },
        ]}
      />
    </div>
  );
};

export default MUI;
