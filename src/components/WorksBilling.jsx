import WorksSection from "./WorksSection";

const page1Images = {
  t1: "/images/works_bill_t1.png",
  t2: "/images/works_bill_t2.png",
  t3: "/images/works_bill_t3.png",
  t4: "/images/works_bill_t4.png",
  t5: "/images/works_bill_t5.png",
  t6: "/images/works_bill_t6.png",
};

const page1Content = [
  { id: "t1", title: "1", description: "To create a bill, click on the 'Billing tab' under EMR from the view patients menu. Under the 'Confirmed treatments' tab, you can observe all the completed treatments and their details. Click on the action button against any confirmed treatment." },
  { id: "t2", title: "2", description: "Please observe that a 'Create Bill' form opens up. Enter the amount to be paid and click 'create'." },
  { id: "t3", title: "3", description: "All the created bills are displayed under the Bills tab. To create a receipt, click on the Action button against the bill in the Bills tab." }, 
  { id: "t4", title: "4", description: "Please observe that a 'Create Receipt' form opens up. Enter the date of receipt and select the Doctor's name. Finally, click 'create'." }, 
  { id: "t5", title: "5", description: "All the created receipts are displayed under the Receipts tab. To view the receipt, click the 'view receipt' button. You can also choose to print the receipt. A copy of the receipt is sent to the patient through WhatsApp and Email." }, 
  { id: "t6", title: "6", description: "To view Invoice, click on the Invoice tab under EMR. You can view the treatment invoice. A copy of the Invoice is sent to the patient through WhatsApp and Email." }, 
];

export default function WorksBilling() {
  return <WorksSection images={page1Images} content={page1Content} />;
}