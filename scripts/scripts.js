document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulaire-inscription");
  const liste = document.getElementById("liste-eleves");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nom = document.getElementById("nom").value;
      const prenom = document.getElementById("prenom").value;
      const dob = document.getElementById("dob").value;
      const classe = document.getElementById("classe").value;

      const eleves = JSON.parse(localStorage.getItem("eleves") || "[]");
      eleves.push({ nom,  avec succès !");
      form.reset();
    });
  }
prenom, dob, classe });
      localStorage.setItem("eleves", JSON.stringify(eleves));
      alert("Élève inscrit