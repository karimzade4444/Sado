import type { IArtist } from "./artist.data";

export interface ITrack {
    name: string;
    file: string;
    artist: IArtist;
    duration: number;
    
}