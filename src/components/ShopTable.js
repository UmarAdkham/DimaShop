import React from "react"
import { useSelector } from "react-redux";


const ShopTable = () => {
  let shops = useSelector((state) => state.shops);
  console.log(shops)
  return(
    <>
    <table className="table">
      <thead>
        <tr>
          <th>Dokon nomi</th>
          <th>Dokon manzili</th>
        </tr>
      </thead>
      <tbody>
       
          {
            shops.map((element) => {
              return(
                <tr key={element.id}>
                  <td>{element.name}</td>
                  <td>{element.address}</td>
                </tr>
              )
            })
          }
      </tbody>
    </table>
    </>
  )
}

export default ShopTable;