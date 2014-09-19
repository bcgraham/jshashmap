define(function() {
	
	var Dictionary = function(){
		// this.Map = {}
		this.Map = [];
	}

	Dictionary.prototype = {
		add_key_value_pair: function(key, value) {
			var results = this.get_index(key);
			var index = results[0];
			var found = results[1];

			if (found) {
				this.Map[index][1] = value;
			} else {
				this.Map.splice(index, 0, [key, value]);
			}
		},
		// get_index: function(key) {
		// 	var i = Math.floor(this.Map.length / 2);
		// 	var d = Math.ceil(i / 2);
		// 	while (d != 0) {
		// 		console.log('bef:' + i + ',' + d)
		// 		if (this.Map[i][0] == key) {
		// 			return i;
		// 		} else if (key < this.Map[i][0]) {
		// 			i -= d
		// 		} else {
		// 			i += d
		// 		}
		// 		d = Math.ceil(d / 2);
		// 		console.log('aft:' + i + ',' + d)
		// 	} 
		// 	return -1;
		// },
		get_index: function(key) {
			if (this.Map.length==0) {
				return [0, false]
			}
			if (this.Map.length == 1) {
				return [0, (this.Map[0][0]==key)];
			}
			var i = Math.floor(this.Map.length / 2)-1;
			var d = Math.max(1, Math.ceil(i / 2));
			console.log('start:' + i + ',' + d)
			while (d != 0) {
				console.log('bef:' + i + ',' + d)
				if (this.Map[i][0] == key) {
					return [i, true];
				} else if (key < this.Map[i][0]) {
					i -= d
				} else {
					i += d
				}
				d = Math.ceil(d / 2);
				console.log('aft:' + i + ',' + d)
			} 
			return { index: i, found: false};
		},
		get_value: function(key) {
			var results = this.get_index(key);
			var index = results[0];
			var found = results[1];
			if (found)
				return this.Map[index][1]
			else 
				return undefined	
		},
		remove_key: function(key) {
			var results = this.get_index(key);
			var index = results[0];
			var found = results[1];
			if (found) {
				this.Map.splice(index,1);
			}
		},
	}

	var ListDictionary = function(){
		// this.Map = {}
		this.Map = [];
	}

	ListDictionary.prototype = {
		add_key_value_pair: function(key, value) {
			// this.Map[key] = value;
			// this.Map.push([key, value]);
			var index = this.get_index(key);
			if (index > -1) {
				this.Map[index][1] = value;
			} else {
				this.Map.push([key, value]);
			}
		},
		get_index: function(key) {
			for (i = 0; i < this.Map.length; i++) {
				if (key == this.Map[i][0])
					return i;	
			}
			return -1;
		},
		get_value: function(key) {
			var index = this.get_index(key);
			if (index > -1)
				return this.Map[this.get_index(key)][1]
			else 
				return undefined	
		},
		remove_key: function(key) {
			var index = this.get_index(key);
			if (index > -1) {
				this.Map.splice(i,1);
			}
		},
	}

	var JSDictionary = function(){
	this.Map = {}
	}

	JSDictionary.prototype = {
		add_key_value_pair: function(key, value) {
			this.Map[key] = value;
		},
		get_value: function(key) {
			return this.Map[key]
		},
		remove_key: function(key) {
			delete this.Map[key]
		}
	}

	return {
		getDictionary: function() { return new Dictionary()},
	}

});