import React, { useEffect, useState } from 'react'
import Pagination from '../Components/Pagination';
import Table from '../Components/Table'
import usePagination from '../Hooks/usePagination';
import {columns} from '../Utility/ColumnData';
import { SurveyModel } from '../Utility/SurveyModel';
import { BASE_URL } from '../Utility/API_ROUTES';


const Survey = () : JSX.Element=> {

  const [surveys, setSurvey] = useState<SurveyModel[]>([]);
  const [itemsPerRow, setItemsPerRow] = useState<string>("3");

  useEffect(() => {
    fetch(BASE_URL)
    .then((response: any) => response.json())
    .then(surveyData  => setSurvey(surveyData));
  }, [])

  const {nextPage, totalDataLength, previousPage, currentData, currentPage, maxPage} = usePagination(surveys, parseInt(itemsPerRow));

  return (
    <div className="sw-p-50 sw-width-expand">
      <h1 className="smartWage-typography-heading sw-mb-20">Surveys</h1>
      <Table columnData={columns} tableData={currentData()} />
      <Pagination 
        setItemsPerRow={ setItemsPerRow } 
        nextPage={nextPage}
        totalDataLength= {totalDataLength}
        previousPage={previousPage} 
        currentData={currentData()} 
        currentPage={currentPage} maxPage={maxPage}
      />
    </div> 
  )
}
export default Survey