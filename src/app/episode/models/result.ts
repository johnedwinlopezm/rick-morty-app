import { EpisodeDto } from "./espisode"


export interface Result {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string
    }
    results: EpisodeDto[]
}