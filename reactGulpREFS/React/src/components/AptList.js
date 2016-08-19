/* ============================================================================
               NOT PRODUCTION CODE -
               TEMPLATE TO ASSIST IN INTERGRATING REACT INTO PROJECTS
==============================================================================*/

//******************************************************************************
//        THIS IS CHILD COMPONENET -- See app.js.line 87 for implementation
//******************************************************************************

var React = require('react');


//Sub component listing *Note it does not have access to main conponent state
var AptList = React.createClass({

     handleDelete: function(){
          this.props.onDelete(this.props.currentObject)
     },

     render: function(){
          return(
               <li className="pet-item media">

                    <button className="pet-delete btn btn-xs btn-danger"
                         onClick={this.handleDelete}>
                         <span className="glyphicon glyphicon-remove"></span>
                    </button>

                 <div className="pet-info media-body">
                   <div className="pet-head">
                     <span className="pet-name">{this.props.currentObject.petName}</span>
                     <span className="apt-date pull-right">{this.props.currentObject.aptDate}</span>
                   </div>
                   <div className="owner-name"><span className="label-item">Owner:</span>
                   {this.props.currentObject.ownerName}</div>
                   <div className="apt-notes">{this.props.currentObject.aptNotes}</div>
                 </div>
               </li>
          )//render return
     }
});

module.exports = AptList;

/*
Buton onclick function needs to be camelcased and function
Inlcuded in the React Class
*/
