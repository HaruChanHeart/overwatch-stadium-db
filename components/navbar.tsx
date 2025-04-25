import { Navbar, NavbarBrand, NavbarContent, Link, Image } from "@heroui/react";

export default function CustomNavBar() {
  return (
    <Navbar disableAnimation isBordered maxWidth="xl">
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="StadiumDB"
              className="h-10 w-10 mr-3"
            />
            <p className="font-bold text-white decoration-none">StadiumDB</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
}
