import { TreatmentsData } from "@/components/constants/services";
import Image from "next/image";
import React, { forwardRef, useState } from "react";
import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from '@headlessui/react';
import CommonCta from "@/components/CommonCta";

const Services = forwardRef<HTMLElement>((_, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [content, setContent] = useState([]);
    const [hoveredTreatmentId, setHoveredTreatmentId] = useState(null);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <section ref={ref} id="services-offered" className="flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brandPurpleDark my-6">
                Advanced Fertility Services
            </h2>

            <div className="flex flex-wrap justify-center gap-6 p-6">
                {TreatmentsData &&
                    TreatmentsData.map((treatment) => (
                        <div
                            key={treatment.id}
                            className="group relative flex flex-col items-center justify-center lg:w-[18em] w-[10em] lg:h-[12em] rounded-xl shadow-md bg-white cursor-pointer overflow-hidden"
                            title={treatment.name}
                            onMouseEnter={() => setHoveredTreatmentId(treatment.id)}
                            onMouseLeave={() => setHoveredTreatmentId(null)}
                            onClick={() => {
                                setContent(treatment?.content);
                                openModal();
                            }}
                        >
                            {/* Background Hover Effect */}
                            <div className="absolute inset-0 bg-brandPurpleDark scale-x-0 group-hover:scale-x-110 transition-transform duration-700 origin-center"></div>

                            {/* Treatment Icon (Switches on Hover) */}
                            <Image
                                src={hoveredTreatmentId === treatment?.id ? treatment.icon : treatment.icon1}
                                alt={treatment.name}
                                width={104}
                                height={104}
                                quality={100}
                                className="scale-x-110 group-hover:-scale-x-100 transition-transform duration-700 origin-center"
                            />

                            {/* Treatment Name */}
                            <p className="relative text-lg font-semibold text-brandPurpleDark text-center z-10 group-hover:text-white transition-colors duration-500">
                                {treatment?.name}
                            </p>
                        </div>
                    ))}

                {/* Modal */}
                <Transition appear show={isOpen} as={"div"}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <TransitionChild
                            as={"div"}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
                        </TransitionChild>

                        <div className="fixed inset-0 overflow-scroll">
                            <div className="mx-auto mt-14 flex max-w-lg items-center justify-center text-center lg:min-h-[60vh] lg:max-w-5xl">
                                <TransitionChild
                                    as={"div"}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <DialogPanel className="-mt-5 transform cursor-pointer overflow-hidden rounded bg-gray-50 px-3 align-middle opacity-95 shadow-xl transition-all lg:px-6">
                                      
                                        <div className="text-left py-10">
                                            {content &&
                                                content.map((value, index) => (
                                                    <div key={index} className="my-4">
                                                        {value}
                                                    </div>
                                                ))}
                                        </div>
                                        <div
                                            className="mx-auto my-4 hidden w-20 cursor-pointer items-center justify-center rounded-lg bg-brandPurpleDark px-3 py-1 font-semibold text-white sm:block"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </div>
                                        <div
                      className='mx-auto  mb-4 lg:my-4 flex w-20 cursor-pointer items-center justify-center rounded-lg bg-brandPurpleDark px-3 py-1 font-semibold text-white sm:hidden'
                      onClick={closeModal}
                    >
                      Close
                    </div>
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>

            <CommonCta classname="my-2" />
        </section>
    );
});

Services.displayName = "Services";

export default Services;
