import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl text-primary">Page not found</p>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}
