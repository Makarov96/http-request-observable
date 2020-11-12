export class Persona  {

    private _nombre: string;
    private _apellido: string;
    private _fecha: string;
    private _genero: string;
    private _correo: string;
    private _contra: string;
    private _tipousuario: string;


    constructor(
        nombre:string,
        apellido:string,
        fecha:any,
        genero:string,
        correo:string,
        contra:string,
        tipousuario:string
    ) {

        this._nombre = nombre,
        this._apellido= apellido,
        this._fecha=fecha,
        this._genero= genero,
        this._correo = correo,
        this._contra=contra,
        this._tipousuario=tipousuario
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }

    public get fecha(): string {
        return this._fecha;
    }
    public set fecha(value: string) {
        this._fecha = value;
    }

    public get genero(): string {
        return this._genero;
    }
    public set genero(value: string) {
        this._genero = value;
    }

    public get correo(): string {
        return this._correo;
    }
    public set correo(value: string) {
        this._correo = value;
    }

    public get contra(): string {
        return this._contra;
    }
    public set contra(value: string) {
        this._contra = value;
    }

    public get tipousuario(): string {
        return this._tipousuario;
    }
    public set tipousuario(value: string) {
        this._tipousuario = value;
    }
}