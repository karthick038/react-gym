import React from 'react';
import '../Custom.css';

const cardData = [
    {
        id: "1",
        className: "card_affordable_member",
        icon: "https://cdn.lordicon.com/bsdkzyjd.json",
        title: "Budget-Friendly Plans",
        content: "Our budget-friendly plans are designed to fit your financial goals. Enjoy access to all gym facilities without breaking the bank. Start your fitness journey today!",
    },
    {
        id: "2",
        className: "card_build_strength",
        icon: "https://cdn.lordicon.com/cwnzgsrk.json",
        title: "Build Strength & Muscle",
        content: "With top-of-the-line equipment and personalized training plans, our gym is the perfect place to build strength and muscle. Join us to achieve your fitness goals.",
    },
    {
        id: "3",
        className: "Healthy Meal Plans",
        icon: "https://cdn.lordicon.com/sxfkrohm.json",
        title: "Personalized Fitness Regimens",
        content: "Explore our customizable healthy meal plans designed to suit various dietary needs and preferences. Whether you’re looking for weight loss, muscle gain, or maintenance, we have options tailored for you.",
    },
];

const Cardthree = () => {
    return (
        <div className='card-container'>
            {
                cardData.map((item) => (
                    <div className={`card ${item.className}`} key={item.id}>
                        <lord-icon 
                            src={item.icon} 
                            trigger={item.className.includes('hover') ? 'hover' : 'hover'}
                            style={{ width: '150px', height: '150px' }} 
                        />
                        <h5>{item.title}</h5>
                        <h6>{item.content}</h6>
                    </div>
                ))
            }
        </div>
    );
}

export default Cardthree;
