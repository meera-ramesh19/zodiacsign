const day = document.getElementById("s_days");
const month = document.getElementById("s_month");
const disp = document.getElementById("displayDiv");
const zodImg = document.getElementById("myImage");
// const year = document.getElementById("s_year");

document.querySelector(".western").addEventListener("click", display);

function display() {
  // var T = document.getElementById("displayDiv");
  disp.style.display = "block"; // <-- Set it to block
}

document.getElementById("fortuneBtn").addEventListener("click", function () {
  const dtDay = Number(day.value);
  const dtMonth = Number(month.value);
  // const dtYear = Number(year.value);
  // console.log(dtDay, dtMonth, dtYear);
  let sunSign = westZodiac(dtDay, dtMonth);
  document.getElementById("s_zodiac").innerHTML = sunSign;
  let paragraph = "";
  switch (sunSign) {
    case "Capricorn":
       paragraph = "<div>" +
			   "<h3>Your Sun Sign is Capricorn - The Goat.</h3>"+
       "<h3>Capricorn’s are also philosophical signs and are highly intelligent too.</h3>"+
       "<h3>They are good organizers, and achieve their goals by purposeful,systematic means. </h3>"+
			"</div>" ;
      zodImg.src="https://i.imgur.com/couuqpp.png"
      break;
    case "Aquarius":
      paragraph = "<div>" +
			   "<h3>Your Sun Sign is Aquarius - The Water Bearer.</h3>" +
			   "<h3>  Aquarian’s will take up any cause, and are humanitarians of the zodiac.</h3>" +
         "<h3>They are honest, loyal and highly intelligent.</h3> " +
			"</div>";
      zodImg.src="https://i.imgur.com/ORYHOi6.png"
      break;
    case "Pisces":
      paragraph = "<div>" +
			   "<h3>Your Sun Sign is Pisces - The Fish.</h3>" +
			   "<h3>  They are honest, unselfish, trustworthy and often have quiet dispositions.</h3>" +
			   "<h3>They can be overcautious and sometimes gullible.</h3>" +
			"</div>" ;
      zodImg.src="https://i.imgur.com/FASSfDC.png"

      break;
    case "Aries":
      paragraph = "<div>" +
			   "<h3>Your Sun Sign is Aries - The Ram .</h3>" +
			   "<h3>  Aries people are creative, adaptive, and insightful.</h3>" +
         " <h3>Aries are fire signs, and so too is their personality.</h3>" +
			"</div>";
       zodImg.src="https://i.imgur.com/lz09KvG.png"
      break;
    case "Taurus":
      paragraph = "<div>" +
			   "<h3>Your Sun Sign is Taurus  - The Bull.</h3>" +
			   "<h3>  Stubborn by nature, the Taurus will stand his/her ground to the bitter end.</h3>" +
          "<h3>But that’s okay because the Taurus is also a loving, sympathetic and appreciative sign.</h3>" +
			"</div>";
        zodImg.src="https://i.imgur.com/EsajNuX.png"
      break;
    case "Gemini":
      paragraph = "<div>" +
			   "<h3>Your Sun Sign is Gemini - The Twins.</h3>" +
			   "<h3>  Flexibility, balance and adaptability are the keywords for the Gemini.</h3>" +
          " <h3>They tend to have a duality to their nature, and can sometimes be tough to predict how they will react.</h3>" +
			"</div>" ;

        zodImg.src="https://i.imgur.com/eRTb1Yy.png"
      break;
    case "Cancer":
      paragraph = "<div>" +
			   "<h3>Your Sun Sign is Cancer  - The Crab.</h3>" +
			   "<h3>  Cancerians love home life, family and domestic settings.</h3>" +
          " <h3>They are traditionalists, and enjoy operating on a fundamental level. </h3>" +
			"</div>";
        zodImg.src="https://i.imgur.com/itPUpYc.png"
      break;
    case "Leo":
      paragraph = "<div>" +
			   "<h3>Your Sun Sign is Leo  - The Lion.</h3>" +
			   "<h3> The zodiac signs and meanings of Leo is about expanse, power andexuberance.</h3>" +
         " <h3>Leo’s are natural born leaders, and have a tendency to be high-minded and vocal about their opinions.</h3>" +
			"</div>";
        zodImg.src="https://i.imgur.com/l5B00vl.png"
      break;
    case "Virgo":
      paragraph = "<div>" +
			   "<h3>Your Sun Sign is Virgo  - The Virgin. </h3>" +
			   "<h3>Virgo’s have keen minds, and are delightful to talk with," +
          "often convincing others of outlandish tales with ease and charm. </h3>" +
         " <h3> Virgo’s are inquisitive and are very skilled at drawing information from people.</h3>" +
			"</div>";
        zodImg.src="https://i.imgur.com/7eQnTbr.png"
      break;
    case "Libra":
      paragraph =  "<div>" +
			   "<h3>Your Sun Sign is Libra -The Scales. </h3>" +
			   "<h3> As their zodiac signs and meanings would indicate, Libra’s are all about balance, justice, equanimity and stability. </h3>" +
         " <h3> Libra’s are very understanding, caring, and often the champion of underdogs.</h3>" +
			"</div>" ;
      zodImg.src="https://i.imgur.com/zyjd5Xb.png"
      break;
    case "Scorpio":
      paragraph = "<div>" +
			   "<h3>Your Sun Sign is Scorpio -The Scorpion.  </h3>" +
			   "<h3>The Scorpio is often misunderstood.</h3>" +
         " <h3> These personalities are bold and are capable of executing massive enterprises with cool control and confidence.</h3>" +
			"</div>" ;
      zodImg.src="https://i.imgur.com/8arPIJ6.png"
      break;
    case "Sagittarius":
      paragraph = "<div>" +
			   "<h3>Your Sun Sign is Sagittarius -The Archer.  </h3>" +
			   "<h3>They have great ability for focus, and can be very intense.</h3>" +
         "<h3>  They are not very patient and expect quick results.</h3>" +
			"</div>" ;
        zodImg.src="https://i.imgur.com/b5f1MBM.png"
      break;
    default:
      paragraph = `Invalid Birthdate`;
      break;
  }

document.getElementById("s_horoscope").innerHTML = paragraph;
 disp.style.display = "block";
});


function westZodiac(day, month) {
  // returns the zodiac sign according to day and month
  let zodiacs = [
    "",
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn"
  ];
  var last_day = ["", 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  return day > last_day[month] ? zodiacs[month * 1 + 1] : zodiacs[month];
}
