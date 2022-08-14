import React, { ChangeEvent, useState } from 'react'
import LeftArrow from '../Assets/Icons/LeftArrow.svg';
import RightArrow from '../Assets/Icons/RightArrow.svg';


const pageNumbers : string[] = ["1", "2","3","4","5"];

const Pagination = (props: any) => {
 const [pageNumber, setPageNumber] = useState<number>(1)

 const getSelectedPageNumber = (event : ChangeEvent<HTMLSelectElement>) => {
    props.setItemsPerRow(event.target.value)
 }

  return (
    <div className="smartWage-align-horizontal" style={{float: 'right'}}>
        <span className="page-rows smartWage-typography-normal">
            Rows per page: {" "}
            <select onChange={getSelectedPageNumber} style={{border: 'none'}} className="focus-none sw-mr-20 border-none" name="page">
                {pageNumbers.map((page : string)=> (
                    <option value={page}>{page}</option>
                ))}
            </select>
        </span>
        <span className="smartWage-typography-normal"> {props.currentData.length} of {props.totalDataLength()}</span>
        <span className="sw-ml-8">
            <img className='sw-icon' src={LeftArrow} alt="leftArrow" />
            <img className="sw-icon" src={RightArrow} alt="rightArRightArrow" />
        </span>
    </div>
  )
}

export default Pagination