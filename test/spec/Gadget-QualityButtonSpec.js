describe("QualityButton", function() {

	beforeEach(function () {
		loadFixtures('Gadget-QualityButtonSpec_begin.html');
	});

    it("should render the radio buttons", function() {
	    addQualityButtons();
        expect($('#jasmine-fixtures').html().replace(/[\r\n]/g,'')).toEqual(readFixtures('Gadget-QualityButtonSpec_end.html').replace(/[\r\n]/g,''));
    });

	it("should update the quality information", function() {
		var form = $('form')[0];
		var textbox = $('[name="wpTextbox1"]');

		addQuality(form, "25%");
		expect($('[name="wpSummary"]').val()).toEqual('/* Texte incomplet */');
		expect(textbox.val()).toEqual('{{TextQuality|25%}}');

		addQuality(form, "25%");
		expect(textbox.val()).toEqual('{{TextQuality|25%}}');
	});
});
