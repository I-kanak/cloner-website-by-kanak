import React from "react";
import logo from './cloud_logo.png';
import banner from "./banner.png";
import author from "./author.png";
import meetup from "./meetup.jpeg"
import instagram from "./instagram.jpeg"
import LinkedIn from "./linkdin.png"


const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-[white] shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          
          <div>
         <a href="homepage_redirect"><img src={logo} alt="Logo" className="w-20 h-20" /></a> 
            {/* <a href="Home" className="text-2xl font-bold text-[#37B460] hover:text-[#37B460]">AWS.CC 

          </a> */}
          </div>
          
          <nav className="flex space-x-6 text-gray-600">
            <a href="Home" className="hover:text-blue-700 p-4">
              <u>
              Home 
              </u>
            </a>
            <a href="Events" className="hover:text-blue-700 p-4">
              <u>
              Events
              </u>
            </a>
            <a href="Know_Your_Domain" className="hover:text-blue-700 p-4">
              <u>
              Know Your Domain
              </u>
            </a>
            <a href="Newsletter" className="hover:text-blue-700 p-4">
              <u>
              Newsletter
              </u>
            </a>
            <a href="About_Us" className="hover:text-blue-700 p-4">
              <u>
              About Us
              </u>
            </a>
          </nav>
         <div className="flex space-x-4">
         <button className="text-black bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200">
          Sign in
          </button> 
          <button className="text-white bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-800">
          Get in Touch
          </button>
          </div>
        </div>
      </header>

    
      <main className="container mx-auto px-6 py-10">
        <section className="bg-white rounded-lg shadow-md p-8">
          
          <div className="relative ">
            <img
              src={banner} alt="banner" className="rounded-lg" />
          
            
            
          </div>

          {/* Article Content */}
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-gray-800">
              What is OPD Coverage? How to get Comprehensive Healthcare Benefits
              for your employees
            </h1>
          
            <div className="mt-6 text-gray-700 space-y-4">
              <p>
                In the realm of health insurance, OPD coverage refers to the
                provision of coverage for Outpatient Department (OPD) treatments
                and services. Unlike traditional health insurance policies that
                mainly cover hospitalisation expenses, OPD coverage extends to
                medical consultations, diagnostic tests, medications, and other
                healthcare services availed on an outpatient basis.
              </p>
              <p>
                This comprehensive blog aims to provide a detailed understanding
                of OPD coverage, including its definition, types, how to obtain it
                for your employees, the exclusions and inclusions in an OPD
                policy, and important policy details for corporates considering OPD
                coverage.
              </p>

              <h2 className="text-xl font-bold text-gray-800">
                What is OPD Coverage?
              </h2>
              <p>
                OPD coverage is a valuable healthcare benefit that ensures
                employees receive financial assistance for medical expenses
                incurred during outpatient visits. It encompasses a wide range of
                services, including doctor consultations, diagnostic tests,
                prescription medications, vaccinations, physiotherapy sessions,
                and preventive healthcare check-ups.
              </p>

              <h2 className="text-xl font-bold text-gray-800">
                Types of OPD Coverage:
              </h2>
              <p>
                <strong>a) Reimbursement-Based OPD Coverage:</strong> In this type of coverage, employees pay for their outpatient treatments and services out of pocket and later submit the bills and receipts to the insurance provider for reimbursement. The insurance provider reimburses a portion or the entire amount, subject to the coverage limit specified in the policy. This type of coverage offers flexibility in choosing healthcare providers but requires employees to handle the upfront payment and subsequent reimbursement process.
              </p>
              <p>
                <strong>b) Direct Settlement OPD Coverage:</strong> Under direct settlement OPD coverage, employees can avail of the covered OPD treatments and services without upfront payment. The insurance provider directly settles the bills with the healthcare provider, up to the specified coverage limit. This type of coverage eliminates the need for employees to handle financial transactions at the time of treatment, providing convenience and streamlining the reimbursement process.
              </p>
              <h2 className="text-xl font-bold text-gray-800">
              How to Get OPD Coverage for Your Employees?
              </h2>
              <p>
              To provide OPD coverage for your employees, follow these steps or <a href="#" className="text-blue-600 hover:text-blue-700">
              schedule a call with team AWS CC :
              </a>
              </p>
              <p>
              <strong>a) Assess Insurance Providers:</strong> Research insurance providers that offer OPD coverage as part of their employee health insurance plans. Consider factors such as the provider's reputation, the network of healthcare providers, claim settlement process, and customer service to ensure reliability and quality coverage.
              </p>
              <p>
              <strong>b) Evaluate Coverage Options:</strong> Understand the different OPD coverage options available, such as reimbursement-based or direct settlement. Assess the coverage limits, network providers, geographic coverage, add-on features, and customisation options offered by insurance providers to select the most suitable coverage for your employees' needs.
              </p>
              <p>
              <strong>c) Customise the Policy:</strong> Work with the insurance provider to customise the OPD coverage according to your organisation's requirements. Determine the coverage limit per employee, any deductible or co-payment requirements, specific exclusions or limitations, and any additional features desired.
              </p>
              <p>
              <strong>d) Communicate the Policy to Employees:</strong> Clearly communicate the addition of OPD coverage to your employees. Provide comprehensive information about the coverage, including the process of availing benefits, network providers, any co-payment requirements, and any restrictions or limitations that apply.
              </p>
              <p>
              <strong>e) Employee Enrolment and Support:</strong> Facilitate the enrolment process by collecting necessary employee information and assisting them in understanding the policy terms and procedures. Offer support channels for claim-related queries or issues, ensuring employees can easily access the benefits provided by the OPD coverage.
              </p>
              <h2 className="text-xl font-bold text-gray-800">
              What are the inclusions of an OPD Policy?
              </h2>
              <p>
              While the specific inclusions may vary depending on the insurance provider and policy, typical inclusions in an OPD policy may encompass:
              </p>
              <p>
              <strong>a) Consultation Fees:</strong> Coverage for doctor consultations across various specialties, allowing employees to seek medical advice and treatment for their healthcare needs.
              </p>
              <p>
              <strong>b) Diagnostic Tests:</strong> Coverage for a wide range of diagnostic tests, including laboratory tests, radiology examinations, and other investigative procedures.
              </p>
              <p>
              <strong>c) Medications:</strong> Coverage for prescribed medications, ensuring employees have access to essential drugs prescribed during their outpatient visits.
              </p>
              <p>
              <strong>d) Preventive Healthcare:</strong> Coverage for preventive healthcare check-ups, vaccinations, health screenings, and wellness programs that promote employee well-being and early disease detection.
              </p>
              <p>
              <strong>e) Specialist Visits:</strong> Coverage for consultations with specialists, such as cardiologists, orthopedists, dermatologists, and other healthcare professionals based on the policy terms.
              </p>
              <p>
              <strong>f) Physiotherapy Sessions:</strong> Coverage for physiotherapy sessions that aid in the rehabilitation and management of musculoskeletal conditions.
              </p>
              
              <h2 className="text-xl font-bold text-gray-800">
              What are the exclusions of an OPD Policy?
              </h2>
              <p>
              While the specific exclusions may vary depending on the insurance provider and policy, common exclusions in an OPD policy may include:
              </p>
              <p>
              <strong>a) Pre-Existing Conditions:</strong> OPD coverage often excludes pre-existing conditions, which are medical conditions diagnosed before the policy's effective date. However, coverage for subsequent treatments or consultations related to these conditions may be included after a waiting period.
              </p>
              <p>
              <strong>b) Cosmetic Treatments:</strong> Procedures deemed cosmetic in nature, such as plastic surgery for non-medical reasons or beauty treatments, are generally excluded from OPD coverage.
              </p>
              <p>
              <strong>c) Experimental or Investigational Treatments: </strong> OPD policies may exclude coverage for treatments that are experimental, investigational, or not approved by relevant medical authorities.
              </p>
              <p>
              <strong>d) Alternative or Complementary Medicine:</strong> Services provided by alternative or complementary medicine practitioners, such as homeopathy or acupuncture, may be excluded unless specifically mentioned in the policy.
              </p>
             
              <h2 className="text-xl font-bold text-gray-800">
              Important Policy Details of OPD Coverage for Corporates:
              </h2>
              <p>
              <strong>a) Coverage Limits</strong> OPD coverage may have a per-employee limit or an overall limit for the organisation, specifying the maximum amount that can be claimed for OPD expenses during a policy year.
              </p>
              <p>
              <strong>b) Co-payment or Deductible</strong> Some OPD policies may have a co-payment or deductible requirement, where employees are responsible for a percentage or fixed amount of the treatment cost.
              </p>
              <p>
              <strong>c) Network Providers: </strong> Insurance providers often have a network of preferred healthcare providers. Employees may be encouraged to utilise network providers to avail of maximum benefits, including cashless services.
              </p>
              <p>
              <strong>d) Claims Process: </strong> Familiarise yourself with the claims process, including the submission of bills, required documentation, and turnaround time for claim settlement. Clear communication about the claims process to employees can help streamline the reimbursement experience.
              </p>
              <p>
              <strong>e) Policy Renewal: </strong> Understand the renewal process, including any changes in premiums, coverage limits, or terms. It is essential to review the policy periodically to ensure it continues to meet the evolving needs of your employees and the organisation.
              </p>
              <p>
              OPD coverage is a crucial component of comprehensive employee healthcare benefits, providing financial assistance for outpatient treatments and services. By understanding the types of OPD coverage, how to obtain it for your employees, the exclusions, and inclusions in an OPD policy, and important policy details for corporates, you can make informed decisions when designing an employee benefits package. Offering OPD coverage demonstrates a commitment to employee well-being, ensuring they have access to quality healthcare services and empowering them to maintain their health and productivity.
              </p>
              <p><u className="font-semibold" text-black>
              In conclusion
              </u><br></br>
              OPD coverage is a crucial component of comprehensive employee healthcare benefits, providing financial assistance for outpatient treatments and services. By understanding the types of OPD coverage, how to obtain it for your employees, the exclusions, and inclusions in an OPD policy, and important policy details for corporates, you can make informed decisions when designing an employee benefits package. Offering OPD coverage demonstrates a commitment to employee well-being, ensuring they have access to quality healthcare services and empowering them to maintain their health and productivity.
              </p>
            </div>
          </div>
          

          {/* Author Section */}
          <div className="mt-8 flex items-center space-x-4">
            <img
              src={author}
              alt="Author"
              className="w-12 h-12 rounded-full"
            />
             <div>
              <p className="font-semibold text-gray-800">Sanyukta Iyer</p>
              <p className="text-sm text-gray-500">Senior Content Manager</p>
            </div>
            <div className="mt-2 flex space-x-2">
      <span className="bg-[#f2f6ff] text-black text-xs font-medium px-2 py-1 rounded-md hover:bg-gray-200">
      Employee Health Insurance
      </span>
      <span className="bg-[#f2f6ff] text-black text-xs font-medium px-2 py-1 rounded-md hover:bg-gray-200">
      Employee Wellness
      </span>
      <span className="bg-[#f2f6ff] text-black text-xs font-medium px-2 py-1 rounded-md hover:bg-gray-200">
      Health
      </span>
    </div>
          </div>
        </section>
         
        <section className="mt-10 bg-blue-50 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Enjoyed reading it? Spread the word
          </h2>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="#"
              className="text-blue-700 hover:text-blue-900 text-lg font-medium"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-900 text-lg font-medium"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </section>

        
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            More articles like this
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title:
                  "ESIC - Employees' State Insurance Corporation: All You Need to Know About Eligibility, Coverage, And Benefits",
                author: "Sakshi Maheshwari",
                tag: "INSURANCE 101",
                img:"" , //image1
              },
              {
                title:
                  "The Ultimate Guide to Employee Engagement: Four Types That Will Drive Your Business in 2023",
                author: "Sakshi Maheshwari",
                tag: "",
                img: "", //image2
              },
              {
                title:
                  "Empowering LGBTQIA+ Employees, Nova Benefits Rolls Out An Inclusive Health Insurance Cover For Companies",
                author: "Nandini Jain",
                tag: "NOVA IN THE NEWS",
                img: "", //image3
              },
            ].map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 space-y-3"
              >
                <img
                  src={article.img}
                  alt={article.title}
                  className="rounded-lg"
                />
                {article.tag && (
                  <span className="text-xs text-white bg-blue-700 px-2 py-1 rounded-md">
                    {article.tag}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-gray-800">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">By {article.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-10 bg-[#c8cbcb] text-black rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Contact AWS.CC for assistance 
            </h2> {/* upper_footer */}
            <p className="mt-2 text-black">
              Schedule a call with us and we’ll get back to you
            </p>
          </div>
          <button className="mt-4 md:mt-0 bg-[#74BEBB] text-blue-900 px-6 py-2 rounded-md hover:bg-gray-200">
            Schedule a Callback
          </button>
        </section>
        
        
        <footer class="bg-black text-white py-10">
  <div class="container mx-auto px-4">
    
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <p class="text-lg uppercase font-bold">Heard enough?</p>
        <h2 class="text-4xl font-bold mt-2">Contact us</h2>
        <hr class="border-yellow-500 border-t-2 w-16 mt-2" />
      </div>
      <div class="mt-6 md:mt-0">
        <a
          href="#"
          class="inline-block bg-yellow-500 text-black p-4 rounded-full hover:bg-yellow-400 transition"
        >
          <span class="sr-only">Contact us</span> →
        </a>
      </div>
    </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      
      <div>
        <p class="text-lg font-semibold">Leading with Cloud Innovations®</p>
      </div>

        <div>
        <p class="font-semibold">Pune</p>
        <p>
          <a href="mailto:newbusiness@weareimpero.com" class="hover:underline">
            awsmail@gmail.com
          </a>
        </p>
        <p>+91 1234567890</p>
        <p>
          S.No.124, Paud Road
          Kothrud, Pune,
          Maharashtra 411038
          </p>
        <p>
          <a href="https://www.google.com/maps/place/MIT+World+Peace+University+(MIT-WPU)/@18.5179499,73.8125659,752m/data=!3m1!1e3!4m10!1m2!2m1!1smit+wpu+address!3m6!1s0x3bc2bfb9e53a05f9:0x2be5e8da02be693e!8m2!3d18.5177559!4d73.8151112!15sCg9taXQgd3B1IGFkZHJlc3MiAkgBWgkiB21pdCB3cHWSAQp1bml2ZXJzaXR54AEA!16s%2Fm%2F04d_4lg?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D" class="hover:underline text-yellow-500">See on Map →</a>
        </p>
      </div>

        <div>
        <p class="font-semibold">another location</p>
        <p>
          <a href="mailto:buenosaires@weareimpero.com" class="hover:underline">
            one more mail
          </a>
        </p>
        <p>+91 1234567890</p>
        <p>mit address or some other address</p>
        <p>
          <a href="#" class="hover:underline text-yellow-500">See on Map →</a>
        </p>
      </div>

        <div>
        <p class="font-semibold">Want to be the smartest in your College ?</p>
        <p>
          <a href="#" class="hover:underline text-yellow-500">Sign up for our newsletter →</a>
        </p>
        <div class="flex space-x-4 mt-4">
          <a href="#" class="hover:opacity-75">
            <img src={meetup} />
          </a>
          <a href="#" class="hover:opacity-75">
            {/* <img src /> */}
          </a>
          <a href="#" class="hover:opacity-75">
            <img src={instagram} />
          </a>
          <a href="#" class="hover:opacity-75">
            <img src={LinkedIn} />
          </a>
        </div>
      </div>
    </div>
    </div>
    </footer>

      </main>
    </div>
  );
};

export default App;

