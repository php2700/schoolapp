import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "../assets/home/Bannerleder.png";
import homevector from "../assets/home/homevector.png";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import icon from "../assets/home/arrowicon.png";

export default function AdmissionForm() {

const [admisssionBannerData, setAdmissionBannerData] = useState();
  const [error, setError] = useState();

  const getAdmissionBannerData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/application-form-banner`)
      .then((res) => {
        setAdmissionBannerData(res?.data);
        // console.log(res.data)
      })
      .catch((error) => {
        setError(
          error?.response?.data?.message ||
            error?.message ||
            "something went wrong"
        );
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "something went wrong"
        );
      });
  };

  useEffect(() => {
    getAdmissionBannerData();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    nationality: "",
    classForAdmission: "",
    schoolAndClassLastAttended: "",
    lastSchoolAffiliation: "",
    previousClassResult: "",
    motherName: "",
    motherDob: "",
    motherEducation: "",
    motherEmail: "",
    motherMobile: "",
    motherOccupation: "",
    motherDesignation: "",
    motherOrganization: "",
    motherOfficeAddress: "",
    fatherName: "",
    fatherDob: "",
    fatherEducation: "",
    fatherEmail: "",
    fatherMobile: "",
    fatherOccupation: "",
    fatherDesignation: "",
    fatherOrganization: "",
    fatherOfficeAddress: "",
    residentialAddress: "",
    phoneNumber: "",
    maritalStatus: "",
    siblings: [],
    motherTongue: "",
    photo: null,
    underTaking: "",
    isAccept: false,
  });

  const [siblingsInput, setSiblingsInput] = useState({
    serialNo: "",
    name: "",
    class: "",
    school: "", // Changed to match backend schema
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSiblingChange = (e) => {
    const { name, value } = e.target;
    setSiblingsInput({ ...siblingsInput, [name]: value });
  };

  const addSibling = () => {
    if (siblingsInput.name && siblingsInput.class && siblingsInput.school) {
      setFormData({
        ...formData,
        siblings: [...formData.siblings, { ...siblingsInput }],
      });
      setSiblingsInput({ serialNo: "", name: "", class: "", school: "" });
      toast.success("Sibling added!");
    } else {
      toast.error("Please fill all sibling fields.");
    }
  };

  const removeSibling = (index) => {
    setFormData({
      ...formData,
      siblings: formData.siblings.filter((_, i) => i !== index),
    });
    toast.success("Sibling removed!");
  };

  const clearPhoto = () => {
    setFormData({ ...formData, photo: null });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.isAccept) {
      toast.error("You must accept the declaration to submit the form.");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "siblings") {
        data.append(key, JSON.stringify(formData[key]));
      } else if (key === "photo" && formData[key]) {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      await axios.post(
        `${import.meta.env.VITE_APP_URL}api/user/admission-enquiry`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setFormData({
        name: "",
        gender: "",
        dob: "",
        nationality: "",
        classForAdmission: "",
        schoolAndClassLastAttended: "",
        lastSchoolAffiliation: "",
        previousClassResult: "",
        motherName: "",
        motherDob: "",
        motherEducation: "",
        motherEmail: "",
        motherMobile: "",
        motherOccupation: "",
        motherDesignation: "",
        motherOrganization: "",
        motherOfficeAddress: "",
        fatherName: "",
        fatherDob: "",
        fatherEducation: "",
        fatherEmail: "",
        fatherMobile: "",
        fatherOccupation: "",
        fatherDesignation: "",
        fatherOrganization: "",
        fatherOfficeAddress: "",
        residentialAddress: "",
        phoneNumber: "",
        maritalStatus: "",
        siblings: [],
        motherTongue: "",
        photo: null,
        underTaking: "",
        isAccept: false,
      });
      setSiblingsInput({ serialNo: "", name: "", class: "", school: "" });
      if (fileInputRef.current) fileInputRef.current.value = "";
      toast.success("Form submitted successfully!");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section
        className="relative h-120 bg-cover bg-center rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
        style={{ backgroundImage: `url(${import.meta.env.VITE_APP_URL}${admisssionBannerData?.banner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
            Application Form
          </h1>
          <div className="flex items-center text-lg mt-2">
            <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
            <a href="/" className="text-[#EDEDED] hover:text-white">
              Home
            </a>
            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />
            <a href="/about-us" className="text-[#EDEDED] hover:text-white">
              Admission
            </a>
            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />
            <span className="text-[#F3D805]">Application Form</span>
          </div>
        </div>
      </section>

      <div className="bg-white container mx-auto py-12 px-4 md:flex">
        <aside className="w-full md:w-1/4 pr-8 mb-8 md:mb-0">
          <div className="font-['poppins'] bg-white p-10 shadow rounded-tl-lg rounded-br-lg [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]">
            <h3 className="font-['poppins'] text-xl font-semibold text-[#25337C] mb-4">
              Admission
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  Admission Process
                  <img
                    src={ChevronRightIcon}
                    alt="chevron right"
                    className="h-6 w-3 text-[#737373]"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md bg-[#25337C] text-white"
                >
                  Application Form
                  <img
                    src={ChevronRightIcon}
                    alt="chevron right"
                    className="h-6 w-3 text-[#737373]"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  Schedule a Visit
                  <img
                    src={ChevronRightIcon}
                    alt="chevron right"
                    className="h-6 w-3 text-[#737373]"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  e-Brochure
                  <img
                    src={ChevronRightIcon}
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  FAQs
                  <img
                    src={ChevronRightIcon}
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <main className="w-full max-w-6xl mx-auto px-4 py-8 bg-white text-center rounded-tl-lg rounded-br-lg [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]">
          <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">
            Application for Admission
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            <section>
              <h3 className="text-lg font-semibold text-[#25337C] mb-4">
                Student Information
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name of Child"
                  className="border p-2 rounded"
                />
                <select
                  required
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border p-2 rounded"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  required
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
                <input
                  required
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  placeholder="Nationality"
                  className="border p-2 rounded"
                />
                <input
                  required
                  type="text"
                  name="classForAdmission"
                  value={formData.classForAdmission}
                  onChange={handleChange}
                  placeholder="Class to which admission"
                  className="border p-2 rounded"
                />
                <input
                  name="schoolAndClassLastAttended"
                  value={formData.schoolAndClassLastAttended}
                  onChange={handleChange}
                  placeholder="School and Class last attended"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="lastSchoolAffiliation"
                  value={formData.lastSchoolAffiliation}
                  onChange={handleChange}
                  placeholder="Affiliation of last school attended"
                  className="border p-2 rounded col-span-2"
                />
                <input
                  type="text"
                  name="previousClassResult"
                  value={formData.previousClassResult}
                  onChange={handleChange}
                  placeholder="Result of Previous Class Grade / Percentage"
                  className="border p-2 rounded"
                />
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#25337C] mb-4">
                Mother Information
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  placeholder="Mother Name"
                  className="border p-2 rounded"
                />
                <input
                  type="date"
                  name="motherDob"
                  value={formData.motherDob}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
                <input
                  name="motherEducation"
                  value={formData.motherEducation}
                  onChange={handleChange}
                  type="text"
                  placeholder="Education"
                  className="border p-2 rounded"
                />
                <input
                  type="email"
                  name="motherEmail"
                  value={formData.motherEmail}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border p-2 rounded col-span-2"
                />
                <input
                  name="motherMobile"
                  value={formData.motherMobile}
                  onChange={handleChange}
                  type="text"
                  placeholder="Mobile"
                  className="border p-2 rounded"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#25337C] mb-4 mt-4">
                Please specify the following: (If applicable)
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="motherOccupation"
                  value={formData.motherOccupation}
                  onChange={handleChange}
                  type="text"
                  placeholder="Occupation"
                  className="border p-2 rounded"
                />
                <input
                  name="motherDesignation"
                  value={formData.motherDesignation}
                  onChange={handleChange}
                  type="text"
                  placeholder="Designation"
                  className="border p-2 rounded"
                />
                <input
                  name="motherOrganization"
                  value={formData.motherOrganization}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name of Organisation"
                  className="border p-2 rounded"
                />
                <input
                  name="motherOfficeAddress"
                  value={formData.motherOfficeAddress}
                  onChange={handleChange}
                  type="text"
                  placeholder="Office Address"
                  className="border p-2 rounded"
                />
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#25337C] mb-4">
                Father Information
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Father Name"
                  className="border p-2 rounded"
                />
                <input
                  name="fatherDob"
                  value={formData.fatherDob}
                  onChange={handleChange}
                  type="date"
                  className="border p-2 rounded"
                />
                <input
                  name="fatherEducation"
                  value={formData.fatherEducation}
                  onChange={handleChange}
                  type="text"
                  placeholder="Education"
                  className="border p-2 rounded"
                />
                <input
                  name="fatherEmail"
                  value={formData.fatherEmail}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="border p-2 rounded col-span-2"
                />
                <input
                  name="fatherMobile"
                  value={formData.fatherMobile}
                  onChange={handleChange}
                  type="text"
                  placeholder="Mobile"
                  className="border p-2 rounded"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#25337C] mb-4 mt-4">
                Please specify the following: (If applicable)
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="fatherOccupation"
                  value={formData.fatherOccupation}
                  onChange={handleChange}
                  type="text"
                  placeholder="Occupation"
                  className="border p-2 rounded"
                />
                <input
                  name="fatherDesignation"
                  value={formData.fatherDesignation}
                  onChange={handleChange}
                  type="text"
                  placeholder="Designation"
                  className="border p-2 rounded"
                />
                <input
                  name="fatherOrganization"
                  value={formData.fatherOrganization}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name of Organisation"
                  className="border p-2 rounded"
                />
                <input
                  name="fatherOfficeAddress"
                  value={formData.fatherOfficeAddress}
                  onChange={handleChange}
                  type="text"
                  placeholder="Office Address"
                  className="border p-2 rounded"
                />
              </div>
              <textarea
                name="residentialAddress"
                value={formData.residentialAddress}
                onChange={handleChange}
                placeholder="Residential Address"
                className="border p-2 rounded w-full mt-4"
              ></textarea>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Residential Phone Number"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  placeholder="Marital Status"
                  className="border p-2 rounded"
                />
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#25337C] mb-4">
                Details of sisters and brothers in chronological order including
                the applicant
              </h3>
              <div className="grid md:grid-cols-5 gap-4">
                <input
                  type="text"
                  name="serialNo"
                  value={siblingsInput.serialNo}
                  onChange={handleSiblingChange}
                  placeholder="S.No"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="name"
                  value={siblingsInput.name}
                  onChange={handleSiblingChange}
                  placeholder="Name of the Child"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="class"
                  value={siblingsInput.class}
                  onChange={handleSiblingChange}
                  placeholder="Class"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="school"
                  value={siblingsInput.school}
                  onChange={handleSiblingChange}
                  placeholder="Name of the School"
                  className="border p-2 rounded col-span-2"
                />
              </div>
              <button
                type="button"
                onClick={addSibling}
                className="mt-4 bg-[#25337C] text-white px-4 py-2 rounded-lg hover:bg-[#1a275e]"
              >
                Add Sibling
              </button>
              <div className="mt-4">
                {formData.siblings.map((sibling, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <span>{`${sibling.serialNo}. ${sibling.name} - ${sibling.class}, ${sibling.school}`}</span>
                    <button
                      type="button"
                      onClick={() => removeSibling(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="text"
                name="motherTongue"
                value={formData.motherTongue}
                onChange={handleChange}
                placeholder="Mother Tongue of the Child"
                className="border p-2 rounded w-full mt-4"
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#25337C] mb-4">
                Upload Photograph
              </h3>
              <div
                className="border-2 border-dashed border-gray-400 p-6 text-center rounded cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <p>Click or drag file to this area to upload</p>
                <input
                  type="file"
                  name="photo"
                  onChange={handleChange}
                  className="hidden"
                  accept="image/*"
                  ref={fileInputRef}
                />
              </div>
              {formData.photo && (
                <div className="mt-2 flex items-center">
                  <p className="text-sm">Selected: {formData.photo.name}</p>
                </div>
              )}
            </section>

            <section className="text-sm text-gray-700 space-y-2">
              <p className="font-semibold">Please note the following:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Attach municipal birth certificate of Municipal with
                  Certificate.
                </li>
                <li>
                  Photocopy of latest schooling certificate/Report card (in case
                  required).
                </li>
                <li>Photocopy of caste certificate (if applicable).</li>
                <li>
                  Photocopy of residence proof (any one of the following
                  documents: Ration card/Passport/Lease deed/Utility bill/Aadhar
                  card/Driving License/Election card).
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#25337C] mb-4">
                Undertaking
              </h3>
              <input
                type="text"
                name="underTaking"
                value={formData.underTaking}
                onChange={handleChange}
                placeholder="Name: Mother/Father"
                className="border p-2 rounded w-full"
              />
              <div className="flex items-start mt-4">
                <input
                  type="checkbox"
                  id="declaration"
                  name="isAccept"
                  checked={formData.isAccept}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                />
                <label htmlFor="declaration" className="text-sm text-gray-700">
                  I hereby declare that information given above by me is based
                  on facts and authentic records.
                </label>
              </div>
            </section>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#25337C] text-white px-6 py-2 rounded-lg hover:bg-[#1a275e]"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
      <div className="mt-[200px]">
        <Footer />
      </div>
    </div>
  );
}
