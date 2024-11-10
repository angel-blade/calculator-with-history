let display = document.querySelector(".display")

let buttons = Array.from(document.querySelectorAll(".button"));

const historyField = document.querySelector(".historyField")

const clearBtn = document.querySelector(".clearBtn")

const historyTab = document.querySelector(".historyTab")



buttons.map((button)=>{
    button.addEventListener('click', (e)=>{
        switch (e.target.innerText){
            case "AC":
                display.innerText = "0";
                break;
            case "+/-":
                display.innerText = "-"
                break;
            case "=":
                const value1 = display.innerText
                display.innerText = eval(display.innerText);
                const historyItem = document.createElement('li')
                const value2 = display.innerText
                if(value1 == value2){
                    return
                }else
                historyItem.innerText = `${value1} = ${value2}`
                historyField.appendChild(historyItem)
                historyTab.style.display = 'block'

                clearBtn.addEventListener('click', function(){
                    if(historyField.contains(historyItem)){
                        historyField.removeChild(historyItem)
                        historyTab.style.display = 'none'
                    }
                })
                break;
            case "%":
                let passedText = display.innerText + "/100"
                display.innerText = eval(passedText)
                break;
            default:
                if (display.innerText === '0' && e.target.innerText !== "."){
                    display.innerText = e.target.innerText;

                } else {
                display.innerText += e.target.innerText;
                }
        }
    });
});
