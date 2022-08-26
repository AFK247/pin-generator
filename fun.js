function pin_generator() {
    const pin = Math.round((Math.random() * 10000)) + "";
    if (pin.length === 4)
        return pin;
    else {
        return pin_generator();
    }
}

const pin = pin_generator();
document.getElementById("generate").addEventListener("click", function () {
    const form_field = document.getElementById("form-field");
    const pin = pin_generator();

    form_field.value = pin;
})

const class_list = document.getElementsByClassName("button");

for (valu of class_list) {
    valu.addEventListener("click", function (e) {
        let key = e.target.innerText;
        let key_field = document.getElementById("key_pass");
        let temp = key_field.value;
        if (key === "C") {
            key_field.value = "";
            return;
        }
        if (key === "<") {
            const split_value = key_field.value.split("");
            split_value.pop();
            new_value = split_value.join("");
            key_field.value = new_value;
            return;
        }

        key_field.value = key_field.value + key;
    })
}

let sub_count=0;
document.getElementById("sub").addEventListener("click", function (e) {
    sub_count++;
    const try_count=document.getElementById("try");
    try_count.innerText= 3-sub_count;

    if(sub_count===4){
        alert("Maximum Try Reached. Try Again After 5 Seconds");
        e.target.disabled=true;
        console.log(e.target);
        e.target.style.background="grey";

        setTimeout(function enable(){
            e.target.disabled=false;
            e.target.style.background="blue";
        },5000);

        try_count.innerText= 3;
        sub_count=0;
    }

    let pin_field = document.getElementById("form-field");
    let submit_field = document.getElementById("key_pass");

    let pin_field_value = pin_field.value;
    let submit_field_value = submit_field.value;

    const pin_matched = document.getElementById("match");
    const pin_not_matched = document.getElementById("not_match");

    if(pin_field_value===submit_field_value){
        
        pin_matched.style.display="block";
        pin_not_matched.style.display="none";

    }
    else{
        
        pin_not_matched.style.display="block";
        pin_matched.style.display="none";
    }
    
})


