export interface IEpisodesResponse {
     
    
        items : IEpisodes[],
        total : number,
        page : number,
        size : number,
        pages : number
      
}
      
export interface IEpisodes {

    id: number,
    name : string,
    number : number,
    productionCode : string,
    airDate : string,
    duration: number,
    createdAt : string
    season : IEpisodeSesion,
    broadcastCode : string
    
}
  
export interface IEpisodeSesion {
    id: number
}