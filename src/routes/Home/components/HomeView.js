import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import {update_user} from '../../../store/global_reducers/user'

export const HomeView = (props) => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage}/>
  </div>
);

export default HomeView
