import React, { useEffect, useState } from 'react';
//css
import './guestList.scss';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchGuests, fetchFailedGuests, fetchSuccessGuests, changeSuccessGuests } from '../../redux/actions';
import { getGuests, getIsLoading } from '../../redux/selectors';
//service
import { fetchGuestsList, changeGuestInvitationStatus } from './guestList.service'
//components
import { GuestModal } from '../guestModal';
import { Spinner } from '../spinner';

const GuestList = () => {

    const [guestModal, setGuestModal] = useState(true);

    const [guestSelected, setGuestSelected] = useState<any>(null);

    const data: any = useSelector((state: any) => getGuests(state));

    const isLoading: any = useSelector((state: any) => getIsLoading(state));

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchGuests());

        fetchGuestsList().then((result: any) => {
            console.log(result);
            dispatch(fetchSuccessGuests(result));
        }, error => {
            dispatch(fetchFailedGuests());
            console.log(error);
        });

    }, []);

    const manageClicked = (selected: any) => {
        setGuestModal(false);
        setGuestSelected(selected);
    }

    const changeGuestStatus = (isAccept: boolean) => {
        if (guestSelected !== null) {
            changeGuestInvitationStatus(guestSelected.id, isAccept).then((result: any) => {
                dispatch(changeSuccessGuests(result.id, result.isAccept));
                setGuestModal(true)
            }, error => {});
        }
    }

    return (
        <div className={'wareper'}>
            <header>
                <h1 className={'h1_c'}> Guest List</h1>
            </header>
            <div className={'main'}>
                <h2>Invitees</h2>
                {
                    isLoading ?
                        <Spinner />
                        : <ul className={'guestsUl'}>
                            {
                                data.map((d: any, i: number) => (
                                    <li key={i}>
                                        <span>{d.userName}</span>
                                        <label>{d.InvitationStatus}</label>
                                        <button className={'btn manageBtn'} onClick={() => manageClicked(d)}>Manage</button>
                                    </li>
                                ))
                            }
                        </ul>
                }

                <GuestModal isHideModal={guestModal} onClose={() => { setGuestModal(true) }}
                    onBtnClicked={changeGuestStatus} >
                    <div className={'modal-content'}>
                        <p>Name: {guestSelected != null ? guestSelected.userName : ""}</p>
                        <p>Email: {guestSelected != null ? guestSelected.userEmail : ""}</p>
                        <p>Invitation Status: {guestSelected != null ? guestSelected.InvitationStatus : ""}</p>
                        <p className={'remark'}>Please click accept or decline for {guestSelected != null ? guestSelected.userName : ""} order.</p>
                    </div>
                </GuestModal>
            </div>
        </div>
    );
};

export { GuestList }