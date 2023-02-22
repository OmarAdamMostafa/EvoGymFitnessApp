import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({ setSelectedPage }: Props) => {
    const links: Array<{id:React.Key, name:string, value:SelectedPage}> = [
        {id: 1, name: 'Home',value: SelectedPage.Home},
        {id: 2, name: 'Benefits',value: SelectedPage.Benefits},
        {id: 3, name: 'Our Classes',value: SelectedPage.OurClasses},
        {id: 4, name: 'Contact Us',value: SelectedPage.ContactUs}
    ]

    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
                    Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                    purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                    orci ut habitant laoreet. Iaculis tristique.
                </p>
                <p>© EVOGYM All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <div className="flex flex-col">
                        {
                            links.map((link)=>(
                                <div key={link.id} className="my-2">
                                    <AnchorLink
                                        className="hover:text-primary-300 transition duration-500"
                                        onClick={()=>setSelectedPage(link.value)} 
                                        href={`#${link.value}`}>
                                            {link.name}
                                    </AnchorLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                    <p>(333)425-6825</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;