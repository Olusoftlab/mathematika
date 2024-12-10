const num_1 = document.getElementById("num-1")
const liveEl = document.getElementsByClassName("love")
const num_2 = document.getElementById("num-2")
const myScore = document.getElementById("score")
const buttonEl = document.getElementById("unique-but")
const inputEl = document.getElementById("result-area")
const coinEl = document.getElementById("coin-counter")
const showEl = document.getElementById("show-area")
const soundEl = document.getElementById("sound")
const ballEl_1 = document.getElementById("ball-1")
const ballEl_2 = document.getElementById("ball-2")
const ballEl_3 = document.getElementById("ball-3")
const seconds = document.getElementById("seconds")
const minutes = document.getElementById("minutes")

minutes.innerText = Math.floor(Math.random() * 2 + 1)

let minuteCount;


buttonEl.disabled = false


let myWord = ""

let score = 0;

let counter = 0;

let countArr = 2;

num_1.innerText = Math.floor(Math.random() * 12 + 2);

num_2.innerText = Math.floor(Math.random() * 9 + 2)



const getResult = () => {

    const loveArray = [liveEl[0], liveEl[1], liveEl[2]];




    const myNum_1 = parseInt(num_1.innerText)
    const myNum_2 = parseInt(num_2.innerText)

    const result = myNum_1 * myNum_2



    buttonEl.onclick = () => {

        if (result === parseInt(inputEl.value)) {

            score += 10
            counter += 20

            if (score == 20) {

                showEl.innerHTML = "<span  style=\" color:green   \"  >Great job keep it up</span>"

            } else if (score == 100) {

                showEl.innerHTML = "<span  style=\" color:#FFDF00   \"  >Congratulations!! well done you are versed with your multiplication table</span>"
                soundEl.play()
                ballEl_1.style.visibility = "inherit"
                ballEl_2.style.visibility = "inherit"
                ballEl_3.style.visibility = "inherit"
                ballEl_1.classList.add("active-ball-1")
                ballEl_2.classList.add("active-ball-2")
                ballEl_3.classList.add("active-ball-3")
                setTimeout(() => {


                    const http = new XMLHttpRequest()

                    http.onreadystatechange = function () {

                        if (this.readyState == 4 && this.status == 200) {

                            document.querySelector("body").innerHTML = this.responseText
                            document.getElementById("next-point").innerText = score
                            document.getElementById("next-coin").innerText = counter
                        }

                    }


                    http.open("GET", "stage2.html", true)
                    http.send()


                }, 4309);


            } else {

                showEl.innerHTML = ""

            }



            inputEl.value = "";
            inputEl.focus()
            myScore.innerText = score;
            coinEl.innerText = counter
            num_1.innerText = Math.floor(Math.random() * 5 + 2);
            num_2.innerText = Math.floor(Math.random() * 10 + 2);
            getResult()

        }
        else {

            score -= 10;
            counter -= 10;

            if (countArr == 0) {

                if (counter < 10) {

                    counter = 0
                }

                showEl.innerHTML = "<span  style=\" color:red   \"  >Game Over</span>"
                setTimeout(() => {


                    const http = new XMLHttpRequest()

                    http.onreadystatechange = function () {

                        if (this.readyState == 4 && this.status == 200) {

                            document.querySelector("body").innerHTML = this.responseText
                            document.getElementById("next-point").innerText = score + 10
                            document.getElementById("next-coin").innerText = counter
                        }

                    }


                    http.open("GET", "output.html", true)
                    http.send()


                }, 2000);

            } else if (score < 0 && counter < 0) {

                score = 0
                counter = 0
            }

            inputEl.value = "";
            inputEl.focus()
            loveArray[countArr].remove()
            showEl.innerHTML = `<span  style=\" color:red   \"  >${countArr > 0 ? `${countArr} lives remaining` : "Game Over"}</span>`
            countArr--
            myScore.innerText = score;
            coinEl.innerText = counter;;
            num_1.innerText = Math.floor(Math.random() * 5 + 2);
            num_2.innerText = Math.floor(Math.random() * 13 + 2);
            getResult()

        }


    }


}

getResult()




const getTime = () => {

    let countSec = parseInt(seconds.innerText)

    countSec--

    if (countSec < 10) {

        countSec = `0${countSec}`

        if (countSec == "00") {

            minuteCount = parseInt(minutes.innerText)
            minuteCount--
            minutes.innerText = minuteCount
            countSec = 60

            if (minuteCount == 0) {

                showEl.innerHTML = `<span  style=\" color:red   \"  >Time is running out, you have less than ${countSec} seconds to go </span>`

                setTimeout(() => {



                    window.close()

                }, 60000);

            }

        }


    }

    seconds.innerText = countSec


    setTimeout(() => {
        getTime()
    }, 1000);


}




getTime()