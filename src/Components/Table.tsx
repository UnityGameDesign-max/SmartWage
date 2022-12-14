import React from 'react'
import '../Styles/table.css'

const Table = (props : any) : JSX.Element => {

  const separateNewWord = (columnWord : string) : string=> {
    return columnWord.replace(/([A-Z])/g, ' $1').trim();
  }

  return (
    <div>
        <table style={{borderCollapse: "collapse"}} className="sw-width-fill sw-mb-20 sw-border-bottom">
            <thead>
                <tr>
                    {props.columnData.map((column : any) =>(
                        <th className='smartWage-typography-subtitle sw-p-15 smartWage-align-text'>{separateNewWord(column.field)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.tableData?.map((data : any) =>(
                    <tr className="sw-odd-row ">
                        {props.columnData.map((column: any) => (
                            <td className="smartWage-typography-light sw-p-15 smartWage-align-text">{data[column.field]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table