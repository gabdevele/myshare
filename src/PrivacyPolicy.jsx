import star from './assets/star.svg'
import logo from './assets/logo.svg'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const PrivacyPolicy = () => {
    return (
    <div className="flex flex-col items-center max-w-7xl w-full justify-center">
        <div className="w-full flex justify-center mb-4 md:mb-8 mt-4">
            <Link to="/"><img src={logo} alt="logo" className="w-44 h-auto" /></Link>
        </div>
        <div className="w-full md:w-1/3 flex justify-center text-left px-2 items-center my-4">
            <h1 className='text-3xl flex justify-center w-full items-center bold-font'>
            <img src={star} alt="star" className="w-8 h-auto mr-3" />
            Privacy Policy
            </h1>
        </div>
        <div className="w-full md:max-w-2xl flex justify-center text-left px-6 py-2 md:p-2 items-center my-8">
            <p className="text-white text-opacity-70 text-lg">
            <strong className="bold-font">Introduction</strong>
            <br/><br/>
            MyShare is an app that allows you to have your links at your fingertips and above all it allows you to see who is around you!
            <br/><br/>
            Your privacy is very important to us. This privacy policy explains how we collect, use, share and protect your personal information when you use our app.
            <br/><br/>
            <strong className="bold-font">About us</strong>
            <br/>
            MeYou S.r.l. based in Verona, we are responsible for the collection and processing of your personal data.
            <br/><br/>
            <strong className="bold-font">Who is this app for?</strong>
            <br/>
            Our app is intended for users aged 14 and over. If you are under 14, do not use our app.
            <br/><br/>
            <strong className="bold-font">What data do we collect?</strong>
            <br/>
            We only collect data necessary to provide you with our services. This may include:
            <ul className='list-disc list-inside'>
                <li>Basic information: Username (not your full name), date of birth (only the year), email address (if required for registration).</li>
                <li>App usage information: How you use the app, which features you use and when.</li>
                <li>Device information: Device type, operating system and some technical information.</li>
            </ul>
            <br/><br/>
            <strong className="bold-font">Why do we collect your data?</strong>
            <br/>
            We use your data to:
            <ul className='list-disc list-inside'>
                <li>Provide our services to you: To allow you to use all the features of the app.</li>
                <li>Improve the app: To understand how you use the app and make it better.</li>
                <li>Ensure security: To protect your privacy and the app from threats.</li>
            </ul>
            <br/><br/>
            <strong className="bold-font">Who do we share your data with?</strong>
            <br/>
            We do not share your personal data with third parties unless it is necessary to provide our services (for example, with our technical suppliers) or if required by law.
            <br/><br/>
            <strong className="bold-font">How do we protect your data?</strong>
            <br/>
            We take technical and organizational security measures to protect your personal data from unauthorized access, alteration, disclosure or destruction.
            <br/><br/>
            <strong className="bold-font">How long do we keep your data?</strong>
            <br/>
            We only keep your personal data for as long as necessary to provide our services and to comply with our legal obligations.
            <br/><br/>
            <strong className="bold-font">Your rights</strong>
            <br/>
            You have the right to:
            <ul className='list-disc list-inside'>
                <li>Access your personal data.</li>
                <li>Request correction of any errors.</li>
                <li>Request erasure of your data.</li>
                <li>Restrict the processing of your data.</li>
                <li>Object to the processing of your data in certain cases.</li>
            </ul>
            <br/><br/>
            <strong className="bold-font">How to exercise your rights?</strong>
            <br/>
            To exercise your rights, you can contact us at team@myshare.lol
            <br/><br/>
            <strong className="bold-font">Changes to this privacy policy</strong>
            <br/>
            We may update this privacy policy from time to time. We will notify you of any material changes.
            <br/><br/>
            <strong className="bold-font">Contact us</strong>
            <br/>
            If you have any questions or concerns about our privacy policy, you can contact us at team@myshare.lol.
            <br/><br/>
            <strong className="bold-font">Important:</strong>
            <br/>
            Parental consent: If you are under 16, you must ask your parents or guardians for permission before using our app and providing any personal information.
            <br/>
            Online safety: Remember to never share sensitive personal information such as passwords or full addresses.
            <br/>
            Privacy of others: Always respect the privacy of other users.
            <br/><br/>
            This privacy policy has been written in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
        </div>
        
        <Footer />
    </div>
    )
}

export default PrivacyPolicy;