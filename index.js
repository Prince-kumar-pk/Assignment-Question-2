//Input


// sample taste case from the given sample example in problem statment
let htmlContent = `<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>`;
let plainText = `Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------`;
let plainTextPositions = [
    {
        start: 241,
        end: 247,
    },
    {
        start: 518,
        end: 525,
    },
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
         var startInd = 0
        
        startInd = htmlContent.indexOf(portion); // it return only starting position

        if(startInd !== -1){
            while(startInd<element.start){
                startInd = htmlContent.indexOf(portion, startInd+1)
            }
        }


        console.log(startInd);
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


  module.exports={highlightHTMLContent}