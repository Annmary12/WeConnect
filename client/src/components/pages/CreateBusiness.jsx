import React from 'react';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import CreateBusinessForm from './forms/CreateBusinessForm.jsx';

const CreateBusiness = () => (
    <div>
      <div className="nav-business">
        <Navigation />
        <div className="container">
          <div className="row register-business">
            <div className="col s10 offset-s1">
              <h3 className="center-align">Register Business</h3>
            </div>
          </div>
        </div>
        <CreateBusinessForm/>
        <Footer />
     </div>
    </div>
);

export default CreateBusiness;
// import React from 'react';
// import Navigation from './Navigation.jsx';
// import Footer from './Footer.jsx';
// import CreateBusinessForm from './forms/CreateBusinessForm.jsx';

// const CreateBusiness = () => (
//     <div className="">
//       <div className="nav-business">
//         <Navigation />
//         <div className="container">
//           <div className="row register-business">
//             <div className="col s10 offset-s1">
//               <h3 className="center-align">Register Business</h3>
//             </div>
//           </div>
//         </div>
//         <CreateBusinessForm/>
//         </div>
//         <Footer />
//     </div>
// );

// export default CreateBusiness;
