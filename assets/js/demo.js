ks_hideById("loader_submit");

const form = document.getElementById("contact-form-demo");
function submitForm(event) {
  ks_showById("loader_submit");
  event.preventDefault();

  const formData = new FormData(form);

  const last_name = document.getElementById("last_name").value;
  const name = document.getElementById("name").value;
  const phone_number = document.getElementById("phone_number").value;
  const email = document.getElementById("email").value;
  const company_name = document.getElementById("company_name").value;
  const service = document.getElementById("service").value;
  const ksproducts = document.getElementById("ksproducts").value;
  const countrySelect = document.getElementById("countrySelect").value;
  if (
    last_name === "" ||
    name === "" ||
    phone_number === "" ||
    email === "" ||
    company_name === "" ||
    service === "0" ||
    ksproducts === "0" ||
    countrySelect === "0"
  ) {
    
    ks_showById("loader_submit");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Remplis tous les champs :)",
    });
  } else {
    fetch("demoReq.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        ks_hideById("loader_submit");
        if (response.ok) {
          Swal.fire({
            title: "Merci: ",
            text: "nous vous contacterons !",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  }
}

fetch("data/countries.json")
  .then((response) => response.json())
  .then((data) => {
    const selectElement = document.getElementById("countrySelect");

    data.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.value;
      option.textContent = country.name;
      selectElement.appendChild(option);
    });
  })
  .catch((error) => console.error("Error fetching countries:", error));

fetch("data/services.json")
  .then((response) => response.json())
  .then((data) => {
    const selectElement = document.getElementById("service");

    data.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.name;
      option.textContent = country.name;
      selectElement.appendChild(option);
    });
  })
  .catch((error) => console.error("Error fetching countries:", error));

function ks_displayErrorFields(id, value) {
  if (value === "") {
    ks_showById(id);
  }
}

function ks_hideById(id) {
  document.getElementById(id).style.display = "none";
}

function ks_showById(id) {
  document.getElementById(id).style.display = "block";
}
