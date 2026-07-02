 export class PagesConfig {
   static HOME = "/";
   static DISCOVER = "/discover";
   static RADIO = "/radio";
   static MADE_FOR_YOU = "/made-for-you";
   static RECENTLY_PLAYED = "/recently-played";
   static LIKED_SONGS = "/liked-songs";

   static PLAYLIST(id: string) {
     return `/playlist/${id}`;
   }

   static ALBUMS(id?: string) {
     return `/album` + (id ? `/${id}` : "");
   }

   static ARTISTS(id?: string) {
     return `/artist` + (id ? `/${id}` : "");
   }

   static PODCAST(id?: string) {
     return `/podcast` + (id ? `/${id}` : "");
   }
 }
