import React from 'react'
import Table from '../Components/Table'
import {columns} from '../Utility/ColumnData';
import { tableSurveyData } from '../Utility/SurveyData';

const Survey = () : JSX.Element=> {
  return (
    <div className="sw-p-50 sw-width-expand">
      <h1 className="smartWage-typography-heading sw-mb-20">Surveys</h1>
      <Table columnData={columns} tableData={tableSurveyData}/>
    </div>
  )
}
export default Survey