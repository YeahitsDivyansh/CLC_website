import Footer from "../components/footer/Footer";
import Nav1 from "../components/Navbar/Navbar";

const staffMembers1 = [
    { name: "Mr. Sanjay", designation: "(Library-in-charge)", image: "/Sanjay-3.jpg" },
    { name: "Mr. Brijesh Chand Gupta", designation: "(Semi Professional Assistant)", image: "/Birjesh-Chand-Gupta.jpg" },
    { name: "Ms. Rekha Sharma", designation: "(Library Assistant)", image: "/Rekha-Sharma.jpg" },
    { name: "Mr. Hari Kishan", designation: "(Group D Staff)", image: "Hari-Kishan.jpg" },
    { name: "Mr. Parvesh Kumar", designation: "(Group D Staff)", image: "/download.png" },
];

const staffMembers2 = [
    { name: "Mr. Anil Kumar", designation: "(Junior Assistant)", image: "/Anil-Kumar.jpg" },
    { name: "Mr. Shyam Sunder", designation: "(Ex-Library Attendant)", image: "/Shyam-Sunder.jpg" },
    { name: "Mr. Jitesh Kumar", designation: "(Library Attendant)", image: "/Jitesh-Kumar.jpg" },
    { name: "Ms. Priyanka Sharma", designation: "(Library Attendant)", image: "Priyanka-Sharma.jpg" },
    { name: "Mr. Ankit Jain", designation: "(Group D Staff)", image: "Ankit-Jain.jpg" },
    { name: "Mr. Ram Avatar Solanki", designation: "(Group D Staff)", image: "Ram-Avtar-Solanki.jpg" },
];



const LibraryStaff = () => {
    return (
        <>
            <Nav1 />
            <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold !text-[#4e2e83] text-center mt-4 ">CLC Library Staff</h1>

                <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-lg mt-2">
                    <h1 className="text-3xl font-bold !text-[#4e2e83] text-center mt-4 pb-4 mb-8">
                    Permanent
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
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
                    Contractual
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
            </div>

            <Footer />
        </>

    );
};

export default LibraryStaff;
