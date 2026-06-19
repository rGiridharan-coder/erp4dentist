import WorksSection from "./WorksSection";

const page2Images = {
  t1: "/images/works_pat_t1.png",
  t2: "/images/works_pat_t2.png",
};

const page2Content = [
  {
    id: "t1",
    title: "1",
    description: "After creating an appointment for a patient, click on the 'Appointment and Patient Records' menu on the dashboard. Click on ‘View Patient’ to view all the patient-related information."
  },
  {
    id: "t2",
    title: "2",
    descriptionTop: "The “View Patient” menu is an All-in-one database capturing complete patient information.",
    list: [      
      "Patient communication address and relevant personal information.",
      "Patient medical history, any current medications, allergies, etc.",
      "EMR - Electronic Medical Records - complete treatment history of the patient from observation to billing."      
    ],
    descriptionBottom: "Patient management in ERP4 Dentist streamlines clinic operations by centralising patient data, enhancing care coordination, and improving overall patient experience."
  },
];

export default function WorksPat() {
  return <WorksSection images={page2Images} content={page2Content} />;
}
