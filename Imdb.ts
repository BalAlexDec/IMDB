import {Movie} from "./Movie";
const fs = require('fs');

class Imdb{
    public movie:Movie[];

    constructor(movie:Movie[]){
        this.movie = movie;
    }

   public  escribirEnFicheroJson(nombreFichero:string):void{
        let rawdata = fs.readFileSync("imdbBBDD2.json");
        let data =  JSON.parse(rawdata);
        data = JSON.stringify(data,null,2);
        
        fs.writeFile(nombreFichero+".json", data, (err) => {
            if (err) throw err;
            console.log('Los datos se encrito en el archivo');
        });
    }

    public obtenerIntanciaIMDB(nombreFichero:string){
        let rawdata = fs.readFileSync("imdbBBDD2"+".json");
        let data =  JSON.parse(rawdata);

        return data;
    }

}

export{Imdb};