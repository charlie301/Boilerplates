### Notes and examples to help when setting up Routes in react
-----

##### Browser history
- browserHistory - Make sure you also set base URL in index.html to ensure it
works correctly.

##### Page reload fix
- wildcard on page reloads - in main (server)
```sh
app.get('*', function(req,res){
     res.sendFile(path.resolve(__dirname, 'server' ,'static', 'index.html'));
});
```

##### Use of <Link >
- When defining <Links> use the <Link to=""> rather than <a href="">. See
Main.jsx for EXAMPLE

##### Styling <Link >
- In css still ref the <Link> as - ie for selection = a.active, as when
converted <Link> is transformed back to an <a>

##### Passing data to component directly
- if you pass data into to a component via its <Route> you can access this
using = this.props.route.<data>

##### array mapping using <Link >
- Car.jsx ln 15 -> see how each car object mapped has been returned as a Link
with href assigned to car id.

##### Event handlers
- Ensure you bind 'this' when attaching event handlers to buttons. see CarDetail.jsx
line

##### Page redirect
- Easy page redirect using 'browserHistory.push('<>')' see CarDetail.jsx ln 7 for
implementation example
