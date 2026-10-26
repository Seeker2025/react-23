import { useState } from 'react';
import { ImCross } from "react-icons/im";

import small01 from '../../assets/small01.png';
import small02 from '../../assets/small02.png';
import small03 from '../../assets/small03.png';

import big01 from '../../assets/big01.png';
import big02 from '../../assets/big02.png';
import big03 from '../../assets/big03.png';


export const Modalka03 = () => {

    const [stateImg, makeStateImg ] = useState(null);

    const arr = [
        { large: big01, prev: small01 },
        { large: big02, prev: small02 },
        { large: big03, prev: small03 },
        ];

    return (
        <>
            <h2>Modalka03</h2>

            {/* <Component/> */}

            <List list ={arr} toClick={makeStateImg}/>

            {
                stateImg
                &&
                <ModalWin imgBig = {stateImg} toClose={makeStateImg}/>
            }
        </>
    );
}


const List = ( { list, toClick } ) =>{

    

    return (  
        <div>
            {
        list.map(itm => {
            return (
            <ItemInList key = { itm.large } url = { itm } toClick = {toClick}/>
            )
        })
            }
        </div>
    )
};

const ItemInList = ({ url, toClick }) => {
    return (
            <div onClick={() => toClick( url )}>
                <img src ={ url.prev } alt = "forest"/>
            </div>
            )
};

const ModalWin = ({ imgBig, toClose }) => {
    return (
        <div>
                <div onClick = {() => toClose( null )}>
                    <ImCross />
                </div>
             <img src ={ imgBig.large } alt = "forest"/>
        </div>
    )
}