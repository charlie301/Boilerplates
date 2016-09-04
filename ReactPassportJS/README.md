### Important things to remember when working with React

#### props, state & this
----------------

- props are passed into the componenet - and are accessed by the componenet using the props.prefix
- state is accessed and held in the componenet
- this when mapping needs to be binded to each iteration  

#### state & props example
```sh
class Garage extends React.Component {
    moveMotorFoward: function(){
        //code to move foward
    },
    render:function(){
    return (
        <div className="garageFront">
                //render a car componenet
                <Car
                  name="Ford"
                  model="Focus"
                  goFoward={this.moveMotorFoward}  <-- this. = function in its immediate parent component
                  oilLeak={props.needFixing}       <-- props. = function is handled by another higher parent
                 />
        </div>
    );
  }
} // end of Garage component

 ==================================================================>   

Class Car extends React.Component {
        ......
        getIntialState: {
            doors: 5
        },
        render: function(){
        return(
            <div className="car">
                <div className="carDetails">
                    <p> Car: {props.name} </p>            <-- props passed to the component
                    <p> Model: {props.model}</p>          <-- props passed to the component
                    <p> Doors: {this.state.doors}</p>     <-- state in the component
                </div>
                <div class="operateCar">
                    <Button onClick={props.goFoward) />  <-- goFoward function passed to the componenet
                </div>
                <div class="carIssue">
                    <Button onClick={props.oilLeak} />
                </div>
            </div>
        );
    }    
}        
```



#### Mapping Example
```sh
** [] of {} - .employees
[
 {name: "Richie", age: 32, yearsService: 10},
 {name: "Arthur", age: 18, yearsService: 1},
 {name: "Bobby", age: 44, yearsService: 18},
 {name: "Alex", age: 26, yearsService: 6},
 {name: "Zeus", age: 24, yearsService: 6}
]

================================================ Display Class ===========================
class Display extends React.Component{

    getInitialState: function(){
        employees: employees
    },
    addYear: function(index,num){
        //By binding i in the render function we can easily access the specific employee object
        this.state.employees[i].yearsOfService += num;
        this.setState(this.state);
    },
    addADetail: function(index,detail){
        "
        1. function(detail) = Anonymous function that Employee passing up the chain via .prop
        2. this.AddADetail(i,detail) = calls this function but also passes in the current index so the function        knows which employee object made the request.
        "   
    },
    render:function(){
        return(
            <div className="empList">
                  {this.state.employees.map(function(emp,i){
                      return (
                           <Employee
                                name={emp.name}
                                age={emp.age}
                                service={emp.yearsService}
                                key={i}                         <-- for React changes
                                addYear{function(num){this.addEmpYear(i,num)}.bind(this)}
                                addDetail={function(detail){this.AddADetail(i,detail)}.bind(this)}
                                "addDetail this needs to be bound again as its an iteration"
                                />
                      )
                 }.bind(this))}   <-- Needed to ensure this is bound to correct employee on addDetail function
            <div>
        )
    }
}

================================================ Employee Class ===========================

//Stateless components do need to be initialized as classes!

function Employee(props){
    return (
        <div className="employee">
            <h3 className="empTitle"> {props.name} </h3>
            <p> Age: {props.age} </p>
            <p> Service: {props.service} years </p>
            <Button onClick={props.addDetail}> Change </Button>
            <Button onClick=function(){props.onChange(1)}>Add year</Button>
        </div>
    );
}

Employee.PropTypes = {
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    addDetail: React.PropTypes.func.isRequired,
    addYear: React.PropTypes.func.isRequired
}

```
