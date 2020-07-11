import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
//css
import './guestModal.scss';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchGuests, fetchFailedGuests, fetchSuccessGuests } from '../../redux/actions';
//service
import { fetchGuestsList } from '../guestList/guestList.service'
import { status } from '../../redux/types';

const GuestModal = (props: { isHideModal?: boolean, selectedGuest?: any, onClose: any, onBtnClicked: any, children: any }) => {

    const btnClicked = (isAccept: boolean) => {
        props.onBtnClicked && props.onBtnClicked(isAccept);
    }

    return (
        <>
            <div className={classNames(['modal-background', {
                'hide': props.isHideModal
            }])}></div>
            <div className={classNames(['modal', {
                'hide': props.isHideModal
            }])}>
                <div className={'modal-wrapper'}>
                    <div className={'modal-header'}>
                        <span className={'close'} onClick={props.onClose}>X</span>
                        <h2>Manage Invitation</h2>
                    </div>
                    {props.children}
                    <div className={'modal-footer'}>
                        <button className={'btn modalBtn leftBtn'} onClick={() => btnClicked(true)}>Accept</button>
                        <button className={'btn modalBtn'} onClick={() => btnClicked(false)}>Decline</button>
                    </div>
                </div>

            </div>
        </>
    )
};

export { GuestModal }