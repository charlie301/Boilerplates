//UTILITY =====================================================================
var PLAYERS = [
     {
          name: 'Reggie',
          score: 26
     },
     {
          name: 'Dave',
          score: 23
     },
     {
          name: 'Archy',
          score: 98
     },
     {
          name: 'Landa',
          score: 32
     },
     {
          name: 'Smorkas',
          score: 26
     }
];

// HEADER COMPONENT ============================================================

//Component [2]
function Header(props){
     return(
          <div className="header">
               <h1>{props.title}</h1>
          </div>
     );
}

Header.PropTypes = {
     title: React.PropTypes.string.isRequired,
}

// PLAYER COMPONENT ===========================================================


//Component [2]  <!-- Nested in container data [Template for player]
function Player(props){
     return (
               <div className="player">
                    <div className="player-name">
                         {props.name}
                    </div>
                    <div className="player-score"> </div>
                         <Counter score={props.score} onChange={props.onScoreChange}/>
               </div>
     );
}

Player.PropTypes = {
     name: React.PropTypes.string.isRequired,
     score: React.PropTypes.number.isRequired,
     onScoreChange: React.PropTypes.func.isRequired
}

//COUNTER COMPONENT ===========================================================

/* How is this used
   1. incScore is assigned onClick for buttons, as it is part of the component
     it is referenced w/ syntax - onClick={this.incScore}
   2.Once getIntialState has been set, accessing the object needs to done through
     this.setState({}) <-- do not set directly.


var Counter = React.createClass({
     propTypes: {
        initialScore: React.PropTypes.number.isRequired,
     },
     getInitialState: function(){
          return{
               score: this.props.initialScore
          }
     },
     incScore: function(e){
          this.setState({
               score: (this.state.score + 1)
          });
     },
     decScore: function(e){
          this.setState({
               score: this.isBelowOne()
          });
     },
     isBelowOne: function(){
          if(this.state.score == 0){
               alert('You cannont go below');
               return 0;
          }
          else{
               //Check you can actually do this...
               return this.state.score - 1;
          }
     },
     render: function(){

     }
});
*/

function Counter(props){
     return(
          <div className="counter">

               <button
                    className="counter-action-decrement" onClick={function(){
                         props.onChange(-1);
                    }}> - </button>

               <div className="counter-score">{props.score}</div>

               <button
                    className="counter-action-increment" onClick={function(){
                         props.onChange(+1);
                    }}> + </button>
          </div>
     );
}

Counter.PropTypes = {
     score: React.PropTypes.number.isRequired,
     onChange: React.PropTypes.func.isRequired
}


//APPLICATION COMPONENTS ======================================================

/* How have you restructured state?
   1. <Application /> componenet now recieves the array of player objects when
      passed for dom rendering.
   2. PropTypes object as the schema for data passed into this componenet
   3. getIntialState sets a state object that copies the data passed in on dom
      render. It can access this via 'this.props' <-- passed @ 210.
   4. In the render when mapping the componet can access this data from the state
      object vy directly accessing 'this.state' <-- @178
   5. The player map uses player.<> notation as it can because its currently
      iterating objects

      this.prop = Data passed into the component on render/call from other render
      this.state = only accessible by the component in use

*/

var Application = React.createClass({

     //Enforce object schema when passing in props!
     PropTypes: {
          title: React.PropTypes.string,
          initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
               name: React.PropTypes.string.isRequired,
               score: React.PropTypes.number.isRequired,
          })).isRequired,
     },

     //changed to getDefaultProps as opposed to defaultProps if component made stateful
     getDefaultProps: function(){
          return{
               title: 'deafult - recheck'
          }
     },

     getInitialState: function(){
          return{
               players: this.props.initialPlayers,
          }
     },

     onScoreChange: function(index,delta){
          console.log('oSc : ' + index, delta);
          this.state.players[index].score += delta;
          this.setState(this.state);
     },

     render: function(){
          return (
               <div className="scoreboard">

                    <Header title="scoreboard"/>

                    <div className="players">

                         {/* Mapped instances of player iterating array using map */}
                         {this.state.players.map(function(player,index){
                              return (
                                   <Player
                                        name={player.name}
                                        score={player.score}
                                        key={index}
                                        onScoreChange={function(delta){this.onScoreChange(index,delta)}.bind(this)}
                                        />
                              )
                         }.bind(this))}

                         {/* Hardcoded instantions of Player instances */}
                         <Player name="Ronnie" score={16} />
                         <Player name="Charlie" score={10} />

                    </div>
               </div>
          );
     }
});


/* Pass player enclosed in JSX braces | ensure you pass map KEY when iterating!*/

ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('container'));
