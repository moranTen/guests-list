import { status } from './../../redux/types';

export const fetchGuestsList = () => {
    return new Promise((resolve, reject) => {
        let guests: any = [{
            id: '1',
            userName: 'David Cohen',
            userEmail: 'david@cohen.com',
            InvitationStatus: status.Processed
        },
        {
            id: '2',
            userName: 'Roni Natan',
            userEmail: 'roni@natan.com',
            InvitationStatus: status.Processed
        },
        {
            id: '3',
            userName: 'Rami Golan',
            userEmail: 'rami@golan.com',
            InvitationStatus: status.Processed
        },
        {
            id: '4',
            userName: 'Dani Danon',
            userEmail: 'dani@danon.com',
            InvitationStatus: status.Processed
        },
        {
            id: '5',
            userName: 'Lani Dagon',
            userEmail: 'lani@dagon.com',
            InvitationStatus: status.Processed
        },
        {
            id: '6',
            userName: 'Mor Ten',
            userEmail: 'mor@ten.com',
            InvitationStatus: status.Processed
        },
        ];
        setTimeout(() => {
            resolve(guests);
        }, 2000);
    });
};

export const changeGuestInvitationStatus = (id: string, isAccept: boolean) => {
    return new Promise((resolve, reject) => {
        resolve({ id, isAccept });
    });
}