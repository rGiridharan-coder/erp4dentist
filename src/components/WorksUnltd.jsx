import WorksSection from "./WorksSection";

const page1Images = {
  t1: "/images/works_unltd_t1.png",
  t2: "/images/works_unltd_t2.png",
  t3: "/images/works_unltd_t3.png",
  t4: "/images/works_unltd_t4.png",
  t5: "/images/works_unltd_t5.png",
  t6: "/images/works_unltd_t6.png",
};

const page1Content = [
  { id: "t1", title: "1", description: "To create a user login, click on 'Branch' on main dashboard." },
  { id: "t2", title: "2", description: "On the Branch page, click on 'Add User'." },
  { id: "t3", title: "3", description: "Please observe that the Add User form opens up." }, 
  { id: "t4", title: "4", description: "Add the User name, User login ID and password for the new user, for whom login has to be created. Also select all the menu options for which the user should be given access to like Dashboard, Calendar, Appointment, Procedure, and so on. Click 'Save' to create new user login." }, 
  { id: "t5", title: "5", description: "Please observe that the new user has been created." }, 
  { id: "t6", title: "6", description: "To delete the created user, click on the delete icon. The user gets deleted permanently" }, 
];

export default function WorksUnltd() {
  return <WorksSection images={page1Images} content={page1Content} />;
} 