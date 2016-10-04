'use strict';

$(function () {
    nodecg.listenFor('showAnchor', showPlayer);
    nodecg.listenFor('hideAnchor', hidePlayer);

    resetHat();

    function showPlayer(data) {

        $('#anchorcontainer').css('opacity', '100');
        $('#anchor').css('transform-origin', '100% 0%');

        var tm = new TimelineMax({paused: true});

		$('#anchorTitle').text(data.player);

        //add our tweens to the timeline
        tm.to($('#anchor'), 0.2, {opacity: '1', ease: Quad.easeOut}, '0');
        tm.to($('#textContainer'), 0.5, {width: '25.00%'}, '0.25');
        tm.to($('#anchorcontainer'), 0.5, {right: '740px'}, '0.25');


        tm.play();

    }

    function hidePlayer() {

        var tm = new TimelineMax({paused: true});

        tm.to($('#textContainer'), 0.5, {width: '0%'}, '0.450');
        tm.to($('#anchorcontainer'), 0.5, {right: '590px'}, '0.450');
        tm.to($('#anchor'), 0.2, {opacity: '0', ease: Quad.easeOut}, '1');
        tm.addCallback(resetHat, 1.5);

        tm.play();
    }

    function resetHat() {
        $('#anchorcontainer').css('opacity', '0');
        $('#anchor').css('opacity', '0');
        $('#anchorcontainer').css('right', '590px');
    }
});
