import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faqs() {
    return (
        <div id="faqs" className="w-full h-[80vh] border-0 border-black flex flex-col justify-start dark:text-white text-black items-center dark:bg-black select-none">

            <div className="text-[1.8rem] font-medium pb-4">FAQs</div>
            <Accordion  className="w-full px-2 md:px-0 md:w-[45%]" type="single" collapsible>

                <AccordionItem value="item-1">
                    <AccordionTrigger>What makes UIC different from typical UI component libraries?</AccordionTrigger>
                    <AccordionContent>
                        UIC focuses on visually creative, statement-making components rather than generic buttons or inputs. It’s designed to help projects stand out.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Can you explain what “Fully Modular” means in the context of UIC?</AccordionTrigger>
                    <AccordionContent>
                       You can install or copy only the components you need without pulling in a full library, keeping projects lightweight and flexible.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Is UIC free to use in commercial projects? Why or why not?</AccordionTrigger>
                    <AccordionContent>
                        Yes, it is free to use. You get full access to the code, so you can modify or extend it as needed.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>What are the performance considerations when using multiple UIC components on a single page?</AccordionTrigger>
                    <AccordionContent>
                        Using more than 2 to 3 components on a page can overload animations and affect performance or user experience.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>Can UIC components be modified after being added to a project?</AccordionTrigger>
                    <AccordionContent>
                        Yes, full code visibility allows developers to extend or customize components freely.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>What is the main mission of UIC?</AccordionTrigger>
                    <AccordionContent>
                        To provide free, flexible, and visually stunning components that elevate web projects.
                    </AccordionContent>
                </AccordionItem>



            </Accordion>

        </div>
    )
}