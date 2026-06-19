import WorksSection from "./WorksSection";

const page1Images = {
  t1: "/images/works_epres_t1.png",
  t2: "/images/works_epres_t2.png",
  t3: "/images/works_epres_t3.png",
  t4: "/images/works_epres_t3.png",
};

const page1Content = [
  { id: "t1", title: "1", description: "To create an E-Prescription, click on the 'Prescriptions' tab under EMR, from the view patients menu. Following this, click on the 'Add new prescription' button to start adding drugs to the database." },
  { id: "t2", title: "2", description: "Please observe that the Prescription form opens up. Fill in all details. Select the Doctor's name and drug name from the database. Select dosage and duration, and key in instructions if any. Add more drugs by clicking 'Add Row'. Click 'Save all' once completed." },
  { id: "t3", title: "3", description: "Please observe that the created prescription is listed under the prescriptions tab. Patient and Doctor receive the prescription copy through WhatsApp and Email." }, 
  { id: "t4", title: "4", description: "E-Prescription, along with the doctor's signature, can be viewed and printed as required." }, 
];

export default function WorksEpres() {
  return <WorksSection images={page1Images} content={page1Content} />;
}