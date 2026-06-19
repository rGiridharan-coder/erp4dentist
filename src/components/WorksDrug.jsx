import WorksSection from "./WorksSection";

const page1Images = {
  t1: "/images/works_drug_t1.png",
  t2: "/images/works_drug_t2.png",
  t3: "/images/works_drug_t3.png",
};

const page1Content = [
  { id: "t1", title: "1", description: "To create a Drug Catalog, click on 'Drug Catalog' on the dashboard. Following this, click on the 'Create drug' button to start adding drugs to the database" },
  { id: "t2", title: "2", description: "Please observe that 'Add drug to catalog form' opens up. Fill in all the details like drug name, drug type, strength and instructions. Click 'Save' to save the drug to the database." },
  { id: "t3", title: "3", description: "Please observe that the saved drug Sensodyne is listed under the Drugs database." }, 
];

export default function WorksDrug() {
  return <WorksSection images={page1Images} content={page1Content} />;
} 
