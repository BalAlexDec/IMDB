class Movie {

    title:string;
    releseYear:number;
    actors:number;
    nacionality:string;
    director:string;
    writert:string;
    lenguage:string;
    platform:string;
    isMCU:boolean;
    mainCharacterName:string;
    produced:string;
    disttributor:string;
    genre:string;

    constructor(title:string,releseYear:number,nacionality:string,genre:string){
        this.title=title;
        this.releseYear=releseYear;
        this.nacionality=nacionality;
        this.genre=genre;
    }

    printallMovie(){
        console.log("Nombre  "+this.title+" "+"releseYear  "+this.releseYear+
        "actors  "+this.actors+" "+"nacionality  "+this.nacionality+" "+"director  "+this.director+" "+"writert  "+this.writert+" "+
        "lenguage  "+this.lenguage+" "+"mainCharacterName  "+this.mainCharacterName+" "+"produced  "+this.produced+" "+"disttributor  "+this.disttributor+" "
        +"genre  "+this.genre+" " +"platform  "+this.platform+" "+"isMCU  "+this.isMCU+" ");
    }
}
export{Movie};