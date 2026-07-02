import type { ITrack } from "./tracks.data";

export interface IArtist {
    name: string;
    img: string;
    tracks: ITrack[];
}