
    export class Player {
        id: string;
        username:string;
        score: number;
  
        constructor(values: Object = {}) {
          Object.assign(this, values);
        }
      }