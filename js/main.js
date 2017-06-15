$(function() {
    console.log( "ready!" );
    $( "#headerFirst" ).click(function() {
        $(".bodyBg").addClass("shrinkBody");
        $(".handWrpr").addClass("moveHandAnim");
        $(".gridElementFirst").addClass("gridElementClick");
        $(".expandingWrpr").addClass("expandedWrpr");
        $(".expandedContent").addClass("expandedContentDisplay");
    });
});