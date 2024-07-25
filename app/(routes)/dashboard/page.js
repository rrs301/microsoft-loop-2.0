"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import Header from './_components/Header'
import WorkspaceList from './_components/WorkspaceList'
import useLocalStorage from 'use-local-storage';

function Dashboard() {
  
  return (
    <div>
     
      <Header/>

      <WorkspaceList/>
    </div>
  )
}

export default Dashboard