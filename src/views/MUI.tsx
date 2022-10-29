import { DummyData, DummyDataType } from '../dummy';
import SearchbarWithSelectAndFilter from '../component/SearchbarWithSelectAndFilter/SearchbarWithSelectAndFilter';
import Cards from '../component/Card/Cards';

const MUI = () => {
  const [selectedOptions, setSelectedOptions] = useState<DummyDataType[]>([]);

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

      <Cards items={selectedOptions} />
    </div>
  );
};

export default MUI;
