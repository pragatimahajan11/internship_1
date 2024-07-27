
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    var form3 = document.getElementById("form3");
    var form4 = document.getElementById("form4");
    var form5 = document.getElementById("form5");

    var btn1 = document.getElementById("next");

    var btn2 = document.getElementById("planback");
    var btn3 = document.getElementById("planNext");

    var btn4 = document.getElementById("addOnnext");
    var btn5 = document.getElementById("addOnback");

    var btn6 = document.getElementById("finishgoback");
    var btn7 = document.getElementById("finishConfirm");
    var change = document.getElementById("change");

    var btn8 = document.getElementById("finishConfirm");

    btn1.addEventListener('click', (e) => {
        e.preventDefault();
        let form = e.target;

        var nametxt = document.getElementById("name").value;
        var emailtxt = document.getElementById("email").value;
        var numtxt = document.getElementById("num").value;

        var atposition = emailtxt.indexOf("@");
        var dotposition = emailtxt.lastIndexOf(".");
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        if (nametxt == "") {
            alert("name field is empty")

        }
        else if (emailtxt == "") {
            alert(" email field is empty")

        }
        else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= emailtxt.length) {
            // alert("enter valid email")
            document.getElementById("message2").innerHTML = "* * Please Enter valid email";

        }
        else if (numtxt == "") {
            alert(" number field is empty")
        }
        else if (numtxt == "") {
            document.getElementById("message").innerHTML = "* * Please fill Mobile Number";
            return false;
        }
        else if (isNaN(numtxt)) {
            document.getElementById("message").innerHTML = "*enter only numeric value";
            return false;
        }
        else if (numtxt.length < 10) {
            document.getElementById("message").innerHTML = "Mobile Number must be 10 digit";
            return false;
        }
        else {
            form1.style.display = "none"
            form2.style.display = "flex"
        }
        // form1.style.display = "none"
        //  form2.style.display = "flex"
    });

    btn2.addEventListener('click', (e) => {

        form1.style.display = "flex"
        form2.style.display = "none"
    });

    btn3.addEventListener('click', (e) => {

        form2.style.display = "none"
        form3.style.display = "flex"
    });

    btn4.addEventListener('click', (e) => {
        form3.style.display = "none"
        form4.style.display = "flex"
    });

    btn5.addEventListener('click', (e) => {
        form3.style.display = "none"
        form2.style.display = "flex"
    });

    btn6.addEventListener('click', (e) => {
        form3.style.display = "flex"
        form4.style.display = "none"
    });

    btn7.addEventListener('click', (e) => {
        form4.style.display = "none"
        form3.style.display = "none"
    });

    change.addEventListener('click', (e) => {
        form1.style.display = "flex"
        form4.style.display = "none"
    });

    btn8.addEventListener('click', (e) => {
        form4.style.display = "none"
        form5.style.display = "flex"
    });
