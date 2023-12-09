// Get the DOM elements and initialize the game
const input = document.querySelector("input"),
      guess = document.querySelector(".guess"),
      checkButton = document.querySelector("button"),
      remainChances = document.querySelector(".chances");

var g = 7;
var p = [
    0.99999999999980993,
    676.5203681218851,
    -1259.1392167224028,
    771.32342877765313,
    -176.61502916214059,
    12.507343278686905,
    -0.13857109526572012,
    9.9843695780195716e-6,
    1.5056327351493116e-7
];

var g_ln = 607/128;
var p_ln = [
    0.99999999999999709182,
    57.156235665862923517,
    -59.597960355475491248,
    14.136097974741747174,
    -0.49191381609762019978,
    0.33994649984811888699e-4,
    0.46523628927048575665e-4,
    -0.98374475304879564677e-4,
    0.15808870322491248884e-3,
    -0.21026444172410488319e-3,
    0.21743961811521264320e-3,
    -0.16431810653676389022e-3,
    0.84418223983852743293e-4,
    -0.26190838401581408670e-4,
    0.36899182659531622704e-5
];

// Spouge approximation (suitable for large arguments)
function lngamma(z) {
    if(z < 0) return Number('0/0');
    var x = p_ln[0];
    for(var i = p_ln.length - 1; i > 0; --i) x += p_ln[i] / (z + i);
    var t = z + g_ln + 0.5;
    return .5*Math.log(2*Math.PI)+(z+.5)*Math.log(t)-t+Math.log(x)-Math.log(z);
}

function lnBetaPDF(x, a, b) {
    var betaInv = lngamma(a + b) - lngamma(a) - lngamma(b);
    return (betaInv + (a - 1)*Math.log(x) + (b - 1)*Math.log(1 - x));
};

function betaPDF(x, a, b) {
    return (Math.exp(lnBetaPDF(x, a, b)));
};


function renderBetaDist(elementId, ablist, num) {
    // initialise data
    const dataset = [];
    const pvalue = [];

    const dataPoints = 200;
    // fill up data arrays
    for (i = 0; i < dataPoints; i++) {
	const x = (1.0/dataPoints)*(i);
	const datas = [];
	ablist.forEach((abc) => {
	    const a = abc[0], b = abc[1];
	    datas.push({x: x, y: betaPDF(x, a, b)});
	});
	dataset.push(datas);
    }
    for (i = num*(dataPoints/100); i < dataPoints; i++) {
	const x = (1.0/dataPoints)*(i);
	const datas = [];
	ablist.forEach((abc) => {
	    const a = abc[0], b = abc[1];
	    datas.push({x: x, y: betaPDF(x, a, b)});
	});
	pvalue.push(datas);
    }
    
    const barChart = document.getElementById(elementId);

    const padding = 10;

    const margin = {top: 50, right: 50, bottom: 50, left: 50},
          width = barChart.clientWidth - margin.left - margin.right,
          height = barChart.clientHeight - margin.top - margin.bottom;
    
    const yMax = d3.max(dataset, (d) => {return d3.max(d, (e) => e.y)});

    const xScale = d3.scaleLinear()
          .domain([0, 1])
          .range([0, width]);
    
    const yScale =
          d3.scaleLinear()
          .domain([0, yMax])
          .range([height - padding, padding]);
    
    const svg =
          d3.select('#'+elementId)
          .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
          .attr('class','shadow');
    
    // svg.append('g')
    // 	.attr('class', 'x axis')
    // 	.attr('transform', 'translate(0,' + height + ')')
    // 	.attr('stroke', 'white')
    // 	.call(d3.axisBottom(xScale));
    
    ablist.forEach((abc, index) => {
	const a = abc[0];
	const b = abc[1];
	
	var area = d3.area()
	    .x(function(d, i) {return xScale(d[index].x); })
	    .y0(height)
	    .y1(function(d) {  return yScale(d[index].y); });

	const line =
              d3.line()
              .x(function(d, i) { return xScale(d[index].x); })
              .y(function(d) { return yScale(d[index].y); })
              .curve(d3.curveMonotoneX)
	
	svg.append("path")
            .datum(dataset)
            .attr("class", "area")
            .attr("d", area);
	svg.append('path')
            .datum(dataset)
            .attr('class', 'line')
            .attr('stroke', abc[2])
            .attr('d', line);
	// Add p-value line
	var parea = d3.area()
	    .x(function(d, i) {return xScale(d[index].x); })
	    .y0(height)
	    .y1(function(d) {  return yScale(d[index].y); });
	svg.append("path")
            .datum(pvalue)
            .attr("class", "parea")
            .attr("d", parea);
	svg.append('path')
            .datum(pvalue)
            .attr('class', 'line')
	    .attr('stroke',  'black')
            .attr('d', line);
    });
    
    
    
    svg.append('line')
	.style("stroke", "black")
	.style("stroke-width", 5)
	.attr("y1", height)
	.attr("y2",  margin.bottom - height - margin.top)
	.attr("x1", xScale(num/100))
	.attr("x2",  xScale(num/100));
}

// now for event listening

// Set the focus on input field
input.focus();

let randomNum = Math.round(Math.random() * 100);
let ranA = 0.5 + (Math.random() * 10);
let randomNumP = Math.round((1 - jStat.beta.cdf(randomNum/100, ranA, 4))*100)/100;
chance = 10;

// draw distribution
renderBetaDist('bar-chart', [[ranA, 4, 'black']], randomNum);

// Listen for the click event on the check button
checkButton.addEventListener("click", () => {
    // Decrement the chance variable on every click
    chance--;
    // Get the value from the input field
    let inputValue = input.value;
    // Check if the input value is equal to the random number
    if (inputValue == randomNumP) {
	// Update guessed number, disable input, check button text and color.
	[checkButton.textContent, guess.style.color, input.disabled] = ["Reloading...", "#333", true];
	[guess.textContent, guess.style.color] = ["Congratulations", "#03AC13"];
	setTimeout(() => {
	    window.location.reload()
	}, 4000); // wait 4 seconds befoe replaying after a win
	//Check if input value is > random number and within  range.
    } else if (inputValue > randomNumP && inputValue < 1.01) {
	// Update the guess text and remaining chances
	[guess.textContent, remainChances.textContent] = ["Your guess is too high", chance];
	guess.style.color = "#333";
	//Check if input value is < random number and within 
    } else if (inputValue < randomNumP && inputValue > 0) {
	// Update the guessed number text and remaining chances
	[guess.textContent, remainChances.textContent] = ["Your guess is too low", chance];
	guess.style.color = "#333";
    } else {
	// Update the guessed number text, color and remaining chances
	[guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
	guess.style.color = "#DE0611";
    }
    // Check if the chance is zero
    if (chance == 0 && inputValue != randomNumP) {
	//Update check button, disable input, and clear input value.
	// Update guessed number text and color to indicate user loss.
	[checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
	[guess.textContent, guess.style.color] = ["You lost the game", "#DE0611"];
    }
    if (chance < 0 ) {
	window.location.reload();
    }
});
