import React from 'react'

function List({item}) {
  return (
    <>
        {Object.entries(item).map(([key,value])=>{
            console.log("value-->"+value);
            
            return <td key={key}>
                        {value}
                    </td>
        })}
    </>
  )
}

export default List