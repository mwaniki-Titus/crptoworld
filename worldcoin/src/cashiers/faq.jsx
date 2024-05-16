import React, { useState } from 'react';
import './FAQ.scss';

const FAQ = () => {
    const faqs = [
        {
            question: "What has changed?",
            answer: "We have found it prudent to carry out iris scanning using mobile phone cameras."
        },
        {
            question: "Who will scan your iris?",
            answer: "Any smartphone owner can scan their iris after creating an account at https://apptap.store and earn $179.24 which will be available for withdrawal in 65 days. After you scan your iris, this photo is immediately deleted from our servers and you will be issued with a world ID."
        },
        {
            question: "Do you need to earn faster?",
            answer: "There are two ways to do this: Become a p2p agent or Become an orb agent/merchant."
        },
        {
            question: "Who is a p2p agent?",
            answer: "This is someone responsible for helping users deposit money to become orb agents. The same p2p agents will help agents withdraw their commissions. A p2p agent will deposit money to worldcoin organization’s USDT trc20 wallet. Thereafter, the funds deposited will be termed as float(similar to M- PESA module of operation) Once a user contacts you to make a deposit (to become an orb agent), you will credit his account with a fixed amount of $45, at this point, $45 will be deducted from your agent account and temporarily directed to escrow. You will need to ask the user to pay you an amount worth $45 + your nominated commission ( %). Once the deal is closed the user is elevated to become an orb agent. We have a moderator to solve all disputes emanating from trade transactions immediately. You need to apply to become an agent or contact customer service for more information."
        },
        {
            question: "Who is an orb agent?",
            answer: "This is a verified user that applies for this role on our platform. You will be required to deposit $45 to our system, after deposit is confirmed, you will be issued with a MERCHANT ID. This is an ID that makes you worldcoin agent. Anytime a user joins worldcoin through your MERCHANT ID and scans their iris, you will be awarded 10 worldcoins. When your referred user becomes an ORB Merchant/Agent, you will be awarded $10 which will be withdrawable every Friday with a minimum withdrawal limit of $50."
        },
        {
            question: "Can I earn without becoming an ORB Merchant/Agent?",
            answer: "Yes, after you join, you will be awarded $179.24 and thereafter a weekly grant of 10 WLD. You can share your referral link on all social platforms and make your friends join."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = index => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="faq-section">
            {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                    <div className="question" onClick={() => toggleFAQ(index)}>
                        {faq.question}
                    </div>
                    {activeIndex === index && (
                        <div className="answer">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
