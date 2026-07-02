 export class PagesConfig  {
    static HOME = '/';
    static DISCOVER = '/discover';
    static RADIO = '/radio';


    static  PLAYLIST(id: string) {
        return `/playlist/${id}`;
    }

    static  ALBUM(id: string) {
        return `/album/${id}`;
    }

    static  ARTIST(id: string) {
        return `/artist/${id}`;
    }
 }
