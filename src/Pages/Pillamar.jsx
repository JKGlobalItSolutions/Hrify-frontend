
import img1 from "../assets/Pillamar/img1.png"
import img2 from "../assets/Pillamar/img2.png"
import img3 from "../assets/Pillamar/img3.png"
import img4 from "../assets/Pillamar/img4.png"
import img5 from "../assets/Pillamar/img5.png"
import img6 from "../assets/Pillamar/img6.png"
import img7 from "../assets/Pillamar/img7.png"


function Pillamar() {

    return (

        <>

            <div className="w-100 p-3">
                <img
                    src={img1}
                    alt="Hero"
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        display: "block"
                    }}
                />
            </div>





            <div className="container my-5">
                <div className="row justify-content-center align-items-center g-4">

                    {/* Image 1 */}
                    <div className="col-lg-4 col-md-6 col-12 text-center">
                        <img
                            src={img2}
                            alt="Image 1"
                            style={{
                                width: "100%",
                                maxWidth: "280px",
                                height: "auto",
                                borderRadius: "20px"
                            }}
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="col-lg-4 col-md-6 col-12 text-center">
                        <img
                            src={img3}
                            alt="Image 2"
                            style={{
                                width: "100%",
                                maxWidth: "280px",
                                height: "auto",
                                borderRadius: "20px"
                            }}
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="col-lg-4 col-md-6 col-12 text-center">
                        <img
                            src={img4}
                            alt="Image 3"
                            style={{
                                width: "100%",
                                maxWidth: "280px",
                                height: "auto",
                                borderRadius: "20px"
                            }}
                        />
                    </div>

                </div>
            </div>



            <div
                style={{
                    width: "100%",
                    background: "linear-gradient(90deg, #008961 0%, #002319 100%)",
                    padding: "60px 0"
                }}

                className="mb-5"
            >
                <div className="row m-0 align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-12 col-md-12 text-white px-5">
                        <h2 style={{ fontWeight: "700", marginBottom: "20px" }}>
                            About Pillamar
                        </h2>

                        <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                            Our Payroll Management Software is built to simplify and automate your entire payroll workflow.
                            From employee onboarding to final payslip generation, every process is handled with precision
                            and compliance in mind. The system adapts to organizations of all sizes, ensuring flexibility,
                            accuracy, and complete control.
                        </p>

                        <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                            With real-time data integration, HR and finance teams can manage payroll effortlessly while
                            maintaining transparency for employees. Automated updates for statutory regulations help
                            businesses stay compliant without constant manual intervention.
                        </p>
                    </div>
                </div>
            </div>



            <div
                style={{
                    width: "100%",
                    padding: "60px 0",
                    backgroundColor: "#ffffff"
                }}
            >
                <div className="row m-0 align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-6 col-md-12 px-5">
                        <h2 style={{ color: "#002319", fontWeight: "700", marginBottom: "20px" }}>
                            Global Payroll Management
                        </h2>

                        <p style={{ color: "#000", fontSize: "16px", lineHeight: "1.7" }}>
                            Our Global Payroll Management Software helps businesses seamlessly manage
                            employee salaries across multiple countries with complete accuracy and
                            compliance. Designed to handle complex payroll requirements, the software
                            automatically aligns with local tax laws, statutory deductions, and labor
                            regulations of each region.
                        </p>

                        <p style={{ color: "#000", fontSize: "16px", lineHeight: "1.7" }}>
                            With a centralized, cloud-based platform, our solution streamlines payroll
                            processing, salary calculations, tax filings, and reporting—all from a single
                            dashboard. This improves transparency, reduces manual errors, and significantly
                            lowers administrative workload.
                        </p>

                        <p style={{ color: "#000", fontSize: "16px", lineHeight: "1.7" }}>
                            Built with advanced security and real-time updates, our software enables
                            organizations to confidently manage global workforces while minimizing
                            financial, compliance, and legal risks. Whether you’re scaling internationally
                            or managing remote teams, our payroll solution ensures efficiency, reliability,
                            and peace of mind.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="col-lg-6 col-md-12 text-center">
                        <img
                            src={img5}
                            alt="Global Payroll"
                            style={{
                                width: "100%",
                                maxWidth: "500px",
                                height: "auto",
                                objectFit: "contain"
                            }}
                        />
                    </div>

                </div>
            </div>



            <div
                style={{
                    width: "100%",
                    padding: "60px 0",
                    backgroundColor: "#ffffff"
                }}
            >
                <div className="row m-0 align-items-center">

                    {/* LEFT IMAGE */}
                    <div className="col-lg-6 col-md-12 text-center">
                        <img
                            src={img6}
                            alt="Staffing Solutions"
                            style={{
                                width: "100%",
                                maxWidth: "500px",
                                height: "auto",
                                objectFit: "contain"
                            }}
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="col-lg-6 col-md-12 px-5">
                        <h2 style={{ color: "#002319", fontWeight: "700", marginBottom: "20px" }}>
                            Staffing Solutions
                        </h2>

                        <p style={{ color: "#000", fontSize: "16px", lineHeight: "1.7" }}>
                            Our software solutions play a critical role in helping organizations build,
                            scale, and optimize their digital operations. Whether it’s custom software
                            development, web applications, mobile apps, or enterprise solutions, we
                            deliver technology that aligns perfectly with your business goals.
                        </p>

                        <p style={{ color: "#000", fontSize: "16px", lineHeight: "1.7" }}>
                            From startups to growing enterprises, our expert developers ensure you get
                            the right solution at the right time. By partnering with us, businesses can
                            streamline processes, reduce operational costs, and focus on what truly
                            matters—growth and innovation.
                        </p>
                    </div>

                </div>
            </div>


            <div
                style={{
                    width: "100%",
                    padding: "60px 0",
                    backgroundColor: "#ffffff"
                }}
            >
                <div className="row m-0 align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-6 col-md-12 px-5" >
                        <h2 style={{ color: "#002319", fontWeight: "700", marginBottom: "20px" }}>
                            Features
                        </h2>

                        <ul style={{ color: "#000", fontSize: "16px", lineHeight: "1.8", paddingLeft: "18px" }}>
                            <li>Automated salary computation with customizable pay structures</li>
                            <li>PF, ESI, TDS & statutory compliance management</li>
                            <li>Attendance & leave integration with real-time sync</li>
                            <li>Payslip generation and bulk salary processing</li>
                            <li>Employee self-service portal for payslips & tax details</li>
                            <li>Secure cloud-based access with role-based permissions</li>
                        </ul>

                        <h3 style={{ color: "#002319", fontWeight: "700", marginTop: "30px" }}>
                            Business Benefits
                        </h3>

                        <ul style={{ color: "#000", fontSize: "16px", lineHeight: "1.8", paddingLeft: "18px" }}>
                            <li>Reduces payroll processing time significantly</li>
                            <li>Eliminates calculation errors and compliance risks</li>
                            <li>Improves employee trust with accurate & timely payouts</li>
                            <li>Scales easily as your workforce grows</li>
                            <li>Centralized payroll data for better reporting & audits</li>
                        </ul>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="col-lg-6 col-md-12 text-center">
                        <img
                            src={img7}
                            alt="Payroll Features"
                            style={{
                                width: "100%",
                                maxWidth: "300px",
                                height: "auto",
                                objectFit: "contain"
                            }}
                        />
                    </div>

                </div>
            </div>






        </>
    )

}



export default Pillamar