import {useMemo, useState} from "react";

import data from './data.json';

const initialCatalogs = [10, 5, 16];

const ComponentUseMemo = ({rowData = data}) => {
  const [counter, setCounter] = useState(0);
  const [catalogs, setCatalogs] = useState(initialCatalogs);

  const increase = () => setCounter(counter + 1);

  const changeCatalogs = () => setCatalogs([2, 4, 5, 19, 24]);
  
  console.time("timer");
  
  const dataMemo = useMemo(() => {
    console.log('dataMemo')
    const filteredData = data.catalog.filter(item => catalogs.some(catalog => catalog === item.catalogId));

    return (
      catalogs
        .filter(catalog => filteredData.some(item => item.catalogId === catalog))
        .map(catalog => filteredData.find(item => item.catalogId === catalog))
        .sort((a, b) => a.catalogId - b.catalogId)
        .map((catalog) => (
          <div key={catalog.catalogId}>
            {catalog.catalogId} - {catalog.catalogName}
          </div>
        ))
    )
  }, [catalogs, rowData]);

  console.timeEnd("timer");

  return (
    <main>
      {dataMemo}
      <button onClick={changeCatalogs}>Изменить каталоги</button>
      <p>Счетчик: {counter}</p>
      <button onClick={increase}>Добавить</button>
    </main>
  )
}

export default ComponentUseMemo