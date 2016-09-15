/* =============================================================================
        HANDLING FORM DATA TEMPLATE
==============================================================================*/
import React from 'react';

/*Bookstore Main class
==============================================================================*/
var Bookstore = React.createClass({

  /* ------------------------------------------------------------------------ */
  getInitialState(){
    return(
      {
        currentStep: 1,
        formValues: {}
      }
    );
  },

  /* ------------------------------------------------------------------------ */
  //Props method passed to children - to be processed by this parent container
  updateFormData(formData){

    //Create a new object from formData and merge with state.formValues
    let formValues = Object.assign({}, this.state.formValues, formData);

    /*render the next int step based on current user step and update formValues
      to hold current selection */
    let next = this.state.currentStep + 1;
    this.setState({
      currentStep: next,
      formValues: formValues
    });

    //Console check in testin
    console.log(`${formData.selectedBooks}`);
  },

/* ------------------------------------------------------------------------ */
  //Switch statement used to render view needed
  render(){
    switch(this.state.currentStep){
      case 1:
        return <BookList
                  updateFormData={this.updateFormData}/>;
        break;
      case 2:
        return <ShippingDetails
                  updateFormData={this.updateFormData}/>;
        break;
      case 3:
        return <DeliveryDetails
                  updateFormData={this.updateFormData}/>;
        break;
    }
  }
});

/*BOOK LIST
==============================================================================*/

var BookList = React.createClass({

  //Set the intial state to hold 3 books and empty array
  getInitialState(){
    return({
      books: [
        {id: 1,name: "One flew over", author: "Mike M"},
        {id: 2,name: "Harry Shitter", author: "Richard c"},
        {id:3,name: "Breaking Bones", author: "Lucy J"}
      ],
      selectedBooks: [],
      error: false
    });
  },
/* ------------------------------------------------------------------------ */
  //Template for book selection checkbox
  _renderBook(book){
    return(
      <div className="checkbox" key={book.id}>
        <label>
          <input type="checkbox"
            value={book.name}
            onChange={this.handleSelectedBooks} />
          {book.name} -- {book.author}
        </label>
      </div>
    )
  },

  //Render error if user attempts to submit without selection
  _renderError(){
    if(this.state.error){
      return(
        <div className="alert alert-danger">
          {this.state.error}
        </div>
      )
    }
  },
/* ------------------------------------------------------------------------ */
  //called when submit buttonis pressed
  handleSubmit(e){
    e.preventDefault();
    /* Check length of selected books to ensure user has made a selection -
        if not show change state to show user error*/
    if(this.state.selectedBooks.length === 0){
      this.setState({
        error: 'No book has been selected - Please select at least one'
      });
    } else{
      this.setState({
        error: false
      });
      this.props.updateFormData({
        selectedBooks: this.state.selectedBooks //call the update method in parent
      })
    }

    /*updateFormData is part of the props as it was handed down by the parent
      container in the Bookstore switch statement
    this.props.updateFormData({
      selectedBooks: this.state.selectedBooks
    });
    */
  },
/* ------------------------------------------------------------------------ */
  //if book just checked -> push book to array
  //else if book checked already -> remove from array
  handleSelectedBooks(e){
    let selectedBooks = this.state.selectedBooks;
    let index = selectedBooks.indexOf(e.target.value);
    console.log(`index value is ${index}`);
    console.log(`target value is ${e.target.value}`);
    if(e.target.checked){
      selectedBooks.push(e.target.value);
    }else{
      selectedBooks.splice(index,1);
    }
    this.setState({
      selectedBooks: selectedBooks
    });
  },
/* ------------------------------------------------------------------------ */
  //render the list of checkoboxes using the _render book template
  render(){

    //Create an error message if user has not selected a book
    var errorMessage = this._renderError();

    return(
      <div>
        <h3> Choose a book </h3>
        {errorMessage}
        <form onSubmit={this.handleSubmit}>

          {this.state.books.map((book) => {
            return this._renderBook(book);
          })}

          <input type="submit" className="btn btn-success" />
        </form>
      </div>
    )
  }
});

/*SHIPPING DETAILS
==============================================================================*/

var ShippingDetails = React.createClass({
  getInitialState(){
    return(
      {
        fullName: '',
        contactNumber: '',
        shippingAddress: '',
        error: false
      }
    )
  },

  _renderError(){
    if(this.state.error){
      return(
        <div className="alert alert-danger">
          {this.state.error}
        </div>
      );
    }
  },

  _validateInput(){

    if(this.state.fullName === ''){
      this.setState({error: 'Name needed'});
    }else if(this.state.contactNumber === ''){
      this.setState({error: 'Number required'});
    }else if(this.state.shippingAddress === ''){
      this.setState({error: 'Shipping address required'});
    }else{
      console.log('all true called');
      this.setState({error: false});
      return true;
    }
 },

 handleSubmit(e){
   e.preventDefault();
   let formData = {
     fullName: this.state.fullName,
     contactNumber: this.state.contactNumber,
     shippingAddress: this.state.shippingAddress
   }
   console.log(formData.fullName);
   if(this._validateInput()){
     this.props.updateFormData(formData);
   }
 },

 handleChange(event, attr){
    var newState = this.state;
    newState[attr] = event.target.value;
    this.setState(newState);
    console.log(this.state);
 },

  render(){

    let errorMessage = this._renderError();

    return(
      <div>
        <h1> Enter shipping information </h1>
        {errorMessage}
        <div style={{width:200}}>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <input className="form-control"
                     type="text"
                     placeholder="full name"
                     value={this.state.fullName}
                     onChange={function(event){
                       return this.handleChange(event, 'fullName')
                     }.bind(this)}/>
              </div>

              <div className="form-group">
                <input className="form-control"
                       type="text"
                       placeholder="Contact Number"
                       value={this.state.contactNumber}
                       onChange={function(event){
                         return this.handleChange(event, 'contactNumber')
                       }.bind(this)}/>
              </div>

              <div className="form-group">
                <input className="form-control"
                       type="text"
                       placeholder="Shipping address"
                       value={this.state.shippingAddress}
                       onChange={function(event){
                         return this.handleChange(event, 'shippingAddress')
                       }.bind(this)}/>
              </div>

              <div className="form-group">
                <button type="submit"
                        ref="submit"
                        className="btn btn-success"> Submit
                </button>
              </div>

          </form>
        </div>
        </div>
    )
  }
});

/*DELIVERY DETAILS
==============================================================================*/

var DeliveryDetails = React.createClass({
  render(){
    return(
      <h1> Your delivery details </h1>
    )
  }
});

export default Bookstore;
