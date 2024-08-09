let data = {"abc": 1234, "def": 345};



function printInfo(){
    let Bnumber = document.getElementById("BNumber").value;
    let UserLastName = document.getElementById("UserLastName").value;


    data[UserLastName] = Bnumber;

    window.location.href = "notice.html"; // Redirect to notice.html page
    return false;
}