
interface ISports {
    printDetails(): void;
}

interface ISportsAction {
    play(): void;
}

class Sports implements ISports, ISportsAction {
    private _players: number = 0;
    private _name: string;

    constructor(players: number, name: string = 'Sports') {
        this._name = name;
        this.players = players;
    }
    
    public get players(): number {
        return this._players;
    }

    public set players(players: number) {
        this._players = players;
    }

    public printDetails(): void {
        console.log(this._name, `Max players count: ${this.players}`);
    }

    play(): void {
        console.log("Soprts started");
    }
}

class Cricket extends Sports implements ISportsAction {
    private _overs: number = 0;

    constructor(players: number, overs: number) {
        super(players);
        this.overs = overs;
    }

    public get overs(): number {
        return this._overs;
    }

    public set overs(overs: number) {
        this._overs = overs;
    }

    //overriding
    public printDetails(): void {
        console.log("Cricket", `Max players count: ${this.players} and Max over is ${this.overs}`);
    }
}

class Football extends Sports {
    private _time: number = 0;

    constructor(players: number, time: number) {
        super(players);
        this.time = time;
    }

    public get time(): number {
        return this._time;
    }

    public set time(time: number) {
        this._time = time;
    }

    //overriding
    public printDetails(): void {
        console.log("Football", `Max players count: ${this.players} and Time limit is ${this.time}`);
    }
}

class Main {

    public static main(): void {

        let cricket: Cricket = new Cricket(11, 50);
        let football: Football = new Football(11, 90);

        let sports: Sports | undefined;

        sports = cricket;
        sports?.printDetails();

        sports = football;
        sports?.printDetails();
    }

}

Main.main();


//OOps -> 
// Polymorphrisim => (compile time) ( run time)
// interface