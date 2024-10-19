"use client";
// import { toast } from "@/hooks/use-toast";
// import Button from "@/components/ui/button";
import Link from "next/link";

// Define the types for the props of the Newsletter component
// type NewsletterProps = {
//     handleDataSubmit: Function;
//     isLoading: boolean;
// }

// Newsletter component with type safety
// const Newsletter: React.FC<NewsletterProps> = ({ handleDataSubmit, isLoading }) => {
//     const { handleChange, values, touched, errors, handleSubmit, resetForm } = useFormik({
//         initialValues: {
//             email: '',
//         },
//         validationSchema: yup.object().shape({
//             email: yup.string().email().required('This Field is Required'),
//         }),
//         onSubmit: async (data) => {
//             try {
//                 await handleDataSubmit(data);
//                 toast({
//                     //   variant: 'success',
//                     description: 'Subscription completed',
//                 });
//                 resetForm();
//             } catch (err: any) {
//                 err.errors.forEach((key: { attr: string; detail: string }) => {
//                     toast({
//                         description: `${key?.attr} - ${key?.detail}`,
//                     });
//                 });
//             }
//         },
//     });



//     return (
//         <div>
//             <form onSubmit={handleSubmit} className="space-y-3">
//                 <TextInput
//                     id="email"
//                     type="email"
//                     name="email"
//                     onChange={handleChange}
//                     value={values.email}
//                     error={Boolean(errors.email) && touched.email ? errors.email : undefined}
//                     placeholder="Enter Your Email"
//                 />
//                 <div>
//                     <Button
//                         type="submit"
//                         disabled={isLoading}
//                         className="w-full bg-oc-primary-3-500 text-oc-primary-1-900"
//                         label={isLoading ? 'Sending..' : 'Sent'}
//                     />
//                 </div>
//             </form>
//         </div>
//     );
// };

// Footer component with type safety
const DefaultFooter: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <div className="bg-oc-primary-1-900 text-oc-white-50">
            <div className="sticky oc-commonContainer pb-12 top-[100vh] pt-28">
                <footer className="w-full text-w-paragraph-regular-20 flex flex-col justify-between items-center md:items-start gap-5 xl:gap-x-10 lg:flex-row gap-y-10">
                    {/* 1 */}
                    <div className="w-full md:w-1/4 flex flex-col gap-y-4">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            1
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="w-full md:w-1/4">
                        <div className="flex flex-col items-center gap-6 ml:0 lg:ml-10 md:items-start">
                            <p className="text-w-title-2-Medium-28 uppercase">Company</p>
                            2
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="w-full md:w-1/4 whitespace-nowrap">
                        <div className="flex flex-col items-center gap-6 ml:0 lg:ml-10 md:items-start">
                            <p className="text-w-title-2-Medium-28 uppercase">Service</p>
                            3DD
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="flex flex-col justify-end gap-2 w-full md:w-2/4 lg:w-1/4">
                        <p className="text-w-title-2-Medium-28 text-center md:text-left">Contact us</p>
                        4
                    </div>
                </footer>

                <div>
                    <div className="my-5 xl:my-7 h-[1px] bg-oc-primary-1-50"></div>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-oc-white-50 text-center pb-3">
                            © Copyright {year}, All Rights Reserved by 
                        </p>
                        <div className="flex flex-col md:flex-row items-center whitespace-nowrap md:gap-5">
                            <Link href="/privacy-policy">Privacy</Link>
                            <Link href="/terms-conditions">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultFooter;
