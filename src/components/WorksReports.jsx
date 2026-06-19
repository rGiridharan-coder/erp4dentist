import WorksSection from "./WorksSection";

const page1Images = {
  t1: "/images/works_rpts_t1.png",
};

const page1Content = [
  { id: "t1", title: "1", description: "To generate reports on Appointments, click 'Appointment Report' under MIS Reports on the main menu. You can search for appointments based on patient name and doctor name, both for any chosen duration. This page also displays the total number of appointments in the clinic." },
];

export default function WorksReports() {
  return <WorksSection images={page1Images} content={page1Content} />;
}