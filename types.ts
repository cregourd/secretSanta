
export type Participant<N extends string> = {
    name: N,
    email: string,
    avoid?: Omit<string, N>[],
    receiver?: Omit<string, N>
}


export type Settings<P extends string> = {
    title: string,
    text: (name: string) => string,
    participants: {
        [key in P]: Participant<key>
    }
}