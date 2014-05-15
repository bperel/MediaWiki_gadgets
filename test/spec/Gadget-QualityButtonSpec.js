describe("QualityButton", function() {

    it("should render the radio buttons", function() {
	    loadFixtures('Gadget-QualityButtonSpec_begin.html');

	    addQualityButtons();
        expect($('#jasmine-fixtures').html().replace(/[\r\n]/g,'')).toEqual(readFixtures('Gadget-QualityButtonSpec_end.html').replace(/[\r\n]/g,''));
    });
});
