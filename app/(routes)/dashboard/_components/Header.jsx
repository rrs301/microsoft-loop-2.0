"use client"
import Logo from '@/app/_components/Logo'
import { db } from '@/config/firebaseConfig';
import { OrganizationSwitcher, UserButton, useAuth, useUser } from '@clerk/nextjs'
import { doc, setDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'

function Header() {
  const { orgId } = useAuth();
  const { user } = useUser();

  useEffect(()=>{
    user&&saveUserData();
  },[user])

  /**
   * Used to save user data
   */
  const saveUserData = async () => {
     const docId = user?.primaryEmailAddress?.emailAddress
    try {
      await setDoc(doc(db, 'LoopUsers', docId), {
        name: user?.fullName,
        avatar: user?.imageUrl,
        email: user?.primaryEmailAddress?.emailAddress
      })
    }
    catch (e) {

    }
  }
  return (
    <div className='flex justify-between items-center p-3
    shadow-sm'>
      <Logo />
      <OrganizationSwitcher
        afterLeaveOrganizationUrl={'/dashboard'}
        afterCreateOrganizationUrl={'/dashboard'} />
      <UserButton />
    </div>
  )
}

export default Header