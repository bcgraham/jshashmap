var Dictionary = function(){
	this.Map = {}
}

Dictionary.prototype = {
	add_key_value_pair: function(key, value) {
		this.Map[key] = value;
	}
	get_value: function(key) {
		return this.Map[key]
	}
	remove_key: function(key) {
		delete this.Map[key]
	}
}