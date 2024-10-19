import DefaultFooter from "@/components/core/footer/DefaultFooter"
import DefaultNavbar from "@/components/core/navbar/DefaultNavbar"
import { Toaster } from "@/components/ui/toaster"
import NextTopLoader from 'nextjs-toploader'

const template = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='text-oc-primary-1-900'>
            <NextTopLoader color="#5a4eae" showSpinner={false} />
            <div>
                <DefaultNavbar />
            </div>
            <div className='mt-24 md:mt-32'>
                {children}
            </div>
            <div className=''>
                <DefaultFooter />
            </div>
            <Toaster />
        </div>
    )
}

export default template