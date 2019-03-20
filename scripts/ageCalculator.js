const averageAgeMen = 76;
const averageAgeWomen = 81;
const averageAgeOverall = 79;

function deathGuess(age){
const mortalityOverall = averageAgeOverall - age;
const mortalityMen = averageAgeMen - age;
const mortalityWomen = averageAgeWomen - age;

    console.log(age);

    if (age > 90){
        
        resultOverall = "Please, contact us today and ask for the \"\Renewal\" package."
        resultMen = ""
        resultWomen = ""

    }
    else if(age > 60){

        resultOverall = "You are " + mortalityOverall + " years from the average overall age of death. Uh oh!"
        resultMen = "If you are male are only " + mortalityMen + " years from the average age of death."
        resultWomen = "On the other hand, women still have " + mortalityWomen + " years to go!"
    
    }
    else if(age > 40){

        resultOverall = "You are " + mortalityOverall + " years from the average overall age of death. That puts a bit into perspective, doesn't it?"
        resultMen = "Men have " + mortalityMen + " years more to go on average."
        resultWomen = "As usual, women get a little more with " + mortalityWomen + " years."

        }
        else if(age > 20){

        resultOverall = "You are " + mortalityOverall + " years from the average overall age of death. You're still young, take your time."
        resultMen = "Men have " + mortalityMen + " years more to go on average."
        resultWomen = "As usual, women get a little more with " + mortalityWomen + " years."

        }
        else if(age < 18){

            resultOverall = "Please, this site is intended for adults only. My we suggest a possible birthday gift for the future?"
            resultMen = ""
            resultWomen = ""

        }
    // else if(age > 50){
    // 		result = "If you are male are only" + (averageAgeMen - age) + "years from the average age of death!"
    // 	}
    
    document.getElementById('resultOverall').innerHTML = resultOverall;
    document.getElementById('resultMen').innerHTML = resultMen;
    document.getElementById('resultWomen').innerHTML = resultWomen;

}