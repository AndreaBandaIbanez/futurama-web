 export interface ICharacterResponse {

    items : ICharacter[],
    total : number,
    page : number,
    size : number,
    pages : number
  } 

 export interface ICharacter {

    id: number,
    name : string,
    gender : string,
    status : string,
    species : string,
    createdAt: string,
    image : string

  }