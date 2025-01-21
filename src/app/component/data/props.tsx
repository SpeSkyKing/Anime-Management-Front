import {IAnime, IContent,ICurrentAnime} from './interface';

export interface TabProps{
    onReturn: (content:IContent) => void,
    tabContent:Array<IContent>
}

export interface TabItemProps{
    onClick: (content:IContent) => void,
    content:IContent
}

export interface TitleEntryProps{
    onClick: (content:string) => void,
}

export interface LoginProps{
    onLogin: (token:string) => void,
}

export interface AnimeCurrentListItemProps{
    currentAnime: ICurrentAnime,
    onclick : (ICurrentAnime:ICurrentAnime) => void
}