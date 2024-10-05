import nodemailer, { Transporter } from 'nodemailer'
import { Participant, Settings } from '../types'
import { shuffleArray } from './utils'
require('dotenv').config()

class Santa<P extends string> {

    transporter: Transporter = nodemailer.createTransport({
        service : process.env.MAIL_SERVICE,
        auth : {
            user : process.env.MAIL_ADDRESS,
            pass : process.env.MAIL_APPLICATION_PASSWORD
        }
    })
    participants: Participant<P>[]
    title: string
    text: (name: Omit<string, P>) => string

    constructor(settings: Settings<P>) {
        this.participants = shuffleArray(Object.values(settings.participants))
        this.title = settings.title
        this.text = settings.text
    }

    show() {
        this.participants.forEach(participant => {
          console.log(participant.name + ' -> ' + participant.receiver)
        })
    }

    notifyParticipant(participant: Participant<P>) {
        let options = {
            from : process.env.MAIL_ADDRESS,
            to : participant.email,
            subject : this.title,
            html : this.text(participant.receiver || '')
        }

        this.transporter.sendMail(options, (err, result) => {
            if(err) {
                console.log('Failed to : ' + options.to)
                console.log(err)
            } else {
                console.log('Success to : ' + options.to)
            }
        })
    }

    notifyAll() {
        for(let participant of this.participants) {
            this.notifyParticipant(participant);
        }
    }

    assign() {
      const assign = (i: number, index: number): boolean => {
        const participant = this.participants[i]
        const possibleReceivers = this.participants.filter((p) => {
          return p.name !== participant.name && !participant.avoid?.includes(p.name) && p.receiver !== participant.name && !this.participants.some((p2) => p2.receiver === p.name)
        })

        if (possibleReceivers.length === 0 || index >= possibleReceivers.length) {
          return false
        }

        const receiver = possibleReceivers[index]
        participant.receiver = receiver.name
        
        if (i === this.participants.length - 1) {
          return true
        }

        if (assign(i + 1, 0)) {
          return true
        }

        delete participant.receiver
        return assign(i, index + 1)
      }

      if (!assign(0, 0)) {
        throw new Error("It's not possible to assign a receiver to each participant without breaking the rules (avoid)")
      }

    }
}

export default Santa