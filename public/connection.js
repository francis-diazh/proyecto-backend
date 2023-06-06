const socket = io()

function emit_data(){
   socket.emit(
        'primer_conexion',
        {
            name: 'Fran',
            age: 28
        }
    ) 
}
let selectors =  document.querySelectorAll(".emit_data")
console.log(selectors)
selectors.forEach(each=>each.addEventListener("click",emit_data))

socket.on(
    'contador',
    data => console.log(data)
)
socket.on('contador', data => {
    const contadorSpan = document.getElementById('contador');
    contadorSpan.innerText = data.contador;
});

