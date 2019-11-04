function getFormData() {
  var form = document.getElementById("form");
  var data = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    gender: form.gender.value,
    age: form.age.value
  };
  console.log(data)
}