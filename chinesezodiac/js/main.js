
// //************************************************
// //*           CHINESE HOROSCOPE                   *
// //************************************************



const day = document.getElementById("s_days");
const month = document.getElementById("s_month");
const year = document.getElementById("s_year");
const zodImg = document.getElementById("myImage");
const disp = document.getElementById("displayDiv");

document.querySelector(".animal").addEventListener("click", display);

function display() {
  // let disp = document.querySelector(".displayDiv");
  disp.style.display = "block"; // <-- Set it to block
}
document.getElementById("fortuneBtn").addEventListener("click", function() {
  const dtDay = Number(day.value);
  const dtMonth = Number(month.value);
  const dtYear = Number(year.value);
  console.log(dtDay, dtMonth, dtYear);
  // const fullDate=month.value+day.value+year.value;
  // console.log(fullDate);
  const zodiac = [{
      name: "Rat",
      year: [
        1900,
        1912,
        1924,
        1936,
        1948,
        1960,
        1972,
        1984,
        1996,
        272008,
        2020
      ],
      months: [1, 2, 2, 1, 2, 1, 2, 2, 2, 1],
      dates: [31, 18, 5, 24, 10, 28, 15, 2, 19, 25]
    },

    {
      name: "Ox",
      year: [1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
      months: [2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2],
      dates: [19, 6, 24, 11, 29, 15, 3, 20, 7, 26, 12]
    },

    {
      name: "Tiger",
      year: [1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
      months: [2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2],
      dates: [8, 26, 13, 31, 17, 5, 23, 9, 28, 14, 12]
    },

    {
      name: "Rabbit",
      year: [1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
      months: [1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1],
      dates: [29, 14, 2, 19, 6, 25, 11, 29, 16, 3, 22]
    },

    {
      name: "Dragon",
      year: [1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
      months: [2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2],
      dates: [16, 31, 23, 8, 27, 13, 31, 17, 5, 23, 10]
    },

    {
      name: "Snake",
      year: [1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
      months: [2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 1],
      dates: [4, 23, 10, 27, 14, 2, 18, 6, 24, 10, 29]
    },

    {
      name: "Horse",
      year: [1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
      months: [1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2],
      dates: [25, 11, 30, 15, 3, 21, 7, 27, 12, 31, 17]
    },

    {
      name: "Goat",
      year: [1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
      months: [2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2],
      dates: [15, 11, 17, 5, 24, 9, 28, 15, 12, 19, 6]
    },

    {
      name: "Monkey",
      year: [1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
      months: [2, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1],
      dates: [21, 20, 6, 25, 12, 30, 16, 4, 22, 8, 26]
    },

    {
      name: "Rooster",
      year: [
        1909,
        1921,
        1933,
        1945,
        1957,
        1969,
        1981,
        993,
        2005,
        1282017,
        2029
      ],
      months: [1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
      dates: [22, 8, 26, 13, 17, 5, 23, 9, 28, 13]
    },

    {
      name: "Dog",
      year: [1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
      months: [2, 1, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1],
      dates: [10, 28, 14, 2, 18, 6, 25, 10, 29, 16, 23]
    },

    {
      name: "Pig",
      year: [1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
      months: [1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1],
      dates: [30, 16, 4, 29, 8, 27, 13, 31, 18, 5, 23]
    }
  ];

  let leap = [
    1904,
    1908,
    1912,
    1916,
    1920,
    1924,
    1928,
    1932,
    1936,
    1944,
    1948,
    1952,
    1956,
    1960,
    1964,
    1968,
    1972,
    1976,
    1980,
    1984,
    1988,
    1992,
    1996,
    2000,
    2004,
    2008,
    2012,
    2016,
    2020,
    2024,
    2028,
    2032
  ];

  let leapYear = leap.includes(dtYear);
  console.log(leapYear);
  let userYear = getZodiacSignByYear(dtYear, zodiac);
  console.log(userYear);
  let sign = getZodiacSign(dtYear, dtMonth, dtDay, zodiac);
  // console.log("For loop version" + sign);
  if (sign !=='not found'){
    document.getElementById("s_sign").innerHTML = `YEAR OF A ${sign.toUpperCase()}`;
  }else{
   document.getElementById("s_sign").innerHTML = `SORRY CAN'T FIND THE YEAR ${sign.toUpperCase()}`;
  }
 let fengshui = elements(dtYear);
   document.getElementById("s_element").innerHTML = fengshui;

   let yourSign = calculateSign(sign);
  // console.log(yourSign);

  // console.log(fengshui);

//   let anImg = document.getElementsByTagName("img").item(num);

//   document.querySelector('#s_zodiac').innerHTML = `${yourSign.text}  \n ${fengshui}`

  //   let index = zodiac.findIndex((x) => x.name === sign);
  //   console.log(index);
  //   console.log(zodiac[index].year);
  //   let yearIndex = 0;
  //   for (let i = 0; i < zodiac[index].year.length; i++) {
  //     if (userYear == zodiac[index].year[i]) {
  //       yearIndex = i;
  //       break;
  //     }
  //   }

  //   let zodMonth = zodiac[index].months[yearIndex];
  //   let zodYear = zodiac[index].dates[yearIndex];
  //   console.log(zodMonth, zodYear);
});

function getZodiacSignByYear(year, zodiacArr) {
  for (let i = 0; i < zodiacArr.length; i++) {
    if (zodiacArr[i].year.includes(year)) {
      return year;
    }
  }
  return 0;
}

function getZodiacSign(year, month, daate, zodiacArr) {
  for (let i = 0; i < zodiacArr.length; i++) {
    if (zodiacArr[i].year.includes(year)) {
      if (zodiacArr[i].months === month && zodiacArr[i].dates < daate) {
        return zodiacArr[i - 1].name;
      }
      return zodiacArr[i].name;
    }
  }
  return "not found";
}

function calculateSign(sign) {
    let paragraph = "";
   console.log(sign);
   switch (sign) {
    case "Rat":
      paragraph = "<div>"+
      "<h3>YEAR OF THE: Rat .</h3>"+
      "<h3>CHARACTERISTICS  are quick-witted, clever,charming, sharp  and funny.</h3>"+
      "<h3>COMPATIBILITY with people born in the year of Ox, Dragon, Rabbit</h3>"+
      "</div>";

     zodImg.src="https://i.imgur.com/djAsQzY.png";
      break;
    case "Ox":
      paragraph = "<div>"+
      "<h3>YEAR OF THE:  Ox.</h3>"+
      "<h3>CHARACTERISTICS  are steadfast, solid, a goal-oriented leader, detail-oriented,hard-working stubborn, serious and introverted but can feel lonely and insecure.</h3>"+
      "<h3>COMPATIBILITY with people born in the year of Rat, Monkey, or Rooster</h3>"
      "</div>";
     zodImg.src="https://i.imgur.com/dFvOuEd.png";
      break;
     case "Tiger":
      paragraph = "<div>"+
      "<h3>YEAR OF THE:  Tiger.</h3>"+
      "<h3>CHARACTERISTICS  are  authoritative, self-possessed, have strong leadership qualities, is charming, ambitious,courageous, warm-hearted, highly seductive, moody, intense, and ready to pounce at any time.</h3>"+
    "<h3>COMPATIBILITY with people born in the year of Dragon, Horse, or Pig</h3>"+
    "</div>";
      zodImg.src="https://i.imgur.com/tkAk2Rx.png"
      break;
    case "Rabbit":
      paragraph = "<div>" +
			   "<h3>YEAR OF THE: Rabbit. </h3>" +
			   "<h3>CHARACTERISTICS are popular,compassionate, sincere, and they like to avoid conflict and are sometimes seen as pushovers.</h3>" +
         " <h3>  COMPATIBITLITY with people born in the year of Rat, Goat, Monkey, Dog, Pig; </h3>" +
			"</div>" ;
      zodImg.src="https://i.imgur.com/RlIEROl.png";
      break;
    case "Dragon":
      paragraph = "<div>" +
			   "<h3>YEAR OF THE: Dragon. </h3>" +
			   "<h3>CHARACTERISTICS  are energetic and warm-hearted, charismatic, lucky at love and egotistic.</h3>" +
          " <h3>  COMPATIBITLITY with people born in the year of Rat, Tiger or Snake; </h3>" +
			"</div>" ;
       zodImg.src="https://i.imgur.com/DY07T4q.png";
      break;
    case "Snake":
      paragraph = "<div>" +
			   "<h3>YEAR OF THE: Snake. </h3>" +
			   "<h3>CHARACTERISTICS  are seductive, gregarious, introverted, generous, charming, good with money, analytical, insecure, jealous,"+
         "</br>slightly dangerous, smart, they rely on gut feelings, are hard-working and intelligent.</h3>" +
           " <h3>COMPATIBITLITY with people born in the year of  Dragon, Rooster </h3>" +
			"</div>" ;  zodImg.src="https://i.imgur.com/2VkQTuh.png";
      break;
    case "Horse":
      paragraph = "<div>" +
			   "<h3>YEAR OF THE:  Horse. </h3>" +
			   "<h3>CHARACTERISTICS  are love to roam free,energetic, self-reliant, money-wise, and they enjoy traveling, love and intimacy.</h3>" +
          " <h3>  COMPATIBITLITY with people born in the year of  Tiger, Goat, Dog </h3>" +
			"</div>" ;
      zodImg.src="https://i.imgur.com/zCIQUDP.png";
      break;
    case "Goat":
      paragraph ="<div>" +
			   "<h3>YEAR OF THE: Goat. </h3>" +
			   "<h3>CHARACTERISTICS  are creative, thinkers wanderers, unorganized, high-strung and insecure, and can be anxiety-ridden. </h3>" +
         " <h3>  COMPATIBITLITY with people born in the year of  Rabbit, Horse, Pig </h3>" +
      "</div>" ;
        zodImg.src="https://i.imgur.com/6sS0zrM.png";
      break;
    case "Monkey":
      paragraph = "<div>" +
			   "<h3>YEAR OF THE:  Monkey. </h3>" +
			   "<h3>CHARACTERISTICS  are energetic, upbeat, and good at listening but lack self-control.They thrive on having fun.</h3>" +
         " <h3>COMPATIBITLITY with people born in the year of  Rat, Dragon, Rooster </h3>" +
         "</div>";
        zodImg.src="https://i.imgur.com/UK3bESM.png";
      break;
    case "Rooster":
      paragraph = "<div>" +
			   "<h3>YEAR OF THE: Rooster. </h3>" +
			   "<h3>CHARACTERISTICS  are  practical, resourceful, observant, analytical, straightforward,trusting, honest, perfectionists, neat and conservative.</h3>" +
          " <h3>  COMPATIBITLITY with people born in the year of  Ox, Snake, Monkey, Dragon </h3>" +
         "</div>";
      zodImg.src="https://i.imgur.com/FyiRFT2.png";
      break;

    case "Dog":
      paragraph = "<div>" +
			   "<h3>YEAR OF THE: Dog. </h3>" +
			   "<h3>CHARACTERISTICS  are loyal, faithful, honest, distrustful, often guilty of telling white lies,temperamental, prone to mood swings, dogmatic, and sensitive </h3>" +
          " <h3>  COMPATIBITLITY with people born in the year of  Tiger, Horse, Pig </h3>" +
          "</div>";

        zodImg.src="https://i.imgur.com/ciTjBc3.png";
      break;

    case "Pig":
      paragraph = 	"<div>" +
			   "<h3>YEAR OF THE:Pig. </h3>" +
			   "<h3>CHARACTERISTICS  are extremely nice, good-mannered and tasteful,perfectionists  who enjoy finer things but are not perceived as snobs. </h3>" +
         "<h3>  COMPATIBITLITY with people born in the year of Goat, Rabbit, Dog </h3>" +
         "</div>";
        zodImg.src="https://i.imgur.com/Qsxk7KU.png";
      break;

    default:
      paragraph = `\nINVALID BIRTHDATE`;
      break;
  }

  document.getElementById("s_horoscope").innerHTML = paragraph;
  disp.style.display = "block";
//   const obj = {
//     text: text,
//     image:image
//   };

//   return obj;
}

function elements(yers) {
    let fengElement = "";
    let years=0;
    console.log("years"+ yers)
    if(yers===0){
      fengElement="You did not enter a birthdate";
      return fengElement.toUpperCase();
    }
    years =yers% 10;
    if (years === 1 || years === 0) {
      fengElement = " Your fengshui element is metal";
     } else if (years === 2 || years === 3) {
       fengElement = " Your fengshui element is water ";
     } else if (years === 4 || years === 5) {
       fengElement = " Your fengshui element is wood";
     } else if (years === 6 || years === 7) {
       fengElement = " Your fengshui element is earth";
     } else if (years === 8 || years === 9){
       fengElement = "Your fengshui element is fire";
     }   else{
         fengElement="You did not enter a birthdate";
     }
  return fengElement.toUpperCase();
}
