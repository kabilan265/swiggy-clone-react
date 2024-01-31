import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { CDN_URL } from '../utils/Constants';
import { useEffect, useState } from 'react';
export default Caurosel = (props) => {
    const { resData } = { ...props };
    const { imageGridCards } = { ...resData };
    const [translateWidth, setTranslateWidth] = useState(0);
    const [cauroselWidth, setCauroselWidth] = useState(0);
    let scrollWidth, clientWidth, width;
    useEffect(() => {
        scrollWidth = document.querySelector('.caurosel').scrollWidth;
        clientWidth = document.querySelector('.caurosel').clientWidth;
        width = -(scrollWidth - clientWidth);
        setCauroselWidth(width)
    }, [])
    useEffect(() => {
        document.body.querySelector('.caurosel').style.transform = `translateX(${translateWidth}px)`;
    }, [translateWidth])
    const moveLeft = () => {
        if ((translateWidth + 450) < 0) {
            setTranslateWidth(translateWidth + 450);
        }
        else {
            setTranslateWidth(0);
        }
    }
    const moveRight = () => {
        if ((translateWidth - 450) > cauroselWidth) {
            setTranslateWidth(translateWidth - 450);
        }
        else {
            setTranslateWidth(cauroselWidth);
        }
        /* document.body.querySelector('.caurosel').style.transform = `translateX(${translateWidth}px)`; */
    }
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-2xl mb-7'>What's on your mind?</h1>
                <div>
                    <button className={`mr-7`}>
                        <FontAwesomeIcon onClick={moveLeft} icon={faChevronCircleLeft} fontSize='20px' color={!translateWidth ? '#ddd' : 'black'}></FontAwesomeIcon>
                    </button>
                    <button >
                        <FontAwesomeIcon onClick={moveRight} icon={faChevronCircleRight} fontSize='20px' color={Math.abs(translateWidth) === Math.abs(cauroselWidth) ? '#ddd' : 'black'} >
                        </FontAwesomeIcon >
                    </button>
                </div>
            </div>
            <div className={'overflow-x-hidden'}>
                <ul className={'grid grid-flow-col caurosel transition-transform duration-700'}  >
                    {
                        imageGridCards.info.map((card) => {
                            return <li className='w-[135px] h-[135px]' key={card.id}>
                                <img src={CDN_URL + card.imageId} className='object-cover w-full h-full'></img>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}