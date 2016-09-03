/* ============================================================================
                    PLAYER COMPONENT REFS FOR SMALLER VER
==============================================================================*/


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
                         <Counter score={props.score}/>
               </div>
     );
}

Player.PropTypes = {
     name: React.PropTypes.string.isRequired,
     score: React.PropTypes.number.isRequired,
}

//COUNTER COMPONENT ===========================================================

//Component [3] <-- Nested in <Player> instance
function Counter(props){
     return(
          <div className="counter">
               <button className="counter-action-decrement"> - </button>
               <div className="counter-score">{props.score}</div>
               <button className="counter-action-increment"> + </button>
          </div>
     );
}

Counter.PropTypes = {
     score: React.PropTypes.number.isRequired,
}

//APPLICATION COMPONENTS ======================================================

//Component [1]  <-- Main container component
function Application(props){
     return (
          <div className="scoreboard">

               <Header title="scoreboard"/>

               <div className="players">

                    {/* Mapped instances of player iterating array using map */}
                    {props.players.map(function(player,index){
                         return (
                              <Player name={player.name} score={player.score} key={index} />
                         )
                    })}

                    {/* Hardcoded instantions of Player instances */}
                    <Player name="Ronnie" score={16} />
                    <Player name="Charlie" score={10} />

          </div>

          </div>
     );
}

//Enforce object schema when passing in props!
Application.PropTypes = {
     players: React.PropTypes.arrayOf(React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          score: React.PropTypes.number.isRequired,
     })).isRequired,
}

/* Pass player enclosed in JSX braces | ensure you pass map KEY when iterating!*/

ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById('container'));