export interface IContent{
    content:string,
    contentName:string
}

export interface IAnime{
    anime_id:number,
    user_id:number,
    anime_name:string,
    episode:number,
    favoriteCharacter:string,
    speed:boolean,
}

export interface ICurrentAnime{
    year:number,
    season:'1' | '2' | '3' | '4',
    releaseDate:Date,
    delivery_weekday:'1' | '2' | '3' | '4' | '5' | '6' | '7',
    delivery_time:string,
    anime:IAnime,
}

export interface IPastAnime{
    watching_start_date:Date,
    anime:IAnime
}

export interface IViewedAnime{
    viewed_end_date:Date,
    anime:IAnime
}