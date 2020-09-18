var Observable = require('FuseJS/Observable');
var GeoLocation = require("FuseJS/GeoLocation");

var immediateLocation = JSON.stringify(GeoLocation.location);

console.log(immediateLocation);

trafic_data = [
		{
			"name":"MVONDO Yannick",
			"destination": "Ndokoti Tunnel",
			"time": 13,
			"date": "05.09.2020",
			"unity": "Min",
			"since": "13",
			"logo": "Assets/Images/batman.png",
			"coords" : {
				"lat": "4.0404889",
				"long": "9.7329517"
			}
		},
		{
			"name":"MVONDO Yannick",
			"destination": "Rond point Dakar",
			"time": 10,
			"date": "05.09.2020",
			"unity": "Min",
			"since": "13",
			"logo": "Assets/Images/batman.png",
			"coords" : {
				"lat": "4.0804889",
				"long": "9.7229517"
			}
		},
		{
			"name":"MVONDO Yannick",
			"destination": "Marché Dakar",
			"time": 30,
			"date": "05.09.2020",
			"unity": "Sec",
			"since": "13",
			"logo": "Assets/Images/batman.png",
			"coords" : {
				"lat": "4.0004889",
				"long": "9.7129517"
			}
		},
		{
			"name":"MVONDO Yannick",
			"destination": "Rond point CCC",
			"time": 3,
			"date": "05.09.2020",
			"unity": "Min",
			"since": "13",
			"logo": "Assets/Images/batman.png",
			"coords" : {
				"lat": "4.0904889",
				"long": "9.7529517"
			}
		},
		{
			"name":"MVONDO Yannick",
			"destination": "Afrique Hotel",
			"time": 13,
			"date": "05.09.2020",
			"unity": "Min",
			"since": "13",
			"logo": "Assets/Images/batman.png",
			"coords" : {
				"lat": "4.0504889",
				"long": "9.7629517"
			}
		},
		{
			"name":"MVONDO Yannick",
			"destination": "Brazaville",
			"time": 29,
			"date": "05.09.2020",
			"unity": "5",
			"since": "13",
			"logo": "Assets/Images/batman.png",
			"coords" : {
				"lat": "4.0304889",
				"long": "9.7729517"
			}
		}
	];

	function getVille(){
		url="https://ipapi.co/8.8.8.8/json/";
		fetch(url).then(function(response){
			console.log('Inside first then');
			return response.json();
		}).then(function(data){
			console.log("inside second them")
			console.log(data);
		})
	}

	getVille();

module.exports = {
	trafic_data: trafic_data,
	immediateLocation: immediateLocation
};
