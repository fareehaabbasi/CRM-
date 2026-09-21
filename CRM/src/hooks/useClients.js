import { useEffect, useState } from "react";
import { supabase } from "../Lib/supabase";

const useClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchClients = async () => {
    setLoading(true);
    setError("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setClients([]);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("clients")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
      return;
    }

    const formattedClients = data.map((client) => ({
      id: client.id,
      userId: client.user_id,
      name: client.name,
      company: client.company || "",
      website: client.website || "",
      whatsapp: client.whatsapp || "",
      email: client.email || "",
      linkedin: client.linkedin || "",
      instagram: client.instagram || "",
      facebook: client.facebook || "",
      businessType: client.business_type || "",
      location: client.location || "",
      service: client.service || "",
      channel: client.channel || "",
      status: client.status || "New",
      followUpDate: client.follow_up_date || "",
      notes: client.notes || "",
      createdAt: client.created_at,
    }));

    setClients(formattedClients);
    setLoading(false);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return {
    clients,
    setClients,
    loading,
    error,
    fetchClients,
  };
};

export default useClients;