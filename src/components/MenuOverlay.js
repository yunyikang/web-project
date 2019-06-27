import React from "react"

const MenuOverlay = ({ click }) => {
  return <div>{click && <h1>Button is clicked and is {`${click}`}</h1>}</div>
}

export default MenuOverlay
