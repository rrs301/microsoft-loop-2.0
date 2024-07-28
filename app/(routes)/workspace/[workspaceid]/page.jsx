import React from 'react'
import SideNav from '../_components/SideNav'
import { Room } from '@/app/Room'

function Workspace({params}) {
  return (
    <div>
      <Room params={params}>
        <SideNav params={params} />
        </Room>
    </div>
  )
}

export default Workspace