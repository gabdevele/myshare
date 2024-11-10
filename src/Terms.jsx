import star from './assets/star.svg'
import logo from './assets/logo.svg'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const Terms = () => {
    return (
    <div className="flex flex-col items-center max-w-7xl w-full justify-center">
        <div className="w-full flex justify-center mb-4 md:mb-8 mt-4">
            <Link to="/"><img src={logo} alt="logo" className="w-44 h-auto" /></Link>
        </div>
        <div className="w-full md:w-1/3 flex justify-center text-left px-2 items-center my-4">
            <h1 className='text-3xl flex justify-center w-full items-center bold-font'>
            <img src={star} alt="star" className="w-8 h-auto mr-3" />
            Terms of Service
            </h1>
        </div>
        <div className="w-full md:max-w-2xl flex justify-center text-left px-6 py-2 md:p-2 items-center my-8">
            <p className="text-white text-opacity-70 text-lg">
            <strong className="bold-font">Thank you for using MyShare</strong>
            <br/><br/>
            Welcome to MyShare! These Terms of Service (‘Terms’) govern your use of the MyShare mobile application (‘App’). By accessing or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.
            <br/><br/>
            <strong className="bold-font">Your License to Use MyShare</strong>
            <br/>
            MyShare grants you a non-exclusive, revocable, limited, non-transferable licence to use the App for your own purposes, in accordance with these Terms.
            <br/><br/>
            <strong className="bold-font">Downloads and Software Updates</strong>
            <br/>
            We may periodically release updates to the App. These updates may be necessary for you to continue using the App.
            <br/><br/>
            <strong className="bold-font">Age and Legal Capacity</strong>
            <br/>
            To use MyShare, you must be at least 14 years old and legally capable of entering into a binding contract. If you are a minor, you must obtain the consent of your parent or guardian before using the App.
            <br/><br/>
            <strong className="bold-font">Your Responsibility for Your Account</strong>
            <br/>
            You are responsible for the security of your credentials to access the App. Do not share your credentials with third parties.
            <br/><br/>
            <strong className="bold-font">Your Use of MyShare</strong>
            <br/>
            <ul className='list-disc list-inside'>
                <li>Compliant Use: You must use the App in compliance with all applicable laws.</li>
                <li>Inappropriate content: You may not use the App to share content that is illegal, offensive, or infringes the rights of third parties.</li>
                <li>Interference: You may not interfere with the operation of the App or MyShare's systems.</li>
            </ul>
            <br/><br/>
            <strong className="bold-font">Your Interactions with Other Users</strong>
            <br/>
            <ul className='list-disc list-inside'>
                <li>Appropriate Behavior: You must interact with other users in a respectful and civil manner.</li>
                <li>Responsibility: You are responsible for your interactions with other users.</li>
            </ul>
            <br/><br/>
            <strong className="bold-font">Your Complaints</strong>
            <br/>
            If you have any problems or complaints about the App or other users, please contact us using the methods outlined in the App.
            <br/><br/>
            <strong className="bold-font">Termination</strong>
            <br/>
            We may terminate your access to the App at any time, without notice, if you breach these Terms.
            <br/><br/>
            <strong className="bold-font">Disclaimer of Warranties and Limitation of Liability</strong>
            <br/>
            The App is provided ‘as is’, without warranties of any kind. We are not liable for any damages or losses arising from the use of the App.
            <br/><br/>
            <strong className="bold-font">Subscriptions</strong>
            <br/>
            If you choose to subscribe for a premium subscription, you will be charged subscription fees in accordance with the terms set out in the App.
            <br/><br/>
            <strong className="bold-font">Automatic Renewal and Cancellation</strong>
            <br/>
            Your subscription will automatically renew unless you cancel it before the renewal date. You can cancel your subscription from the App settings.
            <br/><br/>
            <strong className="bold-font">Paying For Your Subscription</strong>
            <br/>
            You agree to pay the subscription fees using the payment method you chose when you subscribed.
            <br/><br/>
            <strong className="bold-font">Refunds</strong>
            <br/>
            Refund policies are indicated in the App.
            <br/><br/>
            <strong className="bold-font">Changes to Subscriptions and Features</strong>
            <br/>
            We may change the prices of subscriptions or features of the App at any time.
            </p>
        </div>
        
        <Footer />
    </div>
    )
}

export default Terms;