import Footer from "../components/footer/Footer";
import Nav1 from "../components/Navbar/Navbar";

const staffMembers = [
    { name: "Mr. Pradeep Kumar Kundra", designation: "Section Officer", image: "/Pradeep_K.jpg" },
    { name: "Mr. Pravesh", designation: "Sr. Assistant", image: "/parvesh.jpeg" },
    { name: "Mr. Vishwanath Manjhi", designation: "Sr. Assistant", image: "/V_Manjhi.jpg" },
    { name: "Mr. Ankit Kapoor", designation: "Assistant", image: "Ankit_K.jpg" },
    { name: "Mr. Mahesh Kumar", designation: "Assistant", image: "/mhsh.jpg" },
    { name: "Mr. Brijesh Kumar Singh", designation: "Office Attendant", image: "Brijesh_K.jpg" },
];

const AdminStaff = () => {
    return (
        <>
            <Nav1 />
            <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
                <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-lg mt-5">
                    <h1 className="text-3xl font-bold !text-[#4e2e83] text-center mt-4 pb-4 mb-8">
                        Administrative Staff
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                        {staffMembers.map((staff, index) => (
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

export default AdminStaff;
