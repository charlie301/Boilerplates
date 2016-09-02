import React from 'react';
import {Card, CardTitle} from 'material-ui';

class Home extends React.Component {
     render(){
          return (
               <Card className="container">
                    <CardTitle title="SenSafe" subtitle="Homepage" />
               </Card>
          );
     }
}

export default Home;
