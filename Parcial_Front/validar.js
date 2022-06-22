var pob = []; // pob
var pais = []; // pais

fetch('http://localhost:8000/api/paises')

.then(obtenidos => obtenidos.json())

.then(function transformar(obtenidos){

x = 0
obtenidos.forEach(function agregar (obtenidos)
{
    if(obtenidos.nombre != undefined && obtenidos.id != undefined)
    {
        pob.push(obtenidos.id);
        pais.push(obtenidos.nombre);
    }
});

var graf2={
  values: pob,
  labels: pais,
  type: 'pie',
};

var datosgraf= [graf2];

var layout={
    title: 'Numero De Suscriptores Por paiseedor',
    showlegend: true,
    height: 800,
    width: 800,
    grid: {columns: 2}

};

var data = [{
    type: 'table',
    header: {
      values: pais,
      align: "center",
      line: {width: 1, color: 'black'},
      fill: {color: "grey"},
      font: {family: "Arial", size: 12, color: "white"}
    },
    cells: {
      values: pob,
      align: "center",
      line: {color: "black", width: 1},
      font: {family: "Arial", size: 11, color: ["black"]}
    }
  }]

Plotly.newPlot("grafica1",datosgraf,layout);
Plotly.newPlot('grafica', data);
});

Plotly.newPlot("grafica",datosgraf,layout);


// Funcion Verificar poblacion

function verificar(){
    let pob = document.getElementById("pob").value;
    if (pob <= 0 || pob > 2500){
        alert("La poblacion no puede ser menor que 0 ni mayor que 2500");
        boton.style.display="none";

    }
    else{
        boton.style.display="block";
    }
}