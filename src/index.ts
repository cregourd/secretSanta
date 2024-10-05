import Santa from './Santa'
import setting, { ParticipantNames } from '../settings'

const santa = new Santa<ParticipantNames>(setting)
santa.assign()
santa.show()
//santa.notifyAll()

