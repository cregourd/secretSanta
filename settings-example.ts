import { Settings } from "./types";

enum ParticipantNames {
    Participant1 = "Participant1",
    Participant2 = "Participant2",
    Participant3 = "Participant3",
    Participant4 = "Participant4",
    Participant5 = "Participant5",
    Participant6 = "Participant6",
    Participant7 = "Participant7",
    Participant8 = "Participant8",
    Participant9 = "Participant9",
    Participant10 = "Participant10",
    Participant11 = "Participant11",
    Participant12 = "Participant12"
}

const settings: Settings<ParticipantNames> = {
    title: "🎅 Title",
    text: (name: string) => `You have to offer a gift to <b>${name}</b>`,
    participants: {
        [ParticipantNames.Participant1]: {
            name: ParticipantNames.Participant1,
            email: "participant1@email.com",
            avoid: [ParticipantNames.Participant2, ParticipantNames.Participant3]
        },
        [ParticipantNames.Participant2]: {
            name: ParticipantNames.Participant2,
            email: "participant2@email.com",
            avoid: [ParticipantNames.Participant1, ParticipantNames.Participant4]
        },
        [ParticipantNames.Participant3]: {
            name: ParticipantNames.Participant3,
            email: "participant3@email.com",
            avoid: [ParticipantNames.Participant1, ParticipantNames.Participant5]
        },
        [ParticipantNames.Participant4]: {
            name: ParticipantNames.Participant4,
            email: "participant4@email.com",
            avoid: [ParticipantNames.Participant2, ParticipantNames.Participant6]
        },
        [ParticipantNames.Participant5]: {
            name: ParticipantNames.Participant5,
            email: "participant5@email.com",
            avoid: [ParticipantNames.Participant3, ParticipantNames.Participant7]
        },
        [ParticipantNames.Participant6]: {
            name: ParticipantNames.Participant6,
            email: "participant6@email.com",
            avoid: [ParticipantNames.Participant4, ParticipantNames.Participant8]
        },
        [ParticipantNames.Participant7]: {
            name: ParticipantNames.Participant7,
            email: "participant7@email.com",
            avoid: [ParticipantNames.Participant5, ParticipantNames.Participant9]
        },
        [ParticipantNames.Participant8]: {
            name: ParticipantNames.Participant8,
            email: "participant8@email.com",
            avoid: [ParticipantNames.Participant6, ParticipantNames.Participant10]
        },
        [ParticipantNames.Participant9]: {
            name: ParticipantNames.Participant9,
            email: "participant9@email.com",
            avoid: [ParticipantNames.Participant7, ParticipantNames.Participant11]
        },
        [ParticipantNames.Participant10]: {
            name: ParticipantNames.Participant10,
            email: "participant10@email.com",
            avoid: [ParticipantNames.Participant8, ParticipantNames.Participant12]
        },
        [ParticipantNames.Participant11]: {
            name: ParticipantNames.Participant11,
            email: "participant11@email.com",
            avoid: [ParticipantNames.Participant9, ParticipantNames.Participant1]
        },
        [ParticipantNames.Participant12]: {
            name: ParticipantNames.Participant12,
            email: "participant12@email.com",
            avoid: [ParticipantNames.Participant10, ParticipantNames.Participant3]
        }
    }
}
export default settings;