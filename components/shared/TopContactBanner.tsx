import { EMAIL_ID, PHONE_NUMBERS } from "@/config/contactConfig";
import { Phone, Mail } from "lucide-react";

const TopContactBanner = () => {
  return (
    <div className="w-full bg-primary py-2">
      <div className="container mx-auto flex md:flex-row flex-col justify-between items-center text-white sm:text-[12px] text-[10px]">
        <div className="whitespace-nowrap text-center md:text-left font-body">
          Dhi Growth: Turning Your Business Potential into Lasting Success.
        </div>

        <div className="flex flex-row flex-nowrap items-center space-x-2 lg:space-x-6 mt-1 md:mt-0">
          <div className="flex flex-row items-center whitespace-nowrap">
            <Phone size={16} className="mr-2" />
            <span>
              Ph -{" "}
              <a href={`tel:${PHONE_NUMBERS[0]}`} className="hover:underline">
                +91-{PHONE_NUMBERS[0]}
              </a>
            </span>
          </div>

          <div className="flex flex-row items-center whitespace-nowrap">
            <Mail size={16} className="mr-2" />
            <span>
              Mail -{" "}
              <a href={`mailto:${EMAIL_ID}`} className="hover:underline">
                {EMAIL_ID}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContactBanner;