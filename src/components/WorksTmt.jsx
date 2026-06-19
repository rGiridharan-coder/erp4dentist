import WorksSection from "./WorksSection";

const page1Images = {
  t1: "/images/works_tmt_t1.png",
  t2: "/images/works_tmt_t2.png",
  t3: "/images/works_tmt_t3.png",
  t4: "/images/works_tmt_t4.png",
};

const page1Content = [
  { id: "t1", title: "1", description: "Navigate to the 'Observation' tab under EMR from the Appointment and Patient records menu to view the created observation. Add a treatment plan by clicking the 'Add Treatment' button." },
  { id: "t2", title: "2", description: "Treatment plan form opens up. Select the date of treatment and Doctor performing the treatment. Please observe that the teeth requiring treatment are already highlighted." },
  { id: "t3", title: "3", description: "Select the procedure and procedure type. Key in discounts, if any, given to the patient. Please observe that the treatment price gets prepopulated based on price/teeth per procedure. Click 'Save' once done." },
  { id: "t4", title: "4", description: "Please observe the new treatment plan created under the treatment tab" },
];

export default function WorksTmt() {
  return <WorksSection images={page1Images} content={page1Content} />;
}
