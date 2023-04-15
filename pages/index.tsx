import React from 'react'
import Sidebar from '../components/sidebar'
import Button from '@/components/Button'

function index() {
  return (
    <form style={{display: "flex", flexDirection: "column", gap: "20px", alignItems: "start"}}>
      <Button disableShadow />
      <Button disableShadow disabled />

      {/* <button>to disable</button> */}
      {/* <Button bg="none" border="1px solid grey" color="#000000" /> */}

    </form>
  )
}

export default index