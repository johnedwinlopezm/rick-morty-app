import { CharacterDto } from "./character"

export interface Result {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string|null
    }
    results: CharacterDto[]
}