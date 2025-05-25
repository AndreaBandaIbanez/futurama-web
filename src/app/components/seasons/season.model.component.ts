export interface ISeasonResponse {

    items : ISeason[],
    total : number,
    page : number,
    size : number,
    pages : number
  } 

 export interface ISeason {

    id: number,
    episodes : ISeasonEpisodes[],
  }

  export interface ISeasonEpisodes {

    id: number,
    name: string,
    number: number,
    productionCode: string
  }
  
    