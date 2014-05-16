/********************
 Indicateurs de qualité
 Auteur: ThomasV
 *********************/
var q0  = "//upload.wikimedia.org/wikipedia/commons/8/8f/00%25.png";
var q25 = "//upload.wikimedia.org/wikipedia/commons/5/5b/25%25.png";
var q50 = "//upload.wikimedia.org/wikipedia/commons/3/3a/50%25.png";
var q75 = "//upload.wikimedia.org/wikipedia/commons/c/cd/75%25.png";
var q100 = "//upload.wikimedia.org/wikipedia/commons/6/64/100%25.png";
var qvalid = "//upload.wikimedia.org/wikisource/fr/2/2b/Valid%C3%A9.png";

/****
 *Mode édition
 *****/

if (wgAction=='edit' || wgAction=='submit') {


	/*
	 *Boutons Qualité
	 *Auteur: ThomasV
	 */


	function addQuality(form,value){

		var text="";
		switch(value){
			case "25%": text = "Texte incomplet"; break;
			case "50%": text = "Texte non formaté"; break;
			case "75%": text = "Complet et formaté"; break;
			case "100%": text = "Relu et corrigé"; break;
			case "Textes validés": text = "Validé"; break;
			case "mode_page|": text = "Texte en mode page"; break;
		}

		form.elements["wpSummary"].value="/* "+text+" */";
		s = form.elements["wpTextbox1"].value;
		s = s.replace(/\{\{TextQuality\|([^}]*?)\}\}\n/gi,"")
		s = s.replace(/\{\{TextQuality\|([^}]*?)\}\}/gi,"")
		form.elements["wpTextbox1"].value="{"+"{TextQuality|"+value+"}"+"}\n"+s;
	}


	function addQualityButtons(){
		if( wgNamespaceNumber != 0 ) return;
		var ig  = document.getElementById("wpWatchthis");
		if(!ig) return;

		var f = document.createElement("span");
		f.innerHTML =
			' <input type="radio" name="quality" value="25%" onclick="addQuality(this.form,this.value)"><img src = "'+q25+'">'
			+'<input type="radio" name="quality" value="50%" onclick="addQuality(this.form,this.value)"><img src = "'+q50+'">'
			+'<input type="radio" name="quality" value="75%" onclick="addQuality(this.form,this.value)"><img src = "'+q75+'">'
			+'<input type="radio" name="quality" value="100%" onclick="addQuality(this.form,this.value)"><img src = "'+q100+'">'
			+'<input type="radio" name="quality" value="Textes validés" onclick="addQuality(this.form,this.value)"><img src = "'+qvalid+'">'
//+'<input type="radio" name="quality" value="mode_page|" onclick="addQuality(this.form,this.value)"><img src = "//upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/20px-Open_book_nae_02.svg.png">'
		+' Niveau d\'avancement du texte';
		ig.parentNode.insertBefore(f,ig.nextSibling.nextSibling.nextSibling)
	}

	addOnloadHook(addQualityButtons);
}
