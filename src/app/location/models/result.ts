import { LocationDto } from "./location"

export interface Result {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string
    }
    results: LocationDto[]
}