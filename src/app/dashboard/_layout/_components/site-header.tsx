import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useBreadcrumb } from "@/stores/use-breadcrumb";
import { Fragment, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function SiteHeader() {
  const { items, setBreadcrumb } = useBreadcrumb();
  const location = useLocation();

  useEffect(() => {
    setBreadcrumb([]);
  }, [location, setBreadcrumb]);

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <nav className="flex items-center gap-2 justify-between w-full p-2">
          <Breadcrumb>
            <BreadcrumbList>
              {items.length > 0 &&
                items.map((item, index) => (
                  <Fragment key={`fragment-${item.path}`}>
                    <BreadcrumbItem>
                      {item.path ? (
                        <Link to={item.path}>{item.name}</Link>
                      ) : (
                        <BreadcrumbPage>{item.name}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {index < items.length - 1 && <BreadcrumbSeparator />}
                  </Fragment>
                ))}
            </BreadcrumbList>
          </Breadcrumb>
          <div>
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
