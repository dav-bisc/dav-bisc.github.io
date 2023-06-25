import Header from "../components/header";

const AdminDashboard = () => {
  const head = Header("Pannello di gestione");
  return (
    <div>
      {head}
      <div className="min-h-screen"></div>
    </div>
  );
};

export default AdminDashboard;
