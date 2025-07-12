import React from "react";
import { DollarSign, Hourglass, CheckCircle } from "lucide-react";

const StepperIcon = ({ icon, isActive }) => {
     const activeStyle = isActive
          ? "bg-purple-600 text-white"
          : "bg-gray-200 text-gray-400";
     return (
          <div
               className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeStyle}`}
          >
               {icon}
          </div>
     );
};

const PaymentStepper = ({ currentStep }) => {
     const steps = [
          { icon: <DollarSign size={20} /> },
          { icon: <Hourglass size={20} /> },
          { icon: <CheckCircle size={20} /> },
     ];

     return (
          <div className="w-full max-w-md mx-auto flex flex-col items-center mb-12">
               <div className="flex items-center justify-between w-full">
                    {steps.map((step, index) => (
                         <React.Fragment key={index}>
                              <StepperIcon
                                   icon={step.icon}
                                   isActive={index <= currentStep}
                              />
                              {index < steps.length - 1 && (
                                   <div
                                        className={`flex-grow h-1 mx-2 ${
                                             index < currentStep
                                                  ? "bg-purple-600"
                                                  : "bg-gray-200"
                                        }`}
                                   ></div>
                              )}
                         </React.Fragment>
                    ))}
               </div>
               <div className="flex justify-between w-full mt-2 text-xs text-gray-500">
                    {steps.map((step, index) => (
                         <span key={index} className="w-1/2 text-center">
                              {step.label}
                         </span>
                    ))}
               </div>
          </div>
     );
};

export default PaymentStepper;
