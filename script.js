function calculateAge() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    const resultElement = document.getElementById("result");
    resultElement.classList.remove("error");

    // Input Validation
    if (!day || !month || !year || day > 31 || month > 12 || year > new Date().getFullYear()) {
      resultElement.innerText = "Please enter a valid date of birth!";
      resultElement.classList.add("error");
      return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    // Display Result
    if (age >= 0) {
      resultElement.innerText = `You are ${age} years old.`;
    } else {
      resultElement.innerText = "Please enter a valid date of birth.";
      resultElement.classList.add("error");
    }
  }