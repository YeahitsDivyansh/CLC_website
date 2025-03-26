import 'bootstrap/dist/css/bootstrap.min.css';

export default function WelcomeSection() {
  return (
    <div className="container mb-5 py-4">
      {/* Heading Section */}
      <div className="text-center mb-4">
        <h2 className="text-primary">Welcome to Campus Law Centre, Faculty of Law, University of Delhi</h2>
      </div>

      {/* Dr. Alka Chawla Section */}
      <div className="position-relative mt-4 d-flex justify-content-center">
        <div className="card shadow-sm border mx-auto" style={{ maxWidth: '600px', borderRadius: '10px', borderColor: '#dee2e6' }}>
          <div className="card-body pt-5">
            <div className="d-flex flex-column align-items-center">
              <h5 className="text-primary fw-bold">Prof. (Dr.) Alka Chawla, Professor-In-Charge</h5>
              <p className="text-muted text-center">
                Welcome to <strong>Campus Law Centre, Faculty of Law</strong>, Ours is a motivated community committed to intellectual inquiry and I am pleased to introduce you to it. I invite you to check out more of our website and other portals to discover us.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/path/to/image.jpg"
          alt="Prof. (Dr.) Alka Chawla"
          className="rounded-circle position-absolute bg-white"
          style={{ width: '100px', height: '100px', objectFit: 'cover', border: '3px solid #eee', top: '0', transform: 'translateY(-50%)' }}
        />
      </div>
    </div>
  );
}
