import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import PropTypes from 'prop-types';

function AddressLabel({data, className}){
  const {firstname, lastname, street, city, state, zipcode} = data;
  return(
<div className={className}>
 <div className="FullName">
  <span className="firstname">{firstname} </span>
  <span className="LastaName">{lastname}</span>
 </div>
 <div className="TheAddress">
  <span className="street">{street} </span>
  <br/>
  <span className="city">{city}, </span>
  <span className="state">{state} </span>
  <span className="zipcode">{zipcode}</span>
 </div>
</div>
);
}
AddressLabel.PropTypes = {
data: PropTypes.shape({
firstname:PropTypes.string.isRequired,
lastname:PropTypes.string.isRequired,
street:PropTypes.string.isRequired,
city:PropTypes.string.isRequired,
state:PropTypes.string.isRequired,
zipcode:PropTypes.string.isRequired
}).isRequired
}
 const Person={
   firstname : 'Karel',
   lastname: 'Guerra',
   street : '21380 SW 244 ST',
   city : 'Homestead',
   state : 'FL',
   zipcode:'33033'
 }

 const toPerson={
   firstname : 'Karel',
   lastname: 'Guerra',
   street : '21380 SW 244 ST',
   city : 'Homestead',
   state : 'FL',
   zipcode:'33033'
 }
 const fromPerson={
   firstname : 'Leticia',
   lastname: 'Ruiz',
   street : '15401 SW 288 ST',
   city : 'Homestead',
   state : 'FL',
   zipcode:'33031'
 }
function Envelope({toPerson , fromPerson}){
  console.log(toPerson);
return(
  <div className='envelope'>
    <h5>From:</h5><AddressLabel data={fromPerson} className='from-person'/>
    <h5 >To:</h5><AddressLabel data={toPerson} className='to-person'/>

  </div>
)
}
ReactDOM.render(<Envelope toPerson={toPerson} fromPerson={fromPerson} />, document.getElementById('root'));
