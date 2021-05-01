import React, { useState } from "react";

const Card = ({place,deleteCard}) => {
    const shortInfo = place.info.slice(0, 200);
    const longInfo = place.info;
    const [info, setInfo] = useState(shortInfo);
    const [buttonText, setButtonText] = useState("...Show more")
    const [isHidden, setIsHidden] = useState(true);
    const toggle = () => {
        if (isHidden) {
            setButtonText("Show less");
            setInfo(longInfo);
        }
        else {
            setButtonText("...Show more");
            setInfo(shortInfo);
        }
        setIsHidden(!isHidden);
    }


    return (
        <>
            <div className="card" style={{ background: `url(${place.image}) no-repeat center center/cover` }}>
                <div className="card__content">
                    <div className="card__tittle">
                        <h2 className="card__heading">{place.name}</h2>
                        <h3 className="card__subheading">{`$${place.price}`}</h3>
                    </div>
                    <p className="card__para">{`${info}`}<button onClick={toggle} link="#" className="showbtn">{buttonText}</button></p>
                    <button className="btn" onClick={()=>deleteCard(place.id)}>Not interested</button>
                </div>
            </div>

        </>
    )
}

export default Card;