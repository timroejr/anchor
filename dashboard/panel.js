'use strict';

$('#showAnchor').click(function() {
	var data = {}
	data.player = $('#award').val();
	nodecg.sendMessage('showAnchor', data);
});

$('#hideAnchor').click(function() {
	nodecg.sendMessage('hideAnchor', ''); 
});