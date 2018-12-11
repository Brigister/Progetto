import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service'
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import io from 'socket.io-client';
import { Player } from 'src/app/player';
import { Board } from '../../board'

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

  horPos : Function;
  verPos : Function;
  positionCheck: Function;
  shipPositioning: Function;
  playerOneClick: Function;
  playerArrivoClick: Function;
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
    /* this.me.username = this.authService.getUsername();
    this.me.id = this.authService.getId(); */

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
      self.authService.userLoss(self.username);
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
        alert("Non ti è consentito mettere una barca qui");
      }
  }

    //value = 0 non c'è la barca
    //value = 1 c'è una barca
    //value = 2 casella cliccata
    self.playerOneClick = function(click:any) {
      
      let id = click.target.id,
      row = id.substring(2,3), col = id.substring(3,4),
      tile = this.boards[1].tiles[row][col];
      console.log(tile);
      this.gamedata.socket.emit('click', id);

     if (this.checkValidHit(tile)) {
         //necessario per evento server : hit e informazioni turno del giocatore
      if (self.gamedata.turno == self.gamedata.numeroGiocatore) {
        console.log("Turno di " + self.gamedata.turno)
        self.gamedata.socket.emit('hit', self.gamedata.turno);
        self.gamedata.turno = self.gamedata.turno == "1" ? "2" : "1";

          if (tile.value == 1) {
            //colpo di cannone
            this.boards[1].tiles[row][col].status = 'hit';
            this.boards[1].tiles[row][col].value = 2;
            console.log(this.boards[1].tiles[row][col].value);
            this.score++;
            if(this.score == 1){
            
  //ULTIMA COSA DA SISTEMARE PRE CONSEGNA -> score per vincere
  //------->>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------
  //------->>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------
  //------->>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------
  //------->>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------

              //Vittoria
              self.gamedata.socket.emit('victory', this.username);
              self.authService.userWin(this.username);
              this.gamedata.notOver = false;
              this.end = true;
            }
          } else {
              //acqua
              this.boards[1].tiles[row][col].status = 'miss' 
              this.boards[1].tiles[row][col].value = 2;
            }        

        
        //this.boards[boardId].tiles[row][col].used = true;
        //this.boards[boardId].tiles[row][col].value = "X";
        return this;

      } else {
        console.log("C'è luogo e momento per ogni cosa, ma non ora. Non è il tuo turno.")
      }
    } else {
        alert ("Stai cliccando su una casella che hai già cliccato, riprova")
      
    }

    }
    //-----------------------------


    self.gamedata.socket.on('arrivoClick', function(data) {
      //Gestione colpo
      self.playerArrivoClick(data);
      console.log(data);
    })
    
    self.playerArrivoClick = function(click:any) {
      
      let id = click,
      row = id.substring(2,3), col = id.substring(3,4),
      tile = this.boards[0].tiles[row][col];
      console.log(click);
        

      if (self.gamedata.turno != self.gamedata.numeroGiocatore) {
        if (!this.checkValidHit(tile)) {
            console.log("no");
            return;
        }
        if (tile.value == 1) {
          //Colpito
          this.boards[0].tiles[row][col].status = 'hit';
        } else {
             //Acqua (Mancato)
              this.boards[0].tiles[row][col].status = 'miss' 
          }
        return this;

      } 
    }

  }

  submitBoard(){
    this.myBoard = this.boards[0].tiles;
    this.gamedata.socket.emit('ack1', this.boards[0].tiles);
    this.gamedata.sent = true;
    console.log(this.boards)
    return;
   }

  deleteShips(){
    this.boards.shift();
    this.myBoard=this.boardService.createBoard()
    var ship_testone = this.ship_test.slice(0);
    this.ship_try = ship_testone;
    console.log(this.ship_test);  
  }

  //controlla se una casella è già stata cliccata
  checkValidHit(tile: any) : boolean {
    var clickable = true;

    if (tile.value == 2 ) {
      clickable = false
    }
    return clickable;
  }

  get boards () : Board[] {
    return this.boardService.getBoards()
  } 
} 