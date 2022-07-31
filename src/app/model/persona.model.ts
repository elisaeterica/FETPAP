export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    domicilio: String;
    telefono: String;
    correo: String;
    acercaDe: String;
    fn: String;
    img: String;

    constructor (nombre: String, apellido: String, 
        domicilio: String, telefono: String, correo: String, 
        acercaDe: String, fn: String, img: String) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.domicilio = domicilio;
            this.telefono = telefono;
            this. correo = correo;
            this.acercaDe = acercaDe;
            this.fn = fn;
            this.img = img;

        }

}