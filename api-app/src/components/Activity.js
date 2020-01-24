import React from 'react';
import {connect} from 'react-redux';

import {fetchActivity} from '../actions'

const Activity = props => {
    console.log(props)
    return (
        <div className="nextTry">
            <button onClick={props.fetchActivity}>Check Crypto</button>
           
            {props.activity.activity.map((mov)=>( 


<section className= 'cryptoContainer'>
<ul>
  <li>
  
    <figure >
      
    <h1 className= 'text'>{mov.name} | {mov.symbol}</h1>
    
     <img src={mov.iconUrl} className= 'posterImage'/>
     <h3 className= 'textNew'>${mov.price}</h3>
    </figure>
  </li>
</ul>           
</section>

            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        activity: state,
        error: state.error
    }
}

export default connect (
    mapStateToProps,
    {fetchActivity}
)(Activity);