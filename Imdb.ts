import {Movie} from "./Movie";
const fs = require('fs');

class Imdb{
    public movie:Movie[];

    constructor(movie:Movie[]){
        this.movie = movie;
    }

    public  escribirEnFicheroJson(nombreFichero:string):void{
        let rawdata = this.movie;
        let data = JSON.stringify(rawdata,null,2);
        //console.log(data);
        fs.writeFileSync(nombreFichero+".json", data, (err) => {
            if (err) throw err;
            console.log('Los datos se encrito en el archivo');
        });
    }

    public obtenerIntanciaIMDB(nombreFichero:string){
        let x = new Movie("x",11,"x");
        let rawdata = fs.readFileSync(nombreFichero+".json");
        let data =  JSON.parse(rawdata);
        let imb = new Imdb(data);
        return imb;
    }

}

export{Imdb};