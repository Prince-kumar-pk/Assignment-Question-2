


// sample taste case from the given sample example in problem statment
const htmlContent = '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects</span></p>';
const plainText = 'Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects';
const plainTextPositions = [
    { start: 0, end: 8 },
    { start: 19, end: 86 }
];

function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    // your logic goes here

    // ForEach loop for iterrating over all the positions 
    plainTextPositions.forEach((element)=>{

        //Take the portion that we want to hilight
        var  portion = plainText.substring(element.start, element.end);

        // console.log(portion);

        // Save the hilighted part in some variable 
        var anshilight = `<mark>${portion}</mark>`;

        // Position of that portion in htmlContent
        var startInd = htmlContent.indexOf(portion); // it return only starting position

        // console.log(startInd);
        //So for ending position of that portion 
        var endInd = startInd + portion.length;

        // console.log(endInd)

        // Now combine all in some other variable 
        var final_ans = `${htmlContent.substring(0,startInd)}${anshilight}${htmlContent.substring(endInd)}`;

        // console.log(final_ans);
        //Finally copy that modified part in the original  htmlContent at every iterration 
        htmlContent = final_ans;
    })

    // after all iteration on position return the final string
    return htmlContent;
  }

  console.log(highlightHTMLContent(htmlContent,plainText,plainTextPositions));