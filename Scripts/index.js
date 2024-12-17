const num_1 = document.getElementById("num-1")
const liveEl = document.getElementsByClassName("love")
const num_2 = document.getElementById("num-2")
const myScore = document.getElementById("score")
const buttonEl = document.getElementById("unique-but")
const inputEl = document.getElementById("result-area")
const coinEl = document.getElementById("coin-counter")
const showEl = document.getElementById("show-area")
const soundEl = document.getElementById("sound")
const soundEl_2 = document.getElementById("sound-2")
const ballEl_1 = document.getElementById("ball-1")
const ballEl_2 = document.getElementById("ball-2")
const ballEl_3 = document.getElementById("ball-3")
const seconds = document.getElementById("seconds")
const minutes = document.getElementById("minutes")
const boxEl_1 = document.getElementById("box-1")
const boxEl_2 = document.getElementById("box-2")
const boxEl_3 = document.getElementById("box-3")
const boxEl_4 = document.getElementById("box-4")
const boxEl_5 = document.getElementById("box-5")
const boxEl_6 = document.getElementById("box-6")
const boxEl_7 = document.getElementById("box-7")
const boxEl_8 = document.getElementById("box-8")
const boxEl_9 = document.getElementById("box-9")
const boxEl_0 = document.getElementById("box-0")
const cancelEl = document.getElementById("cancel")









minutes.innerText = Math.floor(Math.random() * 2 + 1)

let minuteCount;


buttonEl.disabled = false


let myWord = ""

let score = 0;

let counter = 0;

let countArr = 2;

num_1.innerText = Math.floor(Math.random() * 12 + 2);

num_2.innerText = Math.floor(Math.random() * 9 + 2)



boxEl_1.onclick = () => {

    inputEl.value += 1

}


boxEl_2.onclick = () => {

    inputEl.value += 2

}


boxEl_3.onclick = () => {

    inputEl.value += 3

}


boxEl_4.onclick = () => {

    inputEl.value += 4

}



boxEl_5.onclick = () => {

    inputEl.value += 5

}


boxEl_6.onclick = () => {

    inputEl.value += 6

}


boxEl_7.onclick = () => {

    inputEl.value += 7

}



boxEl_8.onclick = () => {

    inputEl.value += 8

}



boxEl_9.onclick = () => {

    inputEl.value += 9

}


boxEl_0.onclick = () => {

    inputEl.value += 0

}


cancelEl.onclick = () => {

    inputEl.value = ""

}






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


                }, 2000);


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
                soundEl_2.play()
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


                }, 3000);

            } else if (score < 0 && counter < 0) {

                score = 0
                counter = 0
            }

            inputEl.value = "";
            inputEl.focus()
            loveArray[countArr].remove()
            showEl.innerHTML = `<span  style=\" color:red   \"  >${countArr > 0 ? `${countArr} ${countArr > 1 ? "live" : "lives"} remaining` : "Game Over"}</span>`
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