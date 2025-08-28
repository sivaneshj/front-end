import React from 'react'

function List({item}) {
  return (
    <>
        {Object.entries(item).map(([key,value])=>{
            return <td key={key}>
                        {value}
                    </td>
        })}
    </>
  )
}

export default List