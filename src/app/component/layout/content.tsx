import AnimeRegistEntry from "../animeRegist/animeRegistEntry";
import AnimeCurrentEntry from "../animeCurrent/animeCurrentEntry";
import AnimePastEntry from "../animePast/animePastEntry";
import AnimeWatchedEntry from "../animeWatched/animeWatchedEntry";

const Content = ({ content }: { content: string }) => {
    switch(content){
        case 'regist':
            return (
                <AnimeRegistEntry></AnimeRegistEntry>
            );
        case 'current':
            return (
                <AnimeCurrentEntry></AnimeCurrentEntry>
            );
        case 'past':
            return (
                <AnimePastEntry></AnimePastEntry>
            );
        case 'watched':
            return (
                <AnimeWatchedEntry></AnimeWatchedEntry>
            );
    }
  }
  export default Content;
  