document.getElementById("lastname").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      agregarEstudiante();
    }
  });
  
  function agregarEstudiante() {
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let note1 = parseFloat(document.getElementById("note1").value);
    let note2 = parseFloat(document.getElementById("note2").value);
    let note3 = parseFloat(document.getElementById("note3").value);
    if(firstname.value==""||lastname==""){
        alert("no se ingreso nombre o apellido");
    }else{
    let promedio = (note1 + note2 + note3) / 3;
    let table = document.getElementById("tabladeestudiantes").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);
    
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let cell8 = newRow.insertCell(7);
    
    let btn_editar = document.createElement("button")
    let btn_borrar = document.createElement("button")
    let valor_btn_edita = document.createTextNode("Editar")
    let valor_btn_borrar = document.createTextNode("Borar")
    let mostrar = document.querySelector("#mostrar")

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = note1;
    cell4.innerHTML = note2;
    cell5.innerHTML = note3;
    cell6.innerHTML = promedio.toFixed(2);
    
    btn_editar.appendChild(valor_btn_edita);
    btn_borrar.appendChild(valor_btn_borrar);
    mostrar.appendChild(btn_editar)
    mostrar.appendChild(btn_borrar)
    cell7.innerHTML = btn_editar;
    console.log(btn_editar)
    newRow.cells[6].appendChild(btn_editar);
    newRow.cells[7].appendChild(btn_borrar);



    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("note1").value = "";
    document.getElementById("note2").value = "";
    document.getElementById("note3").value = "";
    document.getElementById("firstname").focus();
    }
  }
  