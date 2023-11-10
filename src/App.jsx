import { BiBuildings } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiCommercialAirplane } from "react-icons/gi";
import { LiaShipSolid } from "react-icons/lia";
import { LuContainer } from "react-icons/lu";
import { TbFidgetSpinner } from "react-icons/tb";
import "./App.css";
import TruckIcon from "./assets/images/TruckIcon.svg";
import ShaypramLogo from "./assets/images/shaypram-cargo.png";

function App() {
  return (
    <>
      <div className="min-h-screen text-white pt-6">
        <div className="section !p-5 flex items-center justify-center gap-8 bg-[#171f22] rounded-lg">
          <div className="w-28 aspect-square mb-2 rounded-full overflow-hidden">
            <img src={ShaypramLogo} />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl text-center font-medium">SHAYPRAM</span>
            <span className="uppercase text-slate-400">Cargo & Logistics</span>
          </div>
        </div>
        <div className="section">
          <div className="grid grid-cols-2 min-h-[400px]">
            <div className="flex flex-col justify-center items-start">
              <div className="text-lg mb-2">We Offer The Best</div>
              <h1 className="mb-4">Simplifying Global Logistics</h1>
              <div className="text-lg">
                Your Trusted Partner for Seamless Supply Chain
              </div>
              <button className="bg-green-700 !outline-none !border-green-700 my-6">
                Request a Quote
              </button>
            </div>
            <div className="my-auto">
              <img src={TruckIcon} />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="bg-[#171f22] p-8 rounded-lg">
            <div className="flex gap-8">
              <div className="flex-1 flex justify-between pr-12 items-center border-r-2 border-gray-800">
                <div>
                  <div className="uppercase tracking-wider text-xl">
                    Road Freight
                  </div>
                  <div className="tracking-wider text-sm text-gray-400">
                    Forwarding
                  </div>
                </div>
                <div>
                  <CiDeliveryTruck size={60} />
                </div>
              </div>
              <div className="flex-1 flex justify-between pr-12 items-center border-r-2 border-gray-800">
                <div>
                  <div className="uppercase tracking-wider text-xl">
                    Air Freight
                  </div>
                  <div className="tracking-wider text-sm text-gray-400">
                    Forwarding
                  </div>
                </div>
                <div>
                  <GiCommercialAirplane size={35} />
                </div>
              </div>
              <div className="flex-1 flex justify-between items-center">
                <div>
                  <div className="uppercase tracking-wider text-xl">
                    Ocean Freight
                  </div>
                  <div className="tracking-wider text-sm text-gray-400">
                    Forwarding
                  </div>
                </div>
                <div>
                  <LiaShipSolid size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="p-8 rounded-lg my-24 flex flex-col items-center gap-32">
            <div className="text-5xl w-3/5 text-center">
              How SHAYPRAM simplifies cargo shipping
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex-1 flex-col pr-12 items-center border-r-2 border-gray-800">
                <div className="tracking-wider text-xl mb-4 flex items-start gap-4">
                  <div className="w-12 h-12 grid place-items-center bg-[#171f22] rounded-full">
                    <span>1</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-12 flex items-center mb-4">
                      Request a quote
                    </div>
                    <div className="tracking-wider text-sm text-gray-400">
                      Get an instant quote when you choose a service from our
                      wide variety of logistics services.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex-col pr-12 items-center">
                <div className="tracking-wider text-xl mb-4 flex items-start gap-4">
                  <div className="w-12 h-12 grid place-items-center bg-[#171f22] rounded-full">
                    <span>2</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-12 flex items-center mb-4">
                      Get the best offer
                    </div>
                    <div className="tracking-wider text-sm text-gray-400">
                      Get an instant quote when you choose a service from our
                      wide variety of logistics services.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex-col pr-12 items-center border-r-2 border-gray-800">
                <div className="tracking-wider text-xl mb-4 flex items-start gap-4">
                  <div className="w-12 h-12 grid place-items-center bg-[#171f22] rounded-full">
                    <span>3</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-12 flex items-center mb-4">
                      Manage and track
                    </div>
                    <div className="tracking-wider text-sm text-gray-400">
                      Get an instant quote when you choose a service from our
                      wide variety of logistics services.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex-col pr-12 items-center">
                <div className="tracking-wider text-xl mb-4 flex items-start gap-4">
                  <div className="w-12 h-12 grid place-items-center bg-[#171f22] rounded-full">
                    <span>4</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-12 flex items-center mb-4">
                      Get it done
                    </div>
                    <div className="tracking-wider text-sm text-gray-400">
                      Get an instant quote when you choose a service from our
                      wide variety of logistics services.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 place-items-start">
          <div className="p-12 flex flex-col items-center justify-start gap-8 border-r-2 border-gray-900 hover:bg-[#171f22] hover:cursor-pointer h-full">
            <div>
              <LiaShipSolid size={40} />
            </div>
            <div className="w-4/5 text-center text-2xl">
              International Export & Import, Air & Sea
            </div>
            <div className="text-center text-sm tracking-wider">
              International door to door solution, order management and
              preparation of complete documentation.
            </div>
          </div>
          <div className="p-12 flex flex-col items-center justify-start gap-8 border-r-2 border-gray-900 hover:bg-[#171f22] hover:cursor-pointer h-full">
            <div>
              <LuContainer size={40} />
            </div>
            <div className="w-4/5 text-center text-2xl">
              Customs Clearance & Consultancy
            </div>
            <div className="text-center text-sm tracking-wider">
              Processing of import documentation, communication with Australian
              customs and AQIS.
            </div>
          </div>
          <div className="p-12 flex flex-col items-center justify-start gap-8 border-r-2 border-gray-900 hover:bg-[#171f22] hover:cursor-pointer h-full">
            <div>
              <CiDeliveryTruck size={50} />
            </div>
            <div className="w-4/5 text-center text-2xl">Transport</div>
            <div className="text-center text-sm tracking-wider">
              All transport services to complement specific supply chain
              requirements.
            </div>
          </div>
          <div className="p-12 flex flex-col items-center justify-start gap-8 border-r-2 border-gray-900 hover:bg-[#171f22] hover:cursor-pointer h-full">
            <div>
              <BiBuildings size={40} />
            </div>
            <div className="w-4/5 text-center text-2xl">
              Warehousing & Distribution
            </div>
            <div className="text-center text-sm tracking-wider">
              Warehousing facilities in Sydney, Brisbane and Melbourne set for
              full 3PL pick and pack operations, cross dock, long-term and
              short-term storage of general products, food commodities and
              hazardous cargo with full capacity to distribute nationwide.
            </div>
          </div>
          <div className="p-12 flex flex-col items-center justify-start gap-8 border-r-2 border-gray-900 hover:bg-[#171f22] hover:cursor-pointer h-full transition-all">
            <div>
              <TbFidgetSpinner size={40} />
            </div>
            <div className="w-4/5 text-center text-2xl">AQIS Services</div>
            <div className="text-center text-sm tracking-wider">
              CALM has Quarantine approved premises in Sydney
            </div>
          </div>
        </div>
        <div className="section text-center">
          <span>Copyright © 2023 Cargo and Logistics Management</span>
        </div>
      </div>
    </>
  );
}

export default App;
