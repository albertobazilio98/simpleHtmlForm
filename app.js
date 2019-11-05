var arr = [];

function getFormData() {
  var form = document.getElementById("form");
  var data = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    gender: form.gender.value,
    age: form.age.value
  };
  
  var table = document.getElementById("table");
  var row = table.insertRow();
  row.insertCell().innerHTML = data.name;
  row.insertCell().innerHTML = data.phone;
  row.insertCell().innerHTML = data.email;
  row.insertCell().innerHTML = data.gender;
  row.insertCell().innerHTML = data.age;
}