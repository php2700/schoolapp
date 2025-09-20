// import Navbar from "../../component/Navbar";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import ChevronRightIcon from '../assets/home/shriArrow.png';
import icon from '../assets/home/arrowicon.png'



// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Mandat() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Header />

            {/* Hero Section */}
            <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
                <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">Mandatory Public Disclosure</h1>
                    <div className="flex items-center text-lg mt-2">
                        <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
                        <a href="/" className="text-[#EDEDED] hover:text-white">
                            Home</a>

                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <a href="/about-us" className="text-[#EDEDED] hover:text-white">About</a>
                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <span className='text-[#F3D805]'>Mandatory Public Disclosure</span>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            {/* <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-600">
        Home <span className="mx-2">›</span>{" "}
        <span className="text-blue-700 font-medium">
          What makes us different from others
        </span>
      </div> */}

            {/* Content Section */}
            <div className=" bg-white container mx-auto py-12 px-4 md:flex">





                {/* Right Content */}
                <main className="w-full max-w-6xl mx-auto px-6 py-10 bg-white 
    rounded-lg shadow-lg font-['poppins'] text-left">

                    {/* A. General Information */}
                    <section className="mb-10">
                        <h2 className="text-lg font-bold text-[#25337C] mb-4 uppercase">A. General Information</h2>
                        <div className="divide-y divide-gray-300">
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">Name of the School</p>
                                <p>THE SHRI RAM UNIVERSAL SCHOOL</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">Affiliation No. (If Applicable)</p>
                                <p>1631479</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">School Code (If Applicable)</p>
                                <p>23692</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">Complete Address with Pin Code</p>
                                <p>BLOCK D, BEHIND MAIN MARKET, SARABHA NAGAR, LUDHIANA, PIN 141001</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">Principal Name & Qualification</p>
                                <p>DR. NAVNEET KAUR (PHD, M.COM, M.ED, HDSE)</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">School Email ID</p>
                                <p>INFO@TSUSLUDHIANA.COM</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">Contact Details (Landline/Mobile)</p>
                                <p>9878878825</p>
                            </div>
                        </div>
                    </section>

                    {/* B. Documents/Information */}
                    <section className="mb-10">
                        <h2 className="text-lg font-bold text-[#25337C] mb-4 uppercase">B. Documents/Information</h2>
                        <div className="divide-y divide-gray-300">
                            <div className="grid grid-cols-2 py-2">
                                <p>COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/ UPGRADATION/ EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                        </div>
                    </section>
                    <section className="mb-10">
                        <h2 className="text-lg font-bold text-[#25337C] mb-4 uppercase">c. DRESULT AND ACADEMICS:</h2>
                        <div className="divide-y divide-gray-300">
                            <div className="grid grid-cols-2 py-2">
                                <p>DOCUMENTS/INFORMATION</p>
                                <a href="#" className="text-blue-600 hover:underline"></a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>FEE STRUCTURE OF THE SCHOOL</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>ANNUAL ACADEMIC CALANDER</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABLILITY</p>
                                <a href="#" className="text-blue-600 hover:underline">
                                    NA (AS WE GOT AFFILIATION LAST YEAR)</a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/ UPGRADATION/ EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</p>
                                <a href="#" className="text-blue-600 hover:underline">CLICK HERE</a>
                            </div>
                        </div>
                    </section>
                    <section className="mb-10">
                        <h2 className="text-lg font-bold text-[#25337C] mb-4 uppercase">D: STAFF (TEACHING)</h2>
                        <div className="divide-y divide-gray-300">
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">INFORMATION</p>
                                <p>Details</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">PRINCIPAL</p>
                                <p>1</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">TOTAL NO. OF TEACHERS:</p>
                                <p></p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">o PGT</p>
                                <p>0</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">o TGT</p>
                                <p>13</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">o TGT</p>
                                <p>14</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">
                                    TEACHERS SECTION RATIO</p>
                                <p>1:0.5</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">
                                    DETAILS OF COUNSELLOR AND WELNESS TEACHER</p>
                                <p>13</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">
                                    DETAILS OF SPECIAL EDUCATOR</p>
                                <p>1</p>
                            </div>
                        </div>
                    </section>
                    <section className="mb-10">
                        <h2 className="text-lg font-bold text-[#25337C] mb-4 uppercase">E: SCHOOL INFRASTRUCTURE:</h2>
                        <div className="divide-y divide-gray-300">
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">INFORMATION</p>
                                <p>Details</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)L</p>
                                <p>
                                    8095 sq meter</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">NO. AND SIZE OF THE CLASS ROOMS</p>
                                <p>
                                    13 (20 Under Construction) rooms, 26 ft x 20 f</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS:</p>
                                <p></p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">SCIENCE COMPOSITE LAB</p>
                                <p>
                                    600 Sq ft</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">MATHT</p>
                                <p>520 Sq ft</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">
                                    COMPUTER</p>
                                <p>
                                    600 sq ft</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">
                                    MUSIC</p>
                                <p>
                                    600 sq ft</p>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <p className="font-medium">
                                    ACTIVITY LAB</p>
                                <p>
                                    520 sq ft</p>
                            </div>
                        </div>
                    </section>


                </main>


            </div>
            <diV className="mt-[200px]">
                <Footer />

            </diV>
        </div>
    );
}
