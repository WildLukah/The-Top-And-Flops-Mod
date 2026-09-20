// ******************************************************************************************
// Mod Name: The_Top_And_Flops_Mod
// Mod Id: The_Top_And_Flops_Mod_WildLukah
// Mod Version: 1.8.0
// Mod File: main.js
// ******************************************************************************************
// Author: WildLukah
// Last modified: 08/07/2024 12:13
// ******************************************************************************************
// Notes: This file is defined in package.json and loaded as the first file from GDT
// ******************************************************************************************

// Setup a global mod object
var The_Top_And_Flops_Mod_WildLukah   = { modPath: '', data: {} };

(function(){
	// Acquire relative path to the mod
	The_Top_And_Flops_Mod_WildLukah.modPath = GDT.getRelativePath();

	// Callback executed after succesful load
	var ready = function () {
	};

// Callack executed if error(s) occured during load
	var error = function () {
	};
	
	// Load relevant files
	GDT.loadJs(['main/code.js'], ready, error);

})();
