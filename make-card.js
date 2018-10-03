// here be dragons
function makeCard(portraitImage, name,
                  birthDate, deathDate,
                  philosophyList, quote,
                  significanceList, publicationsList) {
                  
    var cardrow = document.createElement("div");
    cardrow.setAttribute("class", "cardrow");
    
        var cardleft = document.createElement("div");
        cardleft.setAttribute("class", "card left");
    
            var cardleftcontainer = document.createElement("div");
            cardleftcontainer.setAttribute("class", "cardleftcontainer");
    
                var portrait = document.createElement("img");
                portrait.setAttribute("class", "portrait");
                portrait.setAttribute("src", portraitImage);

                var namebanner = document.createElement("div");
                namebanner.setAttribute("class", "namebanner");
                namebanner.appendChild(document.createTextNode(name)); 

                var decoration = document.createElement("div");
                decoration.setAttribute("class", "decoration");
    
    cardleftcontainer.appendChild(portrait);
    cardleftcontainer.appendChild(namebanner);
    cardleftcontainer.appendChild(decoration);
    
    cardleft.appendChild(cardleftcontainer);
    
    cardrow.appendChild(cardleft);
    
    //---------------------------
    
    var cardright = document.createElement("div");
    cardright.setAttribute("class", "card right");
	
		var cardrightcontainer = document.createElement("div");
		cardrightcontainer.setAttribute("class", "cardrightcontainer");
    
			var bio = document.createElement("div");
			bio.setAttribute("class", "bio");

				var topinfo = document.createElement("h4");
				topinfo.setAttribute("class", "biotext");
				topinfo.appendChild(document.createTextNode(name));
				topinfo.appendChild(document.createElement("br"));
				topinfo.appendChild(document.createTextNode("Born: " + birthDate));
				topinfo.appendChild(document.createElement("br"));
				topinfo.appendChild(document.createTextNode("Died: " + deathDate));
				

				var philosophy = document.createElement("h2");
				philosophy.appendChild(document.createTextNode("Philosophy"));

				var philoListLen = philosophyList.length;
				if (philoListLen > 1) {
					var philotext = document.createElement("ul"); // Make a bullet-list out of philosophyList
					philotext.setAttribute("class", "biotext");
					
					for (var i=0; i<philoListLen; i++) {
						var listItem = document.createElement("li");
						listItem.appendChild(document.createTextNode(philosophyList[i]));
						philotext.appendChild(listItem);
					}
				} else { // Make a <p> instead of a list if there is only one quote in the list
					var philotext = document.createElement("p");
					philotext.setAttribute("class", "biotext");
					philotext.appendChild(document.createTextNode(philosophyList[0]));
				}
					

				var quoteheader = document.createElement("h2");
				quoteheader.appendChild(document.createTextNode("Quote"));
				
				var quotetext = document.createElement("p");
				quotetext.setAttribute("class", "biotext quote");
				quotetext.appendChild(document.createTextNode(quote));
				
				var significance = document.createElement("h2");
				significance.appendChild(document.createTextNode("Significance"));

				var signifListLen = significanceList.length;
				if (signifListLen > 1) {
					var signiftext = document.createElement("ul"); // Make a bullet-list out of significanceList
					signiftext.setAttribute("class", "biotext");
					
					for (var i=0; i<signifListLen; i++) {
						var listItem = document.createElement("li");
						listItem.appendChild(document.createTextNode(significanceList[i]));
						signiftext.appendChild(listItem);
					}
				} else { // Make a <p> instead of a list if there is only one point of significance in the list
					var signiftext = document.createElement("p");
					signiftext.setAttribute("class", "biotext");
					signiftext.appendChild(document.createTextNode(significanceList[0]));
				}


				var publications = document.createElement("h2");
				publications.appendChild(document.createTextNode("Publications"));

				var pubListLen = publicationsList.length;
				if (pubListLen > 1) {
					var pubtext = document.createElement("ul"); // Make a bullet-list out of publicationsList
					pubtext.setAttribute("class", "biotext publication");
					
					for (var i=0; i<pubListLen; i++) {
						var listItem = document.createElement("li");
						listItem.appendChild(document.createTextNode(publicationsList[i]));
						pubtext.appendChild(listItem);
					}
				} else { // Make a <p> instead of a list if there is only one publication in the list
					var pubtext = document.createElement("p");
					pubtext.setAttribute("class", "biotext publication");
					pubtext.appendChild(document.createTextNode(publicationsList[0]));
				}
            
            
    bio.appendChild(topinfo);
    bio.appendChild(philosophy);
    bio.appendChild(philotext);
    bio.appendChild(quoteheader);
    bio.appendChild(quotetext);
    bio.appendChild(significance);
    bio.appendChild(signiftext);
    bio.appendChild(publications);
    bio.appendChild(pubtext);
	
	cardrightcontainer.appendChild(bio);
    
    cardright.appendChild(cardrightcontainer);

    //---------------------------
    
    cardrow.appendChild(cardleft);
    cardrow.appendChild(cardright);
    
    //---------------------------
    
    document.body.appendChild(cardrow);

}
