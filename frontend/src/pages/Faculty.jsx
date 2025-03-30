import Footer from "../components/footer/Footer";
import Nav1 from "../components/Navbar/Navbar";

const staffMembers1 = [
    { name: "Prof. (Dr.) Usha Tandon", designation: "Senior Professor (Dean, Faculty of Law)", image: "/Usha-T.png" },
];

const staffMembers2 = [
    { name: "Prof. (Dr.) Alka Chawla", designation: "(Professor-In-Charge)", image: "/clcpc.jpg" },
    { name: "Prof. (Dr.) Gunjan Gupta", designation: "", image: "/gunjan_k.png" },
    { name: "Prof. (Dr.) Raman Mittal", designation: "", image: "/rmn.png" },
    { name: "Prof. (Dr.) Vandana", designation: "", image: "download.png" },
];

const staffMembers3 = [
    { name: "Dr. Ajay Kumar Sharma", designation: "", image: "/Ajay_k-1.png" },
    { name: "Mr. Akash Deep Nagal", designation: "", image: "/akdp_n-1.png" },
    { name: "Dr. Anita Yadav", designation: "", image: "/Anita_Y-1.png" },
    { name: "Ms. Anumeha Mishra", designation: "", image: "Anumeha_m.png" },
    { name: "Ms. Apanjot Kaur", designation: "", image: "/apanjot_s.png" },
    { name: "Dr. Arti Aneja", designation: "", image: "/arti_A.png" },
    { name: "Ms. Atma Yadav", designation: "", image: "/atma_Y.png" },
    { name: "Dr. Cholaraja Mudimannan", designation: "", image: "Chola_m-1.png" },
    { name: "Dr. Dinesh Dayma", designation: "", image: "Mr-Dinesh-Dayma-1.jpg" },
    { name: "Mr. Ezekial Jarain", designation: "", image: "ezkl.png" },
    { name: "Dr. Harleen Kaur", designation: "", image: "harleen.png" },
    { name: "Mr. Jai Prakash Meena", designation: "", image: "JPM.png" },
    { name: "Dr. Kshitij Kumar Singh", designation: "", image: "Kshitij_k.png" },
    { name: "Ms. Mehpara", designation: "", image: "Mehp_H-1.png" },
    { name: "Dr. Namrata Gupta", designation: "", image: "Nam_G-1.png" },
    { name: "Dr. Narender Kumar Bishnoi", designation: "", image: "naren_b.png" },
    { name: "Dr. Narender Nagarwal", designation: "", image: "Narender-N.png" },
    { name: "Dr. Neelam Tyagi", designation: "", image: "neelam_t-1.png" },
    { name: "Dr. Neetu", designation: "", image: "Neetu_k.png" },
    { name: "Ms. Neha Aneja", designation: "Assistant Professor(Senior Scale)", image: "Neha_A.png" },
    { name: "Mr. Pankaj Choudhary", designation: "", image: "pnkj_C.png" },
    { name: "Dr. Rahul Kumar", designation: "", image: "rahul_k.png" },
    { name: "Dr. Rohit Moonka", designation: "", image: "Rohit_m-1.png" },
    { name: "Ms. Rubina Grewal Nagra", designation: "", image: "Rubina-G-1.png" },
    { name: "Dr. Ruchita Chakraborty", designation: "", image: "ruchita_c.png" },
    { name: "Dr. Seema Singh", designation: "", image: "seema_s.png" },
    { name: "Dr. Shikha Sharma", designation: "", image: "shikh_s.png" },
    { name: "Dr. Silky Mukherjee", designation: "", image: "Silky_m-1.png" },
    { name: "Ms. Sneh Yadav", designation: "", image: "sneh-1.jpg" },
    { name: "Dr. Stanzin Chostak", designation: "", image: "Stan_C-1.png" },
    { name: "Dr. Sujith Koonan", designation: "", image: "S-K.png" },
    { name: "Dr. Suman Yadav", designation: "", image: "suman_y.png" },
    { name: "Dr. Vandana Mahalwar", designation: "", image: "vmh.png" },
    { name: "Mr. Vijoy V. Panicker", designation: "", image: "vijoy_p.png" },
    { name: "Mr. Vikas Kumar", designation: "", image: "vk.png" },
    
];



const Faculty = () => {
    return (
        <>
            <Nav1 />
            <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold !text-[#4e2e83] text-center mt-4 ">Faculty Members</h1>

                <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-lg mt-2">
                    <h1 className="text-3xl font-bold !text-[#4e2e83] text-center mt-4 pb-4 mb-8">
                    Senior Professors
                    </h1>

                    <div className="grid grid-cols-1 place-items-center">
                        {staffMembers1.map((staff, index) => (
                            <div key={index} className="p-6 border rounded-lg bg-gray-50 shadow-md text-center w-64 h-80 flex flex-col items-center justify-between mb-5 pt-2">
                                <img src={staff.image} alt={staff.name} className="w-32 h-40 rounded-lg object-position" />
                                <div className="flex-grow flex flex-col justify-center">
                                    <h2 className="text-lg font-semibold text-gray-700 mt-1">{staff.name}</h2>
                                    <p className="text-gray-600">{staff.designation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-lg mt-5">
                    <h1 className="text-3xl font-bold !text-[#4e2e83] text-center mt-4 pb-4 mb-8">
                    Professors
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                        {staffMembers2.map((staff, index) => (
                            <div key={index} className="p-6 border rounded-lg bg-gray-50 shadow-md text-center w-64 h-80 flex flex-col items-center justify-between mb-5 pt-2">
                                <img src={staff.image} alt={staff.name} className="w-32 h-40 rounded-lg object-position" />
                                <div className="flex-grow flex flex-col justify-center">
                                    <h2 className="text-lg font-semibold text-gray-700 mt-1">{staff.name}</h2>
                                    <p className="text-gray-600">{staff.designation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-lg mt-5">
                    <h1 className="text-3xl font-bold !text-[#4e2e83] text-center mt-4 pb-4 mb-8">
                    Assistant Professors
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                        {staffMembers3.map((staff, index) => (
                            <div key={index} className="p-6 border rounded-lg bg-gray-50 shadow-md text-center w-64 h-80 flex flex-col items-center justify-between mb-5 pt-2">
                                <img src={staff.image} alt={staff.name} className="w-32 h-40 rounded-lg object-position" />
                                <div className="flex-grow flex flex-col justify-center">
                                    <h2 className="text-lg font-semibold text-gray-700 mt-1">{staff.name}</h2>
                                    <p className="text-gray-600">{staff.designation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            

            <Footer />
        </>

    );
};

export default Faculty;
