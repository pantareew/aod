import { useEffect } from "react";

export default function DefaultService() {
  useEffect(() => {
    defaultPage();
  }, []);
  const defaultPage = () => {
    const redirect = "/services/wordpress-development";
    window.location.href = redirect;
  };
  return <div>Loading</div>;
}
