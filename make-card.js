
function generateListHTML(list, italicize) {
	let length = list.length;
	let html;
	if (length > 1) {
		html = `<ul class="biotext ${(italicize) ? "publication" : ""}">`;
		
		for (let i=0; i<length; i++)
			html += `<li>${list[i]}</li>`;
			
		html += `</ul>`;

	} else {
		html = `<p class="biotext ${(italicize) ? "publication" : ""}">${list[0]}</p>`;
	}
	
	return html;
}



function makeCard(o) {
                  
    let section = `
			<div class="section" data-anchor="${o.dataAnchor}">
				<div class="card left">
					<img class="portrait" src="${o.portraitImage}">
					<div class="namebanner">${o.name}</div>
					<div class="decoration"></div>
				</div>

					<div class="card right">
						<h4 class="biotext">
							${o.name}<br>
							Born: ${o.birthDate}<br>
							Died: ${o.deathDate}
						</h4>

						<h2>Philosophy</h2>
							${generateListHTML(o.philosophyList, false)}

						<h2>Quote</h2>
							<p class="biotext quote">${o.quote}</p>

						<h2>Significance</h2>
							${generateListHTML(o.significanceList, false)}

						<h2>Publications</h2>
							${generateListHTML(o.publicationsList, true)}
					</div>
				</div>
			</div>
	`;

    
    document.getElementById("fullpage").insertAdjacentHTML("beforeend", section);

}


function makeCredit() {

    let credit = `
			<div class="section" data-anchor="credit">
				<div class="creditcontainer">
					<p><b>A history project by JH, KA, AB, and I</b></p>
					<p><a href="https://github.com/the-garlic-os/trading-cards">View this site's repository</a></p>
				</div>
			</div>
	`;
    

        
    document.getElementById("fullpage").insertAdjacentHTML("beforeend", credit);
        
}
