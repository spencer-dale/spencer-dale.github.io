
// Add any new items here
ITEMS =	{
	'work': ['rbc', 'rez', 'tennis'],
	'projects': ['song', 'cart', 'robot']
}

function toggle(field, id) {
	size = ITEMS[field].length;

	for (var i = 0; i < size; i++) {
		var item = ITEMS[field][i];
		var data = document.getElementById(item);
		
		// Toggle the selected item
		if (item === id) {
			if (data.style.display === "none") {
				data.style.display = "block";
			} else {
				data.style.display = "none";
			}
		}

		// Hide any other open items			
		else {
			data.style.display = "none";
		}	
	}
}