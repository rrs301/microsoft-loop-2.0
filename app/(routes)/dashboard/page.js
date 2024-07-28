"use client"

import React, { useEffect } from 'react'
import Header from './_components/Header'
import WorkspaceList from './_components/WorkspaceList'


function Dashboard() {
  
  return (
    <div>
     
      <Header/>

      <WorkspaceList/>
    </div>
  )
}

export default Dashboard