import { Component } from '@angular/core';
import { User } from './model/user';

// causes errors
/*
var models = require("./models"); //place on top of the file
models.sequelize.sync().then(function() {
 var server = app.listen(app.get('port'), function() {
 console.log('Express server listening on port ' + server.address().port);
 });
});
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'insurance-quotes';

}

