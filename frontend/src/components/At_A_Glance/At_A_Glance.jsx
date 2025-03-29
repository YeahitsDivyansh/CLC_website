import 'bootstrap/dist/css/bootstrap.min.css';
import './At_A_Glance.css'

const CLCSection = () => {
  return (
    <div>
    <section className="container mt-5">
      <h3 style={{ marginLeft: "3.99rem" }} className="text-primary fw-bold">AT A GLANCE</h3>
      <hr style={{ width: "72.5rem", marginLeft: "3.99rem" }} />
      <div className="row g-4 mt-2 mx-5">
        {/* First Card */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div 
            className="card p-5 shadow-sm" 
            style={{ 
              minHeight: '300px', 
              border: "1px solid black",  
              borderRadius: "1rem", 
              width: "35.5rem", 
              height: "35rem", 
              overflow: "auto" 
            }}
          >
            <img src="/At_a_glance_logo.png" alt="CLC Logo" className="mx-auto d-block" style={{ width: '80px' }} />
            <h4 className="text-center text-primary mt-3">About the Campus Law Centre</h4>
            <p className="text-center text-wrap" style={{ wordBreak: "break-word" }}>
              <strong>Campus Law Centre</strong> fondly known as <strong>CLC</strong> is one of the premier legal education centers of the country. It was established in 1922, under the aegis of University of Delhi in its foundation year. In 1975, the day classes of LL.B. of the Faculty of Law were rechristened as Campus Law Centre. Known for its great achievements, has the distinction of being one of the oldest and most prestigious institutions, which continues to preserve its 100 years of rich heritage and legacy of yielding profound lawyers, academicians, Union Cabinet Ministers, Chief Justices, and judges.
            </p>
          </div>
        </div>
        
        {/* Second Card */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div 
            className="card p-5 shadow-sm" 
            style={{ 
              minHeight: '300px', 
              border: "1px solid black", 
              borderRadius: "1rem", 
              width: "35.5rem", 
              height: "35rem", 
              overflow: "auto" 
            }}
          >
            <img src="/At_a_glance_books.jpeg" alt="Books Icon" className="mx-auto d-block" style={{ width: '80px' }} />
            <h4 className="text-center text-primary mt-3">Study at Campus Law Centre</h4>
            <p className="text-center text-wrap" style={{ wordBreak: "break-word" }}>
              Campus Law Centre offers a 3 Year Bachelors of Law Degree to foster academic excellence in legal fraternity. The Bachelor of Laws (LL.B.) Degree Course was initially treated as a two-year part-time Course and the teaching was conducted in the morning with ten teachers. With the enactment of the Advocates Act, 1961, the Certificate of Proficiency (Law) Course was abolished.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div
  className="mt-5 statistics tex d-flex flex-wrap justify-content-center"
  style={{
    marginLeft: "7rem",
    marginRight: "5.5rem"
  }}
>
  <div className='statistics_img1'>
    <img
    
      style={{ maxWidth: "22rem", maxHeight: "22rem", padding: "1rem" }}
      src="/Gender_ratio.png"
      alt="Gender_ratio"
    />
    <p style={{color:"#4e459a"}}  className='text-center mt-3'>Gender_ratio</p>
  </div>
  <div className='statistics_img2'>
    <img
    
      style={{ maxWidth: "26rem", maxHeight: "26rem", padding: "0.8rem" }}
      src="/Graduation_Stream.png"
      alt="Graduation_Stream"
    />
    <p style={{color:"#4e459a"}} className='text-center mt-3'>Graduation_Stream</p>
  </div>
  <div className='statistics_img3'>
    <img
    
      style={{ maxWidth: "28rem", maxHeight: "28rem" }}
      src="/Post_graduate_stream.png"
      alt="Post_graduate_stream"
    />
    <p style={{color:"#4e459a"}}  className='text-center mt-3'>Post_graduate_stream</p>
  </div>
</div>


    </div>
  );
};

export default CLCSection;
