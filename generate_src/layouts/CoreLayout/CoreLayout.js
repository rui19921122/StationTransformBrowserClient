import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  user: state.user,
  dispatch: state.dispatch
});

export const CoreLayout = ({user, children,dispatch}) => {
  return (
    <div className='page-wrapper'>
      <Header user={user}
              dispatch={dispatch}
      />
      <div className='main-wrapper'>
        {children}
      </div>
    </div>
  );
}

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

/*  Object of action creators (can also be function that returns object).
 Keys will be passed as props to presentational components. Here we are
 implementing our wrapper around increment; the component doesn't care   */


export default connect(mapStateToProps)(CoreLayout)

