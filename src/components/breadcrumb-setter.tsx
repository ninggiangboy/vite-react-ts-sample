import { useBreadcrumb, type BreadcrumbItem } from "@/stores/use-breadcrumb";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function BreadcrumbSetter({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  const { setBreadcrumb } = useBreadcrumb();
  const location = useLocation();

  useEffect(() => {
    setBreadcrumb(items);
  }, [items, setBreadcrumb, location]);

  return null;
}
