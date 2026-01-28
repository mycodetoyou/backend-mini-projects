import API from "../api/axios.js";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    API.get("/admin/dashboard")
      .then(res => setData(res.data.message))
      .catch(err => console.log(err));
  }, []);

  return <h2>{data}</h2>;
};

export default AdminDashboard;
