import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({children}) => (
  <div className='page-wrapper'>
    <Header />
    <div className='main-wrapper'>
      {children}
    </div>
  </div>
);


export default CoreLayout
