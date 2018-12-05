import { Component, OnInit } from '@angular/core';
// import needed classes and services
import { BoardService } from '../../services/board.service'
import { Board } from '../../board'
import io from 'socket.io-client';
import { IOffset } from 'selenium-webdriver';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Player } from '../../player';

var gameId: string = '2';
const board_size: number = 10;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [BoardService]
})

export class GameComponent {

  players: boolean = false;
  myBoard: object[];
  player: number = 0; 
  end : boolean = false;
  loss : boolean = false;
  ver: boolean = false;

  //ship_try: any [] = [2, 2, 2, 2, 3, 3, 4, 4, 5];
  ship_try: any [] = [2, 3, 4];
  ship_test = this.ship_try.slice(0);

  //metto nell'oggetto per fare il 1 livello di cheat del this
  gamedata: any = {
    socket: null,
    gameId: '2',
    numeroGiocatore: "",
    turno: "",
    score: 0,
    loses: false,
    notOver: true,
    sent: false,
    received: false
  };

  me: any = {
    score: 0,
    id: '',
    username: ''
  };
  horPos : Function;
  verPos : Function;
  positionCheck: Function;
  shipPositioning: Function;
  playerOneClick: Function;
  playerArrivoClick: Function;
  submittable : boolean = false;
  deletable: boolean = false;
  notOver : boolean = true;
  

  score: number = 0;
  username: string = this.authService.getUsername();
  id: string = this.authService.getId();

/*
la roba che inizi le partite da solo
login dello steso utente 2 volte
*/
  
  
  constructor(
    private boardService: BoardService,
    private authService: AuthService,
    public dataService : DataService
  ) {}

  ngOnInit(): void {
    console.log(gameId);
    this.me.username = this.authService.getUsername();
    this.me.id = this.authService.getId();

    //non puoi usare il this dentro la cosa perchè il contesto è un altro
    //questo lo cheatta (livello2)
    var self = this;

    self.gamedata.turno = '1';

    self.gamedata.socket = io.connect('http://localhost:3000');

    self.gamedata.socket.on('connect', () => {
      // console.log(this.players);
      console.log('utente connessionato');
    })

    self.gamedata.socket.on('new game', function (data) {
      self.gamedata.gameId = data;
      console.log("created game " + self.gamedata.gameId);
      self.gamedata.numeroGiocatore = "1";
    });

    self.gamedata.socket.on('user joined', function (data) {
      self.gamedata.gameId = data;
      console.log("player joined game " + self.gamedata.gameId);
      if (self.gamedata.numeroGiocatore == "") {
        self.gamedata.numeroGiocatore = "2";
        self.gamedata.socket.emit('start game');
      }
    });


    //fa partire scambio
    self.gamedata.socket.on('game started', function() {
      //self.gamedata.gucci = true;
      self.players = true;
      console.log("game started!");
      this.myBoard = self.boardService.createBoard();
      
      console.log(this.myBoard);
      //self.gamedata.socket.emit('scambio', this.myBoard)
    });

    //ricevo board
    self.gamedata.socket.on('ack2', function(data){
      console.log('ricevo board');
      
      let board = new Board({
        Player : new Player ({id: self.id, username: self.username}),
        tiles: data
      });
      self.boardService.boards.push(board);
      console.log(data);
      
      self.gamedata.received = true;
    })

    /*self.gamedata.socket.on('ack2', function(data) {
     console.log(data);
    })*/

    self.gamedata.socket.on('turn', function(nuovoTurno) {
      //gestire colpo 
      self.gamedata.turno = nuovoTurno;
      console.log(self.gamedata.turno);
    })

    //viene eseguito quando perdo
    self.gamedata.socket.on('loss', function(data){
      console.log('Your opponent ' + data + ' has won the game');
      self.gamedata.loses = true
      self.gamedata.notOver = false;
      self.authService.userLoss(self.me.id);
    })

    
    //cambio di posizionamento orizzontale/verticale
    self.verPos = function(click: any){
      if (this.ver == false) {
        this.ver = true;
        console.log("stai mettendo le barche in verticale");
        var cambio = document.getElementById("cambio");
        cambio.innerText="Posizionamento Orizzontale";
      }
      else {
        this.ver = false;
        var cambio = document.getElementById("cambio");
        cambio.innerText="Posizionamento Verticale";    
      }
    }

    //manca da capire come controllare che non siano una attaccata all'altra
    //c'è da cambiare che tiles[row-1][col] tiles[row+1][col] tiles[row][col-1] tiles[row][col+1]
    //credo vada messa quando c'è il controllo che la ship è finita
    //controllo diagonali???



    //controlla che le barche siano messe correttamente
    self.positionCheck = function(row : number, col : number, ship : number) {
      var _row : number = row;
      //var fif : number = row;
      var _col : number = col;
      var good = true;
      //console.log(this.boards[0].tiles[row--][col].value)
     

      if(this.ver){
        //controllo che le verticali non escano e che non ce ne siano adiacenti ai lati
        for (var i = 0; i<ship; i++) {
          if (_row > (board_size-1)) {
           good = false;
          }
          console.log(_row + col);
          if(col == 0 && good == true){
            if (this.boards[0].tiles[_row][col+1].value == 1 || this.boards[0].tiles[_row][col].value == 1){
              good = false;
            }
          }else{
            if(col == (board_size-1) && good == true){
              if (this.boards[0].tiles[_row][col-1].value == 1 || this.boards[0].tiles[_row][col].value == 1){
                good = false;
              }
            }else{
              if (good == true){
              if (this.boards[0].tiles[_row][col-1].value == 1 || this.boards[0].tiles[_row][col+1].value == 1 || this.boards[0].tiles[_row][col].value == 1){
                good = false;
              }
              }
            }
          }
          _row++;
          }
          
      
        if(row > 0 && good == true){
          //controllo che le verticali non abbiamo una barca sopra
          if (this.boards[0].tiles[row-1][col].value == 1){
            good = false;
          }   
        }

        if (good == true && (row+ship) < board_size && this.boards[0].tiles[row+ship][col].value == 1){
          good = false;
        }  

        //controlli
      }
      else{
        //controllo che le orizzontali non escano
        for (var i = 0; i<ship; i++) {
          if (_col > (board_size-1)) {
           good = false;
          }
          console.log(_row + col);
          if(good == true && row == 0 ){
            if (this.boards[0].tiles[row+1][_col].value == 1 || this.boards[0].tiles[row][_col].value == 1){
              good = false;
            }
          }else{
            if(good == true && row == (board_size-1)){
              if (this.boards[0].tiles[row-1][_col].value == 1 || this.boards[0].tiles[row][_col].value == 1){
                good = false;
              }
            }else{
              if (good == true){
              if (this.boards[0].tiles[row-1][_col].value == 1 || this.boards[0].tiles[row+1][_col].value == 1 || this.boards[0].tiles[row][_col].value == 1){
                good = false;
              }
              }
            }
          }
          _col++;
          }
          
      
        if(good == true && col > 0){
          //controllo che le verticali non abbiamo una barca sopra
          if (this.boards[0].tiles[row][col-1].value == 1){
            good = false;
          }   
        }

        if (good == true && (col+ship) < board_size && this.boards[0].tiles[row][col+ship].value == 1){
          good = false;
        }  
        //controlli
      }

      console.log(this.boards[0]);
      return good;
    }
    //metto le caselle vicine settate a value = 2 e faccio il controllo se value =1 || value =2 non posso mettere la barca

    // va messo una volta finito di applicare una barca, una nuova variabile true o false che abbiano tutte le caselle, 
    //che diventa true in tutte le caselle intorno alla barca applicata e una volta che metti una nuova barca controlla 
    //che non ci siano nella traiettoia +1 -1 row e +1 -1 col caselle che hanno quella variabile a true
    
    self.shipPositioning = function(click: any) {
      
      let id = click.target.id,
        boardId = 0,
        row = <number>id.substring(2, 3), col = <number>id.substring(3, 4),
        tile = this.boards[boardId].tiles[row][col];
    
      if (this.ship_try.length == 0) {
        console.log("non ci sono più barche");
        return;
      }

      if(this.positionCheck(+ row, + col, this.ship_try[0], tile)){
          for (let i= 0; i < this.ship_try[0]; i++) {
          
          if (this.ver == true){
            this.boards[boardId].tiles[row++][col].value = 1;
          }
          else {
            this.boards[boardId].tiles[row][col++].value = 1;
          }
          
        }
        this.ship_try.splice(0,1);
        
      }
      else {
        alert("Nou");
      }
      
      if (this.ship_try.length == 0) {
        this.submittable = true;
      }
      if (this.ship_try.length <= 8) {
        this.deletable = true;
      }
  }
  
   
    //MISSA WOWEI
    self.playerOneClick = function(click:any) {
      
      let id = click.target.id,
      boardId = 1,   
      row = id.substring(2,3), col = id.substring(3,4),
      tile = this.boards[boardId].tiles[row][col];
      console.log(tile);
      this.gamedata.socket.emit('click', id);


  

    if (!this.checkValidHit(boardId, tile)) {
      console.log("no");
      return;
    }
    
      if (self.gamedata.turno == self.gamedata.numeroGiocatore) {
        console.log("TURNO DI " + self.gamedata.turno)
        //per farlo server side devi mandargli l'evento dell'hit
        //e l'info del giocatore del quale il turno è
        self.gamedata.socket.emit('hit', self.gamedata.turno);
        self.gamedata.turno = self.gamedata.turno == "1" ? "2" : "1";

        

        if (tile.value == 1) {
          //hit
          this.boards[boardId].tiles[row][col].status = 'hit';
          this.me.score++;
          if(this.me.score == 1){//da cambiare
            console.log(this.me.username + ', you win the game!')
            //viene eseguito quando vinco
            self.gamedata.socket.emit('victory', this.username);
            self.authService.userWin(this.me.id);
            this.gamedata.notOver = false;
            this.end = true;
          }
          console.log('hit, score: ' + this.me.score);
        } else {
          //miss
          this.boards[boardId].tiles[row][col].status = 'miss' 
        }
        this.boards[boardId].tiles[row][col].used = true;
        this.boards[boardId].tiles[row][col].value = "X";
        return this;

      } else {
        console.log("NON E' IL TUO TURNO CHEATER")
      }
    }

    self.gamedata.socket.on('arrivoClick', function(data) {
      //gestire colpo 
      self.playerArrivoClick(data);
      console.log(data);
    })
    
    self.playerArrivoClick = function(click:any) {
      
      let id = click,
      
      boardId = 0,   
      row = id.substring(2,3), col = id.substring(3,4),
      tile = this.boards[boardId].tiles[row][col];
      console.log(click);
        

      if (self.gamedata.turno != self.gamedata.numeroGiocatore) {
      if (!this.checkValidHit(boardId, tile)) {
      console.log("no");
      return;
    }
            if (tile.value == 1) {
          //hit
          this.boards[boardId].tiles[row][col].status = 'hit';
        
          
             } else {
          //miss
          this.boards[boardId].tiles[row][col].status = 'miss' 
        }
        this.boards[boardId].tiles[row][col].used = true;
        this.boards[boardId].tiles[row][col].value = "X";
        return this;

      } 
    }

  }

  submitBoard(){
    this.myBoard = this.boards[0].tiles;
    this.gamedata.socket.emit('ack1', this.boards[0].tiles);
    this.gamedata.sent = true;
    this.submittable = false;
    this.deletable = false;
    return;
   }
  

  deleteShips(){
    this.boards.pop();
    this.myBoard = this.boardService.createBoard();
    var ship_testone = this.ship_test.slice(0);
    this.ship_try = ship_testone;
    this.deletable = false;
    this.submittable = false;

    console.log(this.ship_test);
    
  }

  //se premi sul bottone ti dice di chi è il turno
  israel(){
    console.log("TURNO DI " + this.gamedata.turno + this.loss + this.end + this.gamedata.loses);
  }

  checkValidHit(tile: any) : boolean {

    if(this.gamedata.loses == true)  {
      console.log('hai perso, la partita è finita');
      return false;
    }
    if (this.end) {
      return false;
    }
    if(tile.value == "X") {
      return false;
    }
    return true;
  }

  // winner property to determine if a user has won the game.
  // once a user gets a score higher than the size of the game
  // board, he has won.
  get winner () : boolean{
    return this.score >= 20
  }

  // get all boards and assign to boards property
  get boards () : Board[] {
    return this.boardService.getBoards()
  }
}

