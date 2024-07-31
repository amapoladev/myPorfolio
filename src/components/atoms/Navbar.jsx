import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About me", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Skills", href: "#" },
  { name: "Resume", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-transparent"> {/* Hacemos transparente la navbar */}
      <header className="fixed inset-x-0 top-0 z-50 ">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 bg-cyan-950"> {/* Aseguramos transparencia */}
          {/* <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 text-white font-playwrite">
              Johana Sandoval
            </a>
          </div> */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" // Texto blanco
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-sister font-semibold leading-6 text-white hover:text-gray-400" // Texto blanco y efecto hover
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" /> {/* Fondo de cristal */}
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-transparent px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 backdrop-blur-lg">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 text-white font-sister font-bold text-lg">
                Johana Sandoval
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white" // Texto blanco
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 font-sister block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-white/20" // Texto blanco y efecto hover
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
