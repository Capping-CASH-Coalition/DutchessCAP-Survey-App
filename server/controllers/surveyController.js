//initialize exports, this is where other node files will look for the data
var exports = module.exports = {};

//Function to create Survey Object
function Survey(){
	this.version = 0;
	this.id = 0;
	this.type = "";
    this.options = [];
    this.responses = [];
    this.personId;
    this.email;
    this.phoneNumber;
    this.firstName;
    this.lastName;
}

//Create empty json object for userSettings and add to exports
exports.Survey = new Survey();

