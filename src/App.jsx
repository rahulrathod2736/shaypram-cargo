import { BiBuildings } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiCommercialAirplane } from "react-icons/gi";
import { LiaShipSolid } from "react-icons/lia";
import { LuContainer } from "react-icons/lu";
import { TbFidgetSpinner } from "react-icons/tb";
import "./App.css";
import TruckIcon from "./assets/images/TruckIcon.svg";

function App() {
  return (
    <div className="min-h-screen">
      <div className="bg-white fixed w-full drop-shadow-2xl top-0 left-0">
        <div className="p-8 mx-auto max-w-[1280px] flex flex-col gap-8 items-center justify-between md:flex-row">
          <div className="flex flex-col">
            <span className="text-3xl font-medium text-slate-900">
              SHAYPRAM
            </span>
            <span className="uppercase text-slate-400">Cargo & Logistics</span>
          </div>
          <div className="flex gap-8 text-black">
            <span className="cursor-pointer">Home</span>
            <span className="cursor-pointer">Track Order</span>
            <span className="cursor-pointer">Request Quote</span>
            <span className="cursor-pointer">About Us</span>
            <span className="cursor-pointer">Contact Us</span>
          </div>
        </div>
      </div>
      {/* <div className="section !p-5 flex items-center justify-center gap-8 rounded-lg">
        <div className="w-28 aspect-square mb-2  overflow-hidden">
          <img src={ShaypramLogo} />
        </div>
        <div className="flex flex-col">
          <span className="text-3xl text-center font-medium">SHAYPRAM</span>
          <span className="uppercase text-slate-400">Cargo & Logistics</span>
        </div>
      </div> */}
      <div className="section mt-52 md:mt-40">
        <div className="grid grid-cols-1 min-h-[400px] md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center items-center md:items-start order-2 md:order-1">
            <div className="text-lg mb-2">We Offer The Best</div>
            <div className="mb-4 text-center text-4xl font-semibold md:text-left">
              Simplifying Global Logistics
            </div>
            <div className="text-lg text-center md:text-left">
              Your Trusted Partner for Seamless Supply Chain
            </div>
            <button className="bg-green-700 text-white !outline-none !border-green-700 my-6">
              Request a Quote
            </button>
          </div>
          <div className="my-auto order-1 md:order-2 w-3/4 mx-auto md:w-full">
            <img src={TruckIcon} />
          </div>
        </div>
      </div>
      <div className="section p-8 md:p-12">
        <div className="bg-[#171f22] p-8 rounded-lg">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-1 flex justify-between pb-6 md:pb-0 md:pr-12 items-center border-b-2 md:border-b-0 md:border-r-2 border-gray-800 text-white">
              <div>
                <div className="uppercase tracking-wider text-xl">
                  Road Freight
                </div>
                <div className="tracking-wider text-sm text-gray-400">
                  Forwarding
                </div>
              </div>
              <div>
                <CiDeliveryTruck size={60} className="text-white" />
              </div>
            </div>
            <div className="flex-1 flex justify-between pb-6 md:pb-0 md:pr-12 items-center border-b-2 md:border-b-0 md:border-r-2 border-gray-800 text-white">
              <div>
                <div className="uppercase tracking-wider text-xl">
                  Air Freight
                </div>
                <div className="tracking-wider text-sm text-gray-400">
                  Forwarding
                </div>
              </div>
              <div>
                <GiCommercialAirplane size={35} className="text-white" />
              </div>
            </div>
            <div className="flex-1 flex justify-between items-center text-white">
              <div>
                <div className="uppercase tracking-wider text-xl">
                  Ocean Freight
                </div>
                <div className="tracking-wider text-sm text-gray-400">
                  Forwarding
                </div>
              </div>
              <div>
                <LiaShipSolid size={40} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section p-8 md:p-12">
        <div className="p-0 md:p-8 rounded-lg mb-24 flex flex-col items-center gap-32">
          <div className="text-3xl font-semibold w-4/5 md:w-3/5 md:text-5xl text-center">
            How SHAYPRAM simplifies cargo shipping
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex-1 flex-col pb-6 md:pb-0 md:pr-12 items-center border-b-2 md:border-b-0 md:border-r-2 border-[#171f2224]">
              <div className="tracking-wider text-xl mb-4 flex items-start gap-4">
                <div className="w-12 h-12 grid place-items-center bg-[#171f2228] rounded-full">
                  <span>1</span>
                </div>
                <div className="flex-1">
                  <div className="h-12 flex items-center mb-4">
                    Request a quote
                  </div>
                  <div className="tracking-wider text-sm text-gray-400">
                    Get an instant quote when you choose a service from our wide
                    variety of logistics services.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-col pb-6 md:pb-0 md:pr-12 items-center border-b-2 md:border-b-0 border-[#171f2224]">
              <div className="tracking-wider text-xl mb-4 flex items-start gap-4">
                <div className="w-12 h-12 grid place-items-center bg-[#171f2228] rounded-full">
                  <span>2</span>
                </div>
                <div className="flex-1">
                  <div className="h-12 flex items-center mb-4">
                    Get the best offer
                  </div>
                  <div className="tracking-wider text-sm text-gray-400">
                    Get an instant quote when you choose a service from our wide
                    variety of logistics services.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-col pb-6 md:pb-0 md:pr-12 items-center border-b-2 md:border-b-0 md:border-r-2 border-[#171f2224]">
              <div className="tracking-wider text-xl mb-4 flex items-start gap-4">
                <div className="w-12 h-12 grid place-items-center bg-[#171f2228] rounded-full">
                  <span>3</span>
                </div>
                <div className="flex-1">
                  <div className="h-12 flex items-center mb-4">
                    Manage and track
                  </div>
                  <div className="tracking-wider text-sm text-gray-400">
                    Get an instant quote when you choose a service from our wide
                    variety of logistics services.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-col pb-6 md:pb-0 md:pr-12 items-center border-[#171f2224]">
              <div className="tracking-wider text-xl mb-4 flex items-start gap-4">
                <div className="w-12 h-12 grid place-items-center bg-[#171f2228] rounded-full">
                  <span>4</span>
                </div>
                <div className="flex-1">
                  <div className="h-12 flex items-center mb-4">Get it done</div>
                  <div className="tracking-wider text-sm text-gray-400">
                    Get an instant quote when you choose a service from our wide
                    variety of logistics services.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 place-items-start">
        <div className="p-12 flex flex-col items-center justify-start gap-8 border-b-2 md:border-b-0 md:border-r-2 border-[#171f2224] hover:bg-[#171f220d] hover:cursor-pointer h-full">
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
        <div className="p-12 flex flex-col items-center justify-start gap-8 border-b-2 md:border-b-0 md:border-r-2 border-[#171f2224] hover:bg-[#171f220d] hover:cursor-pointer h-full">
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
        <div className="p-12 flex flex-col items-center justify-start gap-8 border-b-2 md:border-b-0 md:border-r-2 border-[#171f2224] hover:bg-[#171f220d] hover:cursor-pointer h-full">
          <div>
            <CiDeliveryTruck size={50} />
          </div>
          <div className="w-4/5 text-center text-2xl">Transport</div>
          <div className="text-center text-sm tracking-wider">
            All transport services to complement specific supply chain
            requirements.
          </div>
        </div>
        <div className="p-12 flex flex-col items-center justify-start gap-8 border-b-2 md:border-b-0 md:border-r-2 border-[#171f2224] hover:bg-[#171f220d] hover:cursor-pointer h-full">
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
        <div className="p-12 flex flex-col items-center justify-start gap-8 hover:bg-[#171f220d] hover:cursor-pointer h-full transition-all">
          <div>
            <TbFidgetSpinner size={40} />
          </div>
          <div className="w-4/5 text-center text-2xl">AQIS Services</div>
          <div className="text-center text-sm tracking-wider">
            CALM has Quarantine approved premises in Sydney
          </div>
        </div>
      </div>
      <div className="bg-slate-100 text-black">
        <div className="section text-center bg-slate-100">
          <span>Copyright © 2023 Cargo and Logistics Management</span>
        </div>
      </div>
    </div>
  );
}

export default App;
