// import Navbar from "../../component/Navbar";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import ChevronRightIcon from '../assets/home/shriArrow.png';
import icon from '../assets/home/arrowicon.png'



// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function AdmissionForm() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Header />

            {/* Hero Section */}
            <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
                <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">Application Form</h1>
                    <div className="flex items-center text-lg mt-2">
                        <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
                        <a href="/" className="text-[#EDEDED] hover:text-white">
                            Home</a>

                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <a href="/about-us" className="text-[#EDEDED] hover:text-white">Admission</a>
                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <span className='text-[#F3D805]'>Application Form</span>
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
                {/* Left Sidebar */}
                <aside className="w-full md:w-1/4 pr-8 mb-8 md:mb-0">
                    <div className=" font-['poppins'] bg-white p-10  shadow  rounded-tl-lg rounded-br-lg
                   [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]">
                        <h3 className=" font-['poppins'] text-xl font-semibold text-[#25337C] mb-4">Admission</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md  hover:bg-gray-200  text-[#737373]">
                                    Admission Process
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3 text-[#737373]"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md bg-[#25337C] text-white">
                                    Application Form
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3 text-[#737373]"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
                                    Schedule a Visit
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3 text-[#737373]"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
                                    e-Brochure
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md  hover:bg-gray-200 text-[#737373]">
                                    FAQs
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3"
                                    />
                                </a>
                            </li>



                        </ul>
                    </div>
                </aside>

                {/* Right Content */}
               <main className="w-full max-w-6xl mx-auto px-4 py-8 bg-white text-center
    rounded-tl-lg rounded-br-lg
    [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]">

  <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">
    Application for Admission
  </h2>

  <form className="space-y-8 text-left">

    {/* Student Information */}
    <section>
      <h3 className="text-lg font-semibold text-[#25337C] mb-4">Student Information</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <input type="text" placeholder="Name of Child" className="border p-2 rounded" />
        <select className="border p-2 rounded">
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input type="date" className="border p-2 rounded" placeholder="Date of Birth" />
        <input type="text" placeholder="Nationality" className="border p-2 rounded" />
        <input type="text" placeholder="Class to which admission" className="border p-2 rounded" />
        <input type="text" placeholder="School and Class last attended" className="border p-2 rounded" />
        <input type="text" placeholder="Affiliation of last school attended" className="border p-2 rounded col-span-2" />
        <input type="text" placeholder="Result of Previous Class Grade / Percentage" className="border p-2 rounded" />
      </div>
    </section>

    {/* Mother Information */}
    <section>
      <h3 className="text-lg font-semibold text-[#25337C] mb-4">Mother Information</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <input type="text" placeholder="Mother Name" className="border p-2 rounded" />
        <input type="date" placeholder="Date of Birth" className="border p-2 rounded" />
        <input type="text" placeholder="Education" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded col-span-2" />
        <input type="text" placeholder="Mobile" className="border p-2 rounded" />
      </div>
      {/* <div className="grid md:grid-cols-2 gap-4 mt-4">
        <input type="text" placeholder="Occupation" className="border p-2 rounded" />
        <input type="text" placeholder="Designation" className="border p-2 rounded" />
        <input type="text" placeholder="Name of Organisation" className="border p-2 rounded" />
        <input type="text" placeholder="Office Address" className="border p-2 rounded" />
      </div> */}
    </section>
    <section>
         <h3 className="text-lg font-semibold text-[#25337C] mb-4">Please specify the following: (If applicable)</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
        <input type="text" placeholder="Occupation" className="border p-2 rounded" />
        <input type="text" placeholder="Designation" className="border p-2 rounded" />
        <input type="text" placeholder="Name of Organisation" className="border p-2 rounded" />
        <input type="text" placeholder="Office Address" className="border p-2 rounded" />
      </div>
        

    </section>
    

    {/* Father Information */}
    <section>
      <h3 className="text-lg font-semibold text-[#25337C] mb-4">Father Information</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <input type="text" placeholder="Father Name" className="border p-2 rounded" />
        <input type="date" placeholder="Date of Birth" className="border p-2 rounded" />
        <input type="text" placeholder="Education" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded col-span-2" />
        <input type="text" placeholder="Mobile" className="border p-2 rounded" />
      </div>

      {/* <div className="grid md:grid-cols-2 gap-4 mt-4">
        <input type="text" placeholder="Occupation" className="border p-2 rounded" />
        <input type="text" placeholder="Designation" className="border p-2 rounded" />
        <input type="text" placeholder="Name of Organisation" className="border p-2 rounded" />
        <input type="text" placeholder="Office Address" className="border p-2 rounded" />
      </div>
      <textarea placeholder="Residential Address" className="border p-2 rounded w-full mt-4"></textarea>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <input type="text" placeholder="Residential Phone Number" className="border p-2 rounded" />
        <input type="text" placeholder="Marital Status" className="border p-2 rounded" />
      </div> */}
    </section>
        <section>
         <h3 className="text-lg font-semibold text-[#25337C] mb-4">Please specify the following: (If applicable)</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
        <input type="text" placeholder="Occupation" className="border p-2 rounded" />
        <input type="text" placeholder="Designation" className="border p-2 rounded" />
        <input type="text" placeholder="Name of Organisation" className="border p-2 rounded" />
        <input type="text" placeholder="Office Address" className="border p-2 rounded" />
      </div>
        <textarea placeholder="Residential Address" className="border p-2 rounded w-full mt-4"></textarea>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <input type="text" placeholder="Residential Phone Number" className="border p-2 rounded" />
        <input type="text" placeholder="Marital Status" className="border p-2 rounded" />
      </div> 
        

    </section>

    {/* Siblings */}
    <section>
      <h3 className="text-lg font-semibold text-[#25337C] mb-4">Details of sisters and brothers in chronological order including the applicant</h3>
      <div className="grid md:grid-cols-5 gap-4">
        <input type="text" placeholder="S.No" className="border p-2 rounded" />
        <input type="text" placeholder="Name of the Child" className="border p-2 rounded" />
        <input type="text" placeholder="Class" className="border p-2 rounded" />
        <input type="text" placeholder="Name of the School" className="border p-2 rounded col-span-2" />
      </div>
      <input type="text" placeholder="Mother Tongue of the Child" className="border p-2 rounded w-full mt-4" />
    </section>

    {/* Upload */}
    <section>
      <h3 className="text-lg font-semibold text-[#25337C] mb-4">Upload Photograph</h3>
      <div className="border-2 border-dashed border-gray-400 p-6 text-center rounded cursor-pointer">
        <p>Click or drag file to this area to upload</p>
        <input type="file" className="hidden" />
      </div>
    </section>

    {/* Notes */}
    <section className="text-sm text-gray-700 space-y-2">
      <p className="font-semibold">Please note the following:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Attach municipal birth certificate of Municipal with Certificate.</li>
        <li>Photocopy of latest schooling certificate/Report card (in case required).</li>
        <li>Photocopy of caste certificate (if applicable).</li>
        <li>Photocopy of residence proof (any one of the following documents: Ration card/Passport/Lease deed/Utility bill/Aadhar card/Driving License/Election card).</li>
      </ul>
    </section>

    {/* Undertaking */}
    <section>
      <h3 className="text-lg font-semibold text-[#25337C] mb-4">Undertaking</h3>
   
 <input
  type="text"
  placeholder="Name: Mother/Father"
  className="border p-2 rounded w-full"
/>

<div className="flex items-start mt-4">
  <input
    type="checkbox"
    id="declaration"
    className="mt-1 mr-2"
  />
  <label htmlFor="declaration" className="text-sm text-gray-700">
    I hereby declare that information given above by me is based on facts and authentic records.
  </label>
</div>

    </section>

    <div className="text-center">
      <button type="submit" className="bg-[#25337C] text-white px-6 py-2 rounded-lg hover:bg-[#1a275e]">
        Submit
      </button>
    </div>

  </form>
</main>

            </div>
            <diV className="mt-[200px]">
                <Footer />

            </diV>
        </div>
    );
}
