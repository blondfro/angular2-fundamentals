import {Injectable} from '@angular/core';
import {ISession} from '../shared/event.model';

@Injectable()

export class VoterService {

    addVoter(session: ISession, voterName: string) {
        session.voters.push(voterName);
    }

    deleteVoter(session: ISession, voterName: string) {
        session.voters = session.voters.filter((voter => voter !== voterName));
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }
}

/**
 * Created by me on 3/30/2018.
 */
