"use client"
import React, { useEffect } from 'react'
import SideNav from '../../_components/SideNav'
import DocumentEditorSection from '../../_components/DocumentEditorSection'

function WorkspaceDocument({params}) {

 
  return (
    <div>
      {/* Side Nav  */}
      <div className=''>
          <SideNav params={params} />
      </div>

      {/* Document  */}
      <div className='md:ml-72'>
        <DocumentEditorSection params={params} />
      </div>
    </div>
  )
}

export default WorkspaceDocument