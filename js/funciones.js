console.log("tareaxxx");
let radio=0;
let longitudLado=0;
let numero_lados=0;
let elegirMenu =()=>{
    let pideOpcion=true;
    let opciones=promt(`pulsa una opcion 
    1.- area del circulo
    2.-perimetro del circulo
    3.-area poligono
    4.-perimetro poligono
    0.-salir`)

    while(pideOpcion){
        switch (opciones) {
            case "1":
                 radio=promt(`introduce la longitud del radio del circulo`);
                break;
            case "2":
                 radio=promt(`introduce la longitud del radio del circulo`);
                break;
            case "3":
                longitudLado=promt()
                break;
            case "4":
                
                break;
            case "0":
                
                break;`
                `
            
        
            default:
                break;
        }
    }
}