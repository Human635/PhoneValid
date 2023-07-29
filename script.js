function validate() {
    let phoneNumber = document.getElementById("phone").value;
    let message = document.getElementById("message");
  
    // LONG
    if (phoneNumber.length !== 13) {
      message.innerHTML = "INCORRECT LONG!!!";
      return;
    }

    if (!phoneNumber.startsWith("+998")) {
        message.innerHTML = "MUST BE STARTED WITH +998";
        return;
      }

    let numberPart = phoneNumber.slice(4);
    if (!/^\d+$/.test(numberPart)) {
      message.innerHTML = "ONLY NUMBERS!!!";
      return;
    }

    message.innerHTML = "CONGRATULATION!!!(Номер правельный)";
  }