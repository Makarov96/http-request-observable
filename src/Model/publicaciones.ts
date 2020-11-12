export class name {

    private _id: any;
    private _descripcion: string;
    private _direccion: any;
    private _precio: any;
    private _tipodetrabajo: string;
    private _municipio: string;
    private _departamento: string;


    constructor(id:any, descripcion:string, direccion:any,precio:any,tipodetrabajo:string,
        municipio:string, departamento:string
        ) {

            this._id=id,
            this._descripcion=descripcion,
            this._direccion=direccion,
            this._precio=precio,
            this._tipodetrabajo=tipodetrabajo,
            this._municipio=municipio,
            this._departamento = departamento

    }


    public get id(): any {
        return this._id;
    }
    public set id(value: any) {
        this._id = value;
    }

    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }


    public get direccion(): any {
        return this._direccion;
    }
    public set direccion(value: any) {
        this._direccion = value;
    }

    public get precio(): any {
        return this._precio;
    }
    public set precio(value: any) {
        this._precio = value;
    }

    public get tipodetrabajo(): string {
        return this._tipodetrabajo;
    }
    public set tipodetrabajo(value: string) {
        this._tipodetrabajo = value;
    }

    public get municipio(): string {
        return this._municipio;
    }
    public set municipio(value: string) {
        this._municipio = value;
    }

    public get departamento(): string {
        return this._departamento;
    }
    public set departamento(value: string) {
        this._departamento = value;
    }


}


