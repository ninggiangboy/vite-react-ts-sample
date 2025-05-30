import { AppleHelloVietnameseEffect } from "@/components/apple-hello-effect";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <AppleHelloVietnameseEffect />
      <Button asChild className="mt-10">
        <Link to="/dashboard">Go to Dashboard</Link>
      </Button>
    </div>
  );
}
