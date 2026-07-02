import type { ITrack } from "./track.types";

export interface IArtist {
  name: string;
  img: string;
  tracks: ITrack[];
}
