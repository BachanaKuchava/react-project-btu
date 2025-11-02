import React from "react";
import './lowerBlocksStyles.css';
import leftBigImage from '../../assets/leftBigImage.png';
import call from '../../assets/Call.png';
import message from '../../assets/Message.png';
import location from '../../assets/Location.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkdin from '../../assets/linkdin.png';
import mail from '../../assets/mail.png';


function LowerBlocks() {
    return (
        <>
            <div className="lowerBlocks">
                <div className="lowerBlocks-container">
                    <div className="leftBlock">
                        <div className="blocks-aboutUs">
                            <h2>ჩვენ შესახებ</h2>
                            <p>რისამე შინაარსი, ჩამოყალიბებული წერილობით; დაწერილი
                                ან დაბეჭდილი თხზულება, ოფიციალური დოკუმენტი და სხვა.
                                ეს ნივთი დღეს ჩვენი ყოველდღიური ცხოვრების განუყოფელი ნაწილია.
                                სარკეს ადამიანები იყენებენ როგორც პირადი დანიშნულებით
                                ჰიგიენური პროცედურების დროს, ღია ტექსტი წარმოადგენს
                                შემავალ მონაცემებს კრიპტოგრაფიული ალგორითმებისათვის,
                                რომელთა გამოყენების შემდგომ მიიღება...</p>
                        </div>
                        <div className="leftBlock-underBlocks">

                            <img src={leftBigImage} alt="leftBigImage" className="leftBigImage" />
                            <div className="leftBlock-underBlocks-socials">
                                <div className="contact-div">
                                    <h2>კონტაქტი</h2>
                                    <div className="contact-div-p">
                                    <p><img src={location}/>იოსებიძის 49</p>
                                    <p><img src={message}/>Palitra@gmail.com</p>
                                    <p><img src={call}/>+995555-764-980</p>
                                    </div>
                                   
                                </div>
                                <div className="social-div">
                                    <img src={facebook} alt=""  />
                                    <img src={instagram} alt="" />
                                    <img src={linkdin} alt="" />
                                    <img src={mail} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="rightBlock">


                    </div>

                </div>

            </div>

        </>
    );
} export default LowerBlocks;