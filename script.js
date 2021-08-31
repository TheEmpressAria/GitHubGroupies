function validateForm() {
  let uname = document.forms["githubGroup"]["uname"].value;
  let age = document.forms["githubGroup"]["age"].value;
  let employmentStatus = document.forms["githubGroup"]["employmentStatus"].value;
  let programmingLanguage = document.querySelectorAll('input[name=programmingLanguage]:checked');
  let timeZone = document.forms["githubGroup"]["timeZone"].value;
  let interestedActivities = document.querySelectorAll('input[name=interestedActivities]:checked');
  
/* below is the character validation for the username input*/
  // let regxName = /^([a-zA-Z]+)$/;

  // if(!regxName.test(uname.value)) {

  //   uname.style.border = "solid 2px red";
  //   document.getElementById('unameLabel').innerHTML ='The name can only have alphabetic characters.';
  //   document.getElementById('unameLabel').style.visibility = 'visibile';
  // }
  // else {
  //   uname.style.border = "solid 2px green";
  //   document.getElementById('unameLabel').innerHTML='The username is valid!';
  //   document.getElementById('unameLabel').style.color='green';
  //   document.getElementById('unameLabel').style.visibility='visible';
  // }

  if (uname.length < 5) {
    
    alert("The username needs to be at least 5 characters long");
    uname.focus();
    return false;
  }
  else if (age < 18) {
    alert("You need to be 18 or older to join this group.");
    return false;
  }
  else {
    let selectedLanguages = [];
    let selectedActivities = [];
    for (let i=0; i < programmingLanguage.length; i++) {
      selectedLanguages.push(" " + programmingLanguage[i].value);
    }
    for (let i=0; i<interestedActivities.length; i++) {
      selectedActivities.push(" "+ interestedActivities[i].value);
    }


  let alertMsg = "The details supplied:" +
    "\nUsername: "+ uname +
    "\nAge: "+ age +
    "\nEmployment Status: " + employmentStatus +
    "\nLanguages Selected: "+ selectedLanguages +
    "\nActivities Selected: "+ selectedActivities +
    "\nTimeZone Selected: "+ timeZone;


  //Spittin' these bars above to console
  console.log("Supplied Details:");
  console.log("Username: ", uname);
  console.log("Age: ", age);
  console.log("Employment Status: ", employmentStatus);
  console.log("Activities Selected: ", selectedActivities);
  console.log("Languages Selected: ", selectedLanguages);
  console.log("TimeZone Selected: ", timeZone);
  alert(alertMsg);

  return true;
  }
}
