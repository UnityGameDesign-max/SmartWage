import React from 'react'
import LeftArrow from '../Assets/Icons/LeftArrow.svg';
import RightArrow from '../Assets/Icons/RightArrow.svg';


const pageNumbers : string[] = ["1", "2","3","4","5"];

const Pagination = (props: any) => {

 const getSelectedPageNumber = (event : any) => {
    props.setItemsPerRow(event.target.value)
 }

  return (
    <div className="smartWage-flex-items" style={{float: 'right'}}>
        <span className="page-rows smartWage-typography-normal">
            Rows per page: {" "}
            <select onChange={getSelectedPageNumber} style={{border: 'none'}} className="focus-none sw-mr-20" name="page">
                {pageNumbers.map((page : string)=> (
                    <option value={page}>{page}</option>
                ))}
            </select>
        </span>
        <span className="smartWage-typography-normal">{props.nextPage} of {props.currentData.length}</span>
        <span>
            <img onClick={props.previousPage} className='sw-icon' width={'20'} src={LeftArrow} alt="leftArrow" />
            <img onClick={props.nextPage} className="sw-icon" width={'20'} src={RightArrow} alt="rightArRightArrow" />
        </span>
    </div>
  )
}

export default Pagination