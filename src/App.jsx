import { useState } from 'react'
import logo from './assets/logo.svg'
import mockup from './assets/iphone.png'
import { useEffect } from 'react'
import star from './assets/star.svg'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const Arrow = () => {
  return (
    <div className="hidden md:flex justify-center mt-12 items-center h-1/3">
      <svg className="w-full h-full" viewBox="0 0 232 223" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M207.477 86.1068C209.452 87.0973 211.856 86.2994 212.846 84.3248C213.837 82.3501 213.039 79.9464 211.064 78.9559L207.477 86.1068ZM163.116 145.081L166.578 147.084L163.116 145.081ZM163.116 76.0807L161.209 72.5643L163.116 76.0807ZM114.081 78.687C117.805 83.0222 119.511 87.1907 119.916 91.2607C120.327 95.3818 119.436 99.7435 117.402 104.472C113.256 114.108 104.839 124.275 95.3382 135.594C86.0298 146.684 75.8192 158.738 69.0892 171.613C62.3007 184.6 58.8316 198.83 63.4858 214.162L71.1409 211.838C67.2952 199.17 69.9889 187.161 76.179 175.319C82.4275 163.365 92.0113 152.002 101.466 140.737C110.728 129.702 120.043 118.576 124.751 107.633C127.143 102.072 128.46 96.3231 127.877 90.4681C127.289 84.562 124.801 78.8892 120.15 73.4743L114.081 78.687ZM38.6007 104.427C35.3383 93.5947 36.5928 84.5682 40.4538 77.5966C44.346 70.5685 51.0887 65.2702 59.397 62.355C76.0387 56.5156 98.4245 60.4595 114.081 78.687L120.15 73.4743C102.307 52.7017 76.4429 47.8956 56.7482 54.8062C46.8884 58.2659 38.4414 64.7176 33.4553 73.7208C28.4379 82.7806 27.1255 94.0665 30.9406 106.734L38.6007 104.427ZM159.654 143.077C153.773 153.242 144.473 158.798 133.294 160.726C122.003 162.673 108.825 160.89 95.751 156.212C69.3955 146.781 45.1785 126.268 38.6007 104.427L30.9406 106.734C38.5177 131.893 65.3426 153.827 93.0556 163.744C107.016 168.74 121.629 170.856 134.653 168.61C147.788 166.345 159.328 159.616 166.578 147.084L159.654 143.077ZM209.271 82.5314C211.064 78.9559 211.063 78.9555 211.062 78.955C211.062 78.9547 211.061 78.9542 211.06 78.9537C211.058 78.9527 211.055 78.9515 211.052 78.9501C211.047 78.9472 211.039 78.9434 211.03 78.9387C211.011 78.9294 210.985 78.9165 210.952 78.9002C210.885 78.8675 210.791 78.8212 210.669 78.7624C210.426 78.6448 210.075 78.4772 209.626 78.2692C208.729 77.8534 207.44 77.2751 205.848 76.6114C202.67 75.2871 198.246 73.6075 193.281 72.2038C188.334 70.8051 182.734 69.6465 177.233 69.4318C171.765 69.2185 166.077 69.9249 161.209 72.5643L165.022 79.597C168.154 77.8989 172.236 77.2429 176.921 77.4258C181.574 77.6073 186.513 78.6036 191.105 79.902C195.679 81.1954 199.793 82.755 202.77 83.9957C204.255 84.6144 205.447 85.15 206.262 85.5275C206.669 85.7162 206.981 85.8651 207.187 85.9648C207.29 86.0147 207.367 86.0523 207.416 86.0763C207.44 86.0884 207.458 86.097 207.468 86.1021C207.473 86.1047 207.476 86.1064 207.478 86.1072C207.479 86.1076 207.479 86.1077 207.479 86.1077C207.479 86.1076 207.479 86.1074 207.479 86.1074C207.478 86.1071 207.477 86.1068 209.271 82.5314ZM161.209 72.5643C157.726 74.4527 155.128 76.8431 153.42 79.7499C151.715 82.6509 151.054 85.7985 151.02 88.9578C150.955 95.054 153.253 101.771 155.536 108.023C157.923 114.562 160.404 120.853 161.545 126.996C162.667 133.038 162.371 138.38 159.654 143.077L166.578 147.084C170.607 140.119 170.724 132.61 169.41 125.535C168.115 118.561 165.31 111.469 163.05 105.279C160.685 98.8012 158.973 93.4444 159.02 89.0434C159.042 86.954 159.468 85.2472 160.317 83.8031C161.162 82.3649 162.583 80.9197 165.022 79.597L161.209 72.5643Z" fill="white"/>
        <path d="M88.3134 188L66.3134 218" stroke="white" stroke-width="8" stroke-linecap="round"/>
        <path d="M66.0856 218.367L44.0876 188.365" stroke="white" stroke-width="8" stroke-linecap="round"/>
      </svg>
    </div>
  )
} 
function App() {
  const [timeLeft, setTimeLeft] = useState({
    months: '--',
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--',
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-01T00:00:00');
    const timer = setInterval(() => {
      const currentDate = new Date();
      const difference = targetDate - currentDate;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ months, days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const generateCalendarUrl = () => {
    const targetDate = new Date('2025-08-01T00:00:00');
    const year = targetDate.getFullYear();
    const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
    const day = targetDate.getDate().toString().padStart(2, '0');
    const calendarUrl = `https://calendar.google.com/calendar/r/eventedit?dates=${year}${month}${day}T000000Z/${year}${month}${day}T235959Z&text=MyShare%20Release&location=Online&details=Save%20the%20date%20for%20the%20release%20of%20Myshare`;
    return calendarUrl;
  }

  return (
    <div className="flex flex-col items-center max-w-7xl w-full justify-center">
      <div className="w-full flex justify-center mb-4 md:mb-8">
        <Link to="/"><img src={logo} alt="logo" className="w-44 h-auto" /></Link>
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full justify-center text-white max-w-4xl relative">
        <div className="w-full md:w-1/3 flex flex-col text-center px-2 items-center md:items-end mt-4 absolute md:static bottom-0">
          <Arrow />
          <div className="relative mt-2 md:w-full">
            <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-2xl p-4 text-left min-w-64">
              <h3 className="text-xl mb-2 bold-font">App Release</h3>
              <div className="flex justify-center items-center space-x-1 mb-2">
                <div className="flex flex-col items-center">
                  <div className="bg-white bg-opacity-40 rounded-md px-1 pb-2 pt-1 w-12 flex items-center justify-center">
                    <span className="digits text-3xl">{timeLeft['months'].toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-sm mt-1">months</span>
                </div>
                <div className="flex flex-col items-center mb-4">
                  <span className="digits text-3xl">:</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white bg-opacity-40 rounded-md px-1 pb-2 pt-1 w-12 flex items-center justify-center">
                    <span className="digits text-3xl">{timeLeft['days'].toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-sm mt-1">days</span>
                </div>
                <div className="flex flex-col items-center mb-4">
                  <span className="digits text-3xl">:</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white bg-opacity-40 rounded-md px-1 pb-2 pt-1 w-12 flex items-center justify-center">
                    <span className="digits text-3xl">{timeLeft['hours'].toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-sm mt-1">hours</span>
                </div>
                <div className="flex flex-col items-center mb-4">
                  <span className="digits text-3xl">:</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white bg-opacity-40 rounded-md px-1 pb-2 pt-1 w-12 flex items-center justify-center">
                    <span className="digits text-3xl">{timeLeft['minutes'].toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-sm mt-1">minutes</span>
                </div>
              </div>
              <button className="w-full bg-white black-font uppercase px-2 py-1 rounded-md text-sm bold-font"
              onClick={() => window.open(generateCalendarUrl(), '_blank')}
              >Save the date</button>
            </div>
          </div>
        </div>
      <div className="w-full md:w-1/3 flex justify-center px-2">
        <img src={mockup} alt="mockup" className="w-56 md:w-72 h-auto" />
      </div>
      <div className="w-full md:w-1/3 flex justify-center text-left px-2 items-center my-4 bold-font">
        <h1 className="hidden md:block text-6xl">Tap,<br/>Share,<br/>Repeat...</h1>
        <h1 className='md:hidden text-2xl flex justify-center w-full items-center '>
          <img src={star} alt="star" className="w-8 h-auto mr-2" />
          Tap, Share, Repeat...
          </h1>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default App