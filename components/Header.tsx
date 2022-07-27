import { Header } from '@cred/neopop-web/lib/components';
import React from 'react'
import TextFieild from './TextFieild';

const HeaderCam = () => {
  return (
    <div className='h-12 border-x-2 flex items-center justify-items-center p-3'>
        <TextFieild label='Daily Tools'/>
    </div>
  )
}

export default HeaderCam