import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service'
import { Board } from '../../board'
import io from 'socket.io-client';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { Player } from 'src/app/player';
import { IOffset } from 'selenium-webdriver';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

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

//ULTIMA COSA DA SISTEMARE PRE CONSEGNA -> IL NUMERO DI BARCHE GIUSTO!! 
//------->>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------
//------->>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------
//------->>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------
//------->>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------

  //ship_try: any [] = [2, 2, 2, 2, 3, 3, 4, 4, 5];
  ship_try: any [] = [2, 3, 4];
  ship_test = this.ship_try.slice(0);

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
  
  


  constructor(
    private boardService: BoardService,
    private authService: AuthService,
    public dataService : DataService
  ) {}

  ngOnInit(): void {
    console.log(gameId);
    this.me.username = this.authService.getUsername();
    this.me.id = this.authService.getId();

    var self = this;

    self.gamedata.turno = '1';

    self.gamedata.socket = io.connect('http://localhost:3000');

    self.gamedata.socket.on('connect', () => {
      console.log('loggato');
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


    //scambio boards
    self.gamedata.socket.on('game started', function() {
      //self.gamedata.gucci = true;
      self.players = true;
      console.log("game started!");
      this.myBoard = self.boardService.createBoard();
      
      console.log(this.myBoard);
      //self.gamedata.socket.emit('scambio', this.myBoard)
    });

    //ricezione boards
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


    self.gamedata.socket.on('turn', function(nuovoTurno) {
      //gestione colpo di cannone** 
      self.gamedata.turno = nuovoTurno;
      console.log(self.gamedata.turno);
    })

    //partita persa!
    self.gamedata.socket.on('loss', function(data){
      console.log('Your opponent ' + data + ' has won the game');
      self.gamedata.loses = true
      self.gamedata.notOver = false;
      self.authService.userLoss(self.me.id);
    })

    

    
    //switch posizionamento orizzontale e verticale
    self.verPos = function(click: any){
      if (this.ver == false) {
        this.ver = true;
        console.log("Posizionamento : Verticale");
        var cambio = document.getElementById("cambio");
        cambio.innerText="Posizionamento Orizzontale";
      }
      else {
        this.ver = false;
        var cambio = document.getElementById("cambio");
        cambio.innerText="Posizionamento Verticale";    
      }
    }



    //controllo posizionamento adeguato delle barche
    self.positionCheck = function(row : number, col : number, ship : number) {
      var _row : number = row;
      //var fif : number = row;
      var _col : number = col;
      var good = true;
      //console.log(this.boards[0].tiles[row--][col].value)
     

      if(this.ver){
        //posizionamenti verticali all'interno del reticolo ed adiacenza ai lati
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
          //controllo posizionamento verticale : barche sopra e sotto
          if (this.boards[0].tiles[row-1][col].value == 1){
            good = false;
          }   
        }

        if (good == true && (row+ship) < board_size && this.boards[0].tiles[row+ship][col].value == 1){
          good = false;
        }  

      }
      else{
        //controllo posizionamento orizzontale : rimanere all'interno del reticolo
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
          //controllo posizionamento verticale : barche sopra e sotto
          if (this.boards[0].tiles[row][col-1].value == 1){
            good = false;
          }   
        }

        if (good == true && (col+ship) < board_size && this.boards[0].tiles[row][col+ship].value == 1){
          good = false;
        }  
        
      }

      console.log(this.boards[0]);
      return good;
    }
    //value = 2 -> check se =1 || =2 no room to place
    
    self.shipPositioning = function(click: any) {
      
      let id = click.target.id,
        boardId = 0,
        row = <number>id.substring(2, 3), col = <number>id.substring(3, 4),
        tile = this.boards[boardId].tiles[row][col];
    
      if (this.ship_try.length == 0) {
        console.log("barche esaurite");
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
        alert("Nope");
      }
      
      if (this.ship_try.length == 0) {
        this.submittable = true;
      }
      if (this.ship_try.length <= 8) {
        this.deletable = true;
      }
  }
  
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
    //necessario per evento server : hit e informazioni turno del giocatore
      if (self.gamedata.turno == self.gamedata.numeroGiocatore) {
        console.log("Turno di " + self.gamedata.turno)
        self.gamedata.socket.emit('hit', self.gamedata.turno);
        self.gamedata.turno = self.gamedata.turno == "1" ? "2" : "1";

        

        if (tile.value == 1) {
          //colpo di cannone
          this.boards[boardId].tiles[row][col].status = 'hit';
          this.me.score++;
          if(this.me.score == 10){
            
  //ULTIMA COSA DA SISTEMARE PRE CONSEGNA -> score per vincere
  //------->>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------
  //------->>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------
  //------->>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------
  //------->>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------

            console.log(this.me.username + ', congratulazioni! Hai vinto la partita!')
            //Vittoria
            self.gamedata.socket.emit('victory', this.username);
            self.authService.userWin(this.me.id);
            this.gamedata.notOver = false;
            this.end = true;
          }
          console.log('hit, score: ' + this.me.score);
        } else {
          //acqua
          this.boards[boardId].tiles[row][col].status = 'miss' 
        }
        this.boards[boardId].tiles[row][col].used = true;
        this.boards[boardId].tiles[row][col].value = "X";
        return this;

      } else {
        console.log("C'è luogo e momento per ogni cosa, ma non ora. Non è il tuo turno.")
      }
    }

    self.gamedata.socket.on('arrivoClick', function(data) {
      //Gestione colpo
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
          //Colpito
          this.boards[boardId].tiles[row][col].status = 'hit';
        
          
             } else {
          //Acqua (Mancato)
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
    debugger;
    console.log(this.boards);
    this.boards.pop();
    this.myBoard = this.boardService.createBoard();
    var ship_testone = this.ship_test.slice(0);
    this.ship_try = ship_testone;
    this.deletable = false;
    this.submittable = false;
   /*  console.log(this.deletable);
    console.log(this.boards); */
    console.log(this.ship_test);
    
  }
/* 
//se premi sul bottone ti dice di chi è il turno
  israel(){
    console.log("TURNO DI " + this.gamedata.turno + this.loss + this.end + this.gamedata.loses);
  })
 */

  checkValidHit(tile: any) : boolean {

    if(this.gamedata.loses == true)  {
      console.log('Hai perso, la partita è terminata!');
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

  //score necessario per vincere
  get winner () : boolean{
    return this.score >= 20
  }

  // ricezione board e assegnamento proprietà
  get boards () : Board[] {
    return this.boardService.getBoards()
  }
}