var TIMES = [9,10,11,12,13,14];

var PITCHES = [1,2,3,4,5,6,7,8];

var GAMES_PER_TEAM = 4;

var GROUPS = {
	"Red" :{"background-color": "tomato",},
	"White" :{"background-color": "white",},
	"Blue" :{"background-color": "aqua",},
}

var TEAMS = {
	"1": {
			"name": "Tecumsehs",
			"group": "White",
			"opponents": ["5", "6", "7", "8"],
			"schedule": [],
		  },
	"2": {
			"name": "Mighty Douche",
			"group": "White",
			"opponents": ["5", "6", "7", "8"],
			"schedule": [],
		  },
	"3": {
			"name": "Loan Wolves",
			"group": "White",
			"opponents": ["5", "6", "7", "8"],
			"schedule": [],
		  },
	"4": {
			"name": "Badgers",
			"group": "White",
			"opponents": ["5", "6", "7", "8"],
			"schedule": [],
		  },
	"5": {
			"name": "Tecumsehs",
			"group": "White",
			"opponents": ["1", "2", "3", "4"],
			"schedule": [],
		  },
	"6": {
			"name": "Mighty Douche",
			"group": "White",
			"opponents": ["1", "2", "3", "4"],
			"schedule": [],
		  },
	"7": {
			"name": "Loan Wolves",
			"group": "White",
			"opponents": ["1", "2", "3", "4"],
			"schedule": [],
		  },
	"8": {
			"name": "Badgers",
			"group": "White",
			"opponents": ["1", "2", "3", "4"],
			"schedule": [],
		  },
	"9": {
			"name": "Tecumsehs",
			"group": "Blue",
			"opponents": ["13", "14", "15", "16"],
			"schedule": [],
		  },
	"10": {
			"name": "Mighty Douche",
			"group": "Blue",
			"opponents": ["13", "14", "15", "16"],
			"schedule": [],
		  },
	"11": {
			"name": "Loan Wolves",
			"group": "Blue",
			"opponents": ["13", "14", "15", "16"],
			"schedule": [],
		  },
	"12": {
			"name": "Badgers",
			"group": "Blue",
			"opponents": ["13", "14", "15", "16"],
			"schedule": [],
		  },
	"13": {
			"name": "Tecumsehs",
			"group": "Blue",
			"opponents": ["9", "10", "11", "12"],
			"schedule": [],
		  },
	"14": {
			"name": "Mighty Douche",
			"group": "Blue",
			"opponents": ["9", "10", "11", "12"],
			"schedule": [],
		  },
	"15": {
			"name": "Loan Wolves",
			"group": "Blue",
			"opponents": ["9", "10", "11", "12"],
			"schedule": [],
		  },
	"16": {
			"name": "Badgers",
			"group": "Blue",
			"opponents": ["9", "10", "11", "12"],
			"schedule": [],
		  },
	"17": {
			"name": "Tecumsehs",
			"group": "Red",
			"opponents": ["21", "22", "23", "24"],
			"schedule": [],
		  },
	"18": {
			"name": "Mighty Douche",
			"group": "Red",
			"opponents": ["21", "22", "23", "24"],
			"schedule": [],
		  },
	"19": {
			"name": "Loan Wolves",
			"group": "Red",
			"opponents": ["21", "22", "23", "24"],
			"schedule": [],
		  },
	"20": {
			"name": "Badgers",
			"group": "Red",
			"opponents": ["21", "22", "23", "24"],
			"schedule": [],
		  },
	"21": {
			"name": "Tecumsehs",
			"group": "Red",
			"opponents": ["17", "18", "19", "20"],
			"schedule": [],
		  },
	"22": {
			"name": "Mighty Douche",
			"group": "Red",
			"opponents": ["17", "18", "19", "20"],
			"schedule": [],
		  },
	"23": {
			"name": "Loan Wolves",
			"group": "Red",
			"opponents": ["17", "18", "19", "20"],
			"schedule": [],
		  },
	"24": {
			"name": "Badgers",
			"group": "Red",
			"opponents": ["17", "18", "19", "20"],
			"schedule": [],
		  },
};

var SLOTS = {};

var GAMES = {};

var FINALTT = [];




